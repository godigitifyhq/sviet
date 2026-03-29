"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const INITIAL_MESSAGE =
  "Hi! I'm Vivi, your AI admissions counsellor 👋 I can help you with programs, fees, eligibility, and more. What would you like to know?";

export function CounsellorChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showCounsellorBanner, setShowCounsellorBanner] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ai/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!isOpen || !scrollerRef.current) {
      return;
    }

    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [isOpen, isLoading, messages]);

  useEffect(() => {
    if (messages.length > 0) {
      setShowCounsellorBanner(true);
    }
  }, [messages.length]);

  const hasMessages = messages.length > 0;

  const canSubmit = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  function closeChat() {
    setIsOpen(false);
    setShowCounsellorBanner(true);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    const nextInput = input.trim();
    setInput("");
    void sendMessage({ text: nextInput });
  }

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open AI counsellor chat"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-rose-500 text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 sm:inset-auto sm:bottom-24 sm:right-4 sm:h-[500px] sm:w-[380px]">
          <div className="flex h-full flex-col border border-slate-200 bg-white shadow-2xl sm:rounded-2xl">
            <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900">Vivi</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-xs text-slate-500">AI Admissions Counsellor</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={closeChat}
                className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div ref={scrollerRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                  {INITIAL_MESSAGE}
                </div>
              </div>

              {messages.map((message) => {
                const isAssistant = message.role === "assistant";
                const text = message.parts
                  .filter((part) => part.type === "text")
                  .map((part) => part.text)
                  .join("\n")
                  .trim();

                if (!text) {
                  return null;
                }

                return (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${isAssistant ? "justify-start" : "justify-end"}`}
                  >
                    {isAssistant ? (
                      <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                        <Bot className="h-4 w-4" />
                      </div>
                    ) : null}

                    <div
                      className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                        isAssistant
                          ? "rounded-tl-sm bg-white text-slate-700"
                          : "rounded-tr-sm bg-blue-600 text-white"
                      }`}
                    >
                      {text}
                    </div>
                  </div>
                );
              })}

              {isLoading ? (
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="border-t border-slate-200 bg-white p-3">
              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about programs, fees, admissions..."
                  className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none ring-0 transition focus:border-slate-500"
                />
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {showCounsellorBanner || hasMessages ? (
                <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-orange-50 px-3 py-2 text-xs text-orange-900">
                  <span>Want to talk to a real counsellor?</span>
                  <Link href="/contact" className="rounded-md bg-orange-500 px-2.5 py-1 font-semibold text-white">
                    Connect Now
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
