"use client";

import { useState } from "react";
import { DiscordIcon } from "./Icons";

// A Discord username isn't a linkable URL (that needs a numeric user id), so
// instead of a broken link we copy the handle to the clipboard on click.
export default function DiscordTag({
  handle,
  size = 15,
}: {
  handle: string;
  size?: number;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(handle);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  return (
    <button
      type="button"
      className="discord-tag"
      onClick={copy}
      title="Copy Discord handle"
      aria-label={`Copy Discord handle ${handle}`}
    >
      <DiscordIcon size={size} /> {copied ? "Copied ✓" : handle}
    </button>
  );
}
