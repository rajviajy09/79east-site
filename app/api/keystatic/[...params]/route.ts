import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

// The handler is created per request so that building the public site never
// needs the GitHub credentials; only the admin does (see CMS.md).
type Handler = ReturnType<typeof makeRouteHandler>;
const handler = (): Handler => makeRouteHandler({ config });

export const GET: Handler["GET"] = (req) => handler().GET(req);
export const POST: Handler["POST"] = (req) => handler().POST(req);
