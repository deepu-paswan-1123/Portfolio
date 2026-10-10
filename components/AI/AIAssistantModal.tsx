"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { queryDeepuAI, AIResponse } from "@/lib/aiKnowledgeEngine";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  quickSuggestions?: string[];
}

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

const INITIAL_SUGGESTIONS = [
  "⚡ What is Deepu's tech stack?",
  "🤖 Tell me about the Urbanchat AI project",
  "💼 What is his work experience?",
  "🏥 Explain the Flex ERM project",
  "🎓 What is his education & GPA?",
  "📬 How do I contact or hire Deepu?",
];

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  initialQuery = "",
}) => {
  const { playClick, playHover, playLaser, playSuccess } = useAudio();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "⚡ **NEURAL AI ASSISTANT ONLINE**\n\nGreetings! I am Deepu Paswan's interactive AI assistant. You can ask me anything about Deepu's **.NET Core & MERN stack experience**, **AI projects**, **education**, **technical skills**, or **contact info**.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      quickSuggestions: INITIAL_SUGGESTIONS,
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 200);
      if (initialQuery) {
        handleSendMessage(initialQuery);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isTyping) return;

    playClick();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    // Simulate Neural Inference Processing
    setTimeout(() => {
      const response: AIResponse = queryDeepuAI(query);
      playLaser();

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickSuggestions: response.quickSuggestions,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleClearChat = () => {
    playClick();
    setMessages([
      {
        id: Date.now().toString(),
        sender: "ai",
        text: "⚡ **SESSION RESET**\n\nNeural memory cleared. What would you like to know about Deepu Paswan?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickSuggestions: INITIAL_SUGGESTIONS,
      },
    ]);
  };

  // Basic markdown-like parser for bold, links, code, and lists
  const formatMessageText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Parse markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary-light font-bold"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const formattedLine = parts.map((part, pIdx) => {
        if (typeof part !== "string") return part;
        // Parse bold **text** and code `code`
        const boldParts = part.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
        return boldParts.map((sub, sIdx) => {
          if (sub.startsWith("**") && sub.endsWith("**")) {
            return (
              <strong key={sIdx} className="text-hud-text font-bold text-primary">
                {sub.slice(2, -2)}
              </strong>
            );
          }
          if (sub.startsWith("`") && sub.endsWith("`")) {
            return (
              <code
                key={sIdx}
                className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-xs text-primary border border-primary/30"
              >
                {sub.slice(1, -1)}
              </code>
            );
          }
          return sub;
        });
      });

      return (
        <p key={lineIdx} className={line.startsWith("•") || line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") ? "ml-2 my-1" : "my-1.5"}>
          {formattedLine.length > 0 ? formattedLine : <br />}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/85 backdrop-blur-xl"
          />

          {/* Holographic AI Terminal Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative flex flex-col w-full max-w-2xl h-[640px] max-h-[90vh] cut-corner-14 border border-primary/50 bg-bg-secondary/95 shadow-[0_0_50px_var(--glow)] z-10 overflow-hidden"
          >
            {/* Top HUD Telemetry Bar */}
            <div className="flex items-center justify-between border-b border-primary/25 bg-bg/80 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-8 w-8 items-center justify-center cut-corner-button border border-primary/60 bg-primary/10">
                  <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                  <span className="absolute font-mono text-[10px] font-bold text-primary">
                    AI
                  </span>
                </div>
                <div>
                  <div className="font-display text-sm font-bold tracking-wider text-hud-text flex items-center gap-2">
                    DEEPU AI // NEURAL TERMINAL
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[9px] text-primary border border-primary/40">
                      v2.8 ACTIVE
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-hud-muted tracking-wider">
                    RESUME KNOWLEDGE BASE // .NET & MERN ARCHITECTURE
                  </div>
                </div>
              </div>

              {/* Action Buttons: Clear + Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearChat}
                  onMouseEnter={playHover}
                  title="Reset conversation memory"
                  className="cut-corner-button border border-primary/30 bg-bg px-2.5 py-1 font-mono text-[10px] text-hud-muted transition-all hover:border-primary hover:text-primary"
                >
                  CLEAR
                </button>
                <button
                  onClick={onClose}
                  onMouseEnter={playHover}
                  aria-label="Close AI Assistant"
                  className="flex h-8 w-8 items-center justify-center cut-corner-button border border-primary/40 bg-bg text-hud-muted transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Middle Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 scanlines">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "cut-corner-button border border-primary/60 bg-primary/20 text-hud-text shadow-[0_0_15px_var(--glow)] font-mono text-xs"
                        : "cut-corner-10 border border-primary/30 bg-bg-secondary/90 text-hud-muted shadow-md font-body"
                    }`}
                  >
                    {/* Message Header */}
                    <div className="flex items-center justify-between gap-4 mb-2 pb-1.5 border-b border-primary/15 font-mono text-[10px] text-primary/70">
                      <span>{msg.sender === "user" ? "TRANSMISSION // OPERATOR" : "DEEPU AI // RESPONSE"}</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    {/* Message Content */}
                    <div className="text-hud-text">{formatMessageText(msg.text)}</div>

                    {/* Quick Suggestion Chips attached to AI messages */}
                    {msg.quickSuggestions && msg.quickSuggestions.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-primary/20 flex flex-wrap gap-2">
                        {msg.quickSuggestions.map((suggestion, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSendMessage(suggestion)}
                            onMouseEnter={playHover}
                            className="cut-corner-button border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary transition-all duration-200 hover:bg-primary hover:text-bg hover:shadow-[0_0_12px_var(--glow)] hover:scale-102"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start">
                  <div className="cut-corner-10 border border-primary/40 bg-bg-secondary/90 p-4 shadow-md font-mono text-xs text-primary flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                    <span>NEURAL INFERENCE COMPUTING...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Query Input Box */}
            <div className="border-t border-primary/25 bg-bg/90 p-3 sm:p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder="Ask about Deepu's experience, .NET Core, React, AI projects..."
                    className="w-full cut-corner-button border border-primary/40 bg-bg-secondary/90 px-4 py-3 font-mono text-xs text-hud-text placeholder:text-hud-muted/50 focus:border-primary focus:shadow-[0_0_15px_var(--glow)] focus:outline-none"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-primary/50 hidden sm:inline">
                    PRESS ENTER ↵
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isTyping}
                  onMouseEnter={playHover}
                  className="cut-corner-button bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-bg transition-all duration-300 hover:bg-primary-light hover:shadow-[0_0_20px_var(--glow)] disabled:opacity-40 disabled:pointer-events-none"
                >
                  TRANSMIT
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
