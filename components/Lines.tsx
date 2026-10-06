import { Fragment } from "react";

// Editors press Enter in a text box to start a new line; this turns each
// newline into a <br />, matching the headline breaks in the original design.
export function Lines({ text }: { text?: string | null }) {
  if (!text) return null;
  const lines = text.split(/\r?\n/);
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

// One block-level <span> per line (used for the mantra).
export function BlockLines({ text }: { text?: string | null }) {
  if (!text) return null;
  return (
    <>
      {text
        .split(/\r?\n/)
        .filter((l) => l.trim() !== "")
        .map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
    </>
  );
}
