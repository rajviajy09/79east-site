import { config, fields, singleton } from "@keystatic/core";

// While developing, edits are written straight to files on your computer.
// In production the admin edits the GitHub repository (see CMS.md).
// Set NEXT_PUBLIC_KEYSTATIC_STORAGE=github locally to run the one-time
// "create GitHub app" setup.
const storage =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE !== "github"
    ? ({ kind: "local" } as const)
    : ({
        kind: "github",
        repo: (process.env.NEXT_PUBLIC_KEYSTATIC_REPO ?? "OWNER/REPO") as `${string}/${string}`,
      } as const);

// ── Reusable field helpers ───────────────────────────────────────────────
const picture = (label: string, description?: string) =>
  fields.image({
    label,
    description:
      description ??
      "Use a web-sized image (under about 500 KB) so the page stays fast.",
    directory: "public/uploads",
    publicPath: "/uploads/",
  });

const alt = () =>
  fields.text({
    label: "Image description (alt text)",
    description: "Describe the image for screen readers and search engines.",
  });

const text = (label: string, description?: string) => fields.text({ label, description });

const required = (label: string, description?: string) =>
  fields.text({ label, description, validation: { isRequired: true } });

const longText = (label: string, description?: string) =>
  fields.text({ label, description, multiline: true });

const href = (label = "Button link") =>
  fields.text({
    label,
    description:
      "A page on this site (e.g. /about) or a full web address (https://…). Leave empty for no link.",
  });

const seo = fields.object(
  {
    title: text("Page title", "Shown in the browser tab and Google results. Aim for under 60 characters."),
    description: longText(
      "Page description",
      "Shown under the title in Google results. Aim for under 160 characters.",
    ),
  },
  { label: "Search engine listing" },
);

const lines = "Press Enter to start a new line.";

// ── Content ──────────────────────────────────────────────────────────────
export default config({
  storage,
  ui: {
    brand: { name: "79 East" },
    navigation: {
      Pages: ["home", "about", "sustainability"],
      Site: ["siteSettings"],
    },
  },
  singletons: {
    home: singleton({
      label: "Home page",
      path: "content/home",
      format: { data: "json" },
      schema: {
        hero: fields.object(
          {
            headline: fields.text({
              label: "Headline",
              description: lines,
              multiline: true,
              validation: { isRequired: true },
            }),
            description: longText("Short description"),
            ctaLabel: text("Button text"),
            ctaHref: href(),
            desktopImage: picture("Background image (desktop)", "Wide landscape artwork shown on tablets and desktops."),
            mobileImage: picture("Background image (phone)", "Tall portrait artwork shown on phones."),
          },
          { label: "Hero — the banner at the top" },
        ),
        intro: fields.object(
          {
            image: picture("Image"),
            imageAlt: alt(),
            text: longText("Text"),
            ctaLabel: text("Button text"),
            ctaHref: href(),
          },
          { label: "Introduction — image and red card" },
        ),
        values: fields.object(
          {
            heading: longText("Heading", lines),
            intro: longText("Intro text"),
            items: fields.array(
              fields.object({ title: required("Title"), body: longText("Text") }),
              {
                label: "Columns",
                itemLabel: (p) => p.fields.title.value || "Column",
              },
            ),
          },
          { label: "Values — the three-column panel" },
        ),
        vetting: fields.object(
          {
            heading: longText("Heading", lines),
            intro: longText("Intro text"),
            cards: fields.array(
              fields.object({
                image: picture("Image"),
                imageAlt: alt(),
                title: required("Title"),
                body: longText("Description"),
                matters: longText("“Why it matters” line"),
              }),
              {
                label: "Cards",
                itemLabel: (p) => p.fields.title.value || "Card",
              },
            ),
          },
          { label: "Vetting cards — the scrolling row" },
        ),
        howItWorks: fields.object(
          {
            heading: longText("Heading"),
            intro: longText("Intro text"),
            image: picture("Side collage image"),
            imageAlt: alt(),
            steps: fields.array(
              fields.object({ title: required("Title"), body: longText("Description") }),
              {
                label: "Steps",
                itemLabel: (p) => p.fields.title.value || "Step",
              },
            ),
          },
          { label: "How it works" },
        ),
        ctaBanner: fields.object(
          {
            heading: longText("Heading", lines),
            text: longText("Text", lines),
            buttonLabel: text("Button text"),
            buttonHref: href(),
            leftIllustration: picture("Left illustration", "Decorative, shown on desktop only."),
            rightIllustration: picture("Right illustration", "Decorative, shown on desktop only."),
          },
          { label: "Call to action — the red banner" },
        ),
        seo,
      },
    }),

    about: singleton({
      label: "About page",
      path: "content/about",
      format: { data: "json" },
      schema: {
        hero: fields.object(
          {
            backgroundImage: picture("Background image"),
            mantra: longText("Mantra", "One line per row. " + lines),
            heading: longText("Statement"),
          },
          { label: "Opening — mantra and statement" },
        ),
        story: fields.object(
          {
            rows: fields.array(
              fields.object({ title: required("Title"), body: longText("Text") }),
              {
                label: "Rows",
                itemLabel: (p) => p.fields.title.value || "Row",
              },
            ),
          },
          { label: "Our story — Our Inspiration, Who We Are, Our Mission…" },
        ),
        values: fields.object(
          {
            heading: text("Heading"),
            intro: longText("Intro text"),
            items: fields.array(
              fields.object({ title: required("Title"), body: longText("Text") }),
              {
                label: "Values",
                itemLabel: (p) => p.fields.title.value || "Value",
              },
            ),
          },
          { label: "Values — the red panel" },
        ),
        cta: fields.object(
          {
            heading: longText("Heading"),
            text: longText("Text"),
            buttonLabel: text("Button text"),
            buttonHref: href(),
          },
          { label: "Call to action" },
        ),
        seo,
      },
    }),

    sustainability: singleton({
      label: "Sustainability page",
      path: "content/sustainability",
      format: { data: "json" },
      schema: {
        hero: fields.object(
          {
            backgroundImage: picture("Background image"),
            headline: fields.text({
              label: "Headline",
              description: lines,
              multiline: true,
              validation: { isRequired: true },
            }),
            description: longText("Short description"),
            ctaLabel: text("Button text"),
            ctaHref: href(),
          },
          { label: "Hero" },
        ),
        practices: fields.object(
          {
            heading: text("Heading"),
            intro: longText("Intro text"),
            cards: fields.array(
              fields.object({
                image: picture("Image"),
                imageAlt: alt(),
                title: required("Title"),
                body: longText("Description"),
              }),
              {
                label: "Cards",
                itemLabel: (p) => p.fields.title.value || "Card",
              },
            ),
          },
          { label: "Practices — the grid of cards" },
        ),
        cta: fields.object(
          {
            heading: longText("Heading"),
            text: longText("Text"),
            buttonLabel: text("Button text"),
            buttonHref: href(),
          },
          { label: "Call to action" },
        ),
        seo,
      },
    }),

    siteSettings: singleton({
      label: "Site settings",
      path: "content/site-settings",
      format: { data: "json" },
      schema: {
        menuLinks: fields.array(
          fields.object({
            title: required("Label"),
            href: required("Link", "e.g. /about"),
          }),
          { label: "Menu links", itemLabel: (p) => p.fields.title.value || "Link" },
        ),
        socialLinks: fields.array(
          fields.object({
            title: required("Network", "e.g. Instagram"),
            href: required("Link", "The full web address of your profile."),
          }),
          { label: "Social links", itemLabel: (p) => p.fields.title.value || "Link" },
        ),
        email: text("Contact email", "Shown at the bottom of the menu."),
        footer: fields.object(
          {
            wordmark: text("Wordmark", "The large name at the top of the footer."),
            emailPlaceholder: text("Email box placeholder"),
            emailHint: text("Text under the email box"),
            links: fields.array(
              fields.object({ title: required("Label"), href: required("Link") }),
              { label: "Page links", itemLabel: (p) => p.fields.title.value || "Link" },
            ),
            address: longText("Address", "One line per row. " + lines),
            contacts: fields.array(
              fields.object({
                title: required("Text shown", "e.g. WhatsApp: +1 234 567 890"),
                href: required(
                  "Link",
                  "e.g. https://wa.me/1234567890, tel:+1234567890 or mailto:hello@example.com",
                ),
              }),
              { label: "Contact lines", itemLabel: (p) => p.fields.title.value || "Line" },
            ),
            legalLeft: text("Bottom line — left"),
            legalRight: text("Bottom line — right"),
          },
          { label: "Footer" },
        ),
        defaults: seo,
      },
    }),
  },
});
