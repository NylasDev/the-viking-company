"use client";

import { useEffect, useRef, useState } from "react";
import { social } from "@/lib/data";

// Heimdall — the watchman of The Viking Company. Floating chat bubble in the
// Hermes mythic style. Talks to the Heimdall RAG service when configured via
// NEXT_PUBLIC_HEIMDALL_URL; degrades gracefully to a "being forged" state.

const ENDPOINT = process.env.NEXT_PUBLIC_HEIMDALL_URL ?? "";

type Msg = { who: "heimdall" | "you"; text: string };

const GREETING: Msg = {
  who: "heimdall",
  text:
    "I am Heimdall, watchman of The Viking Company. Ask me about Sergiu's work, his stack, or how he can help — I see far, and I'll sound the horn if you'd like to reach him.",
};

export default function HeimdallChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [msgs, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const history = msgs;
    setMsgs((m) => [...m, { who: "you", text }]);
    setInput("");
    setBusy(true);

    // No backend wired yet → graceful offline reply.
    if (!ENDPOINT) {
      setTimeout(() => {
        setMsgs((m) => [
          ...m,
          {
            who: "heimdall",
            text: `My hall is still being forged — I can't answer fully yet. In the meantime, reach Sergiu directly at ${social.email}.`,
          },
        ]);
        setBusy(false);
      }, 500);
      return;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: history.map((m) => ({ role: m.who === "you" ? "user" : "assistant", content: m.text })),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const ct = res.headers.get("content-type") ?? "";
      const reply = ct.includes("application/json")
        ? (await res.json()).reply ?? "…"
        : await res.text();
      setMsgs((m) => [...m, { who: "heimdall", text: reply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          who: "heimdall",
          text: `The bridge is quiet — I couldn't reach my hall just now. You can reach Sergiu at ${social.email}.`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {open && (
        <section className="heimdall-panel" role="dialog" aria-label="Chat with Heimdall">
          <header className="heimdall-head">
            <span className="heimdall-eyebrow">
              <span className="heimdall-dot" aria-hidden="true" /> Heimdall · The Watchman
            </span>
            <button
              className="heimdall-x"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </header>

          <div className="heimdall-log" ref={logRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`heimdall-msg ${m.who}`}>
                <span className="heimdall-who">{m.who === "you" ? "You" : "Heimdall"}</span>
                <p>{m.text}</p>
              </div>
            ))}
            {busy && (
              <div className="heimdall-msg heimdall">
                <span className="heimdall-who">Heimdall</span>
                <p className="heimdall-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              </div>
            )}
          </div>

          <form
            className="heimdall-form"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the watchman…"
              aria-label="Your message"
              maxLength={500}
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send">
              Send
            </button>
          </form>
        </section>
      )}

      <button
        className={`heimdall-launcher${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Heimdall chat" : "Ask Heimdall"}
        aria-expanded={open}
      >
        <span className="heimdall-mark" aria-hidden="true">
          ᚺ
        </span>
        <span className="heimdall-launcher-label">{open ? "Close" : "Ask Heimdall"}</span>
      </button>
    </>
  );
}
