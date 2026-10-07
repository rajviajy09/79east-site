import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

// The handler is created per request so that building the public site never
// needs the GitHub credentials; only the admin does (see CMS.md).
type Handler = ReturnType<typeof makeRouteHandler>;
const handler = (): Handler => makeRouteHandler({ config });

// Keystatic builds its GitHub sign-in redirect from the address the request
// arrived on. On Netlify that can be a temporary per-deploy address, which
// GitHub rejects, so pin it to the real site address (NEXT_PUBLIC_SITE_URL).
function withSiteOrigin(req: Request): Request {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) return req;
  const url = new URL(req.url);
  const target = new URL(url.pathname + url.search, site);
  if (target.origin === url.origin) return req;
  const init: RequestInit & { duplex?: "half" } = {
    method: req.method,
    headers: req.headers,
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
    init.duplex = "half";
  }
  return new Request(target, init);
}

export const GET: Handler["GET"] = (req) => handler().GET(withSiteOrigin(req));
export const POST: Handler["POST"] = (req) => handler().POST(withSiteOrigin(req));
