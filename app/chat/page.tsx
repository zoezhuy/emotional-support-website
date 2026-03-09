"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  SendHorizonal,
  Shield,
  Sparkles,
  TrendingUp
} from "lucide-react";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
  time: string;
};

const emotionOptions = ["anxious", "sad", "overwhelmed", "lonely"];

const assistantPrompts = [
  "你愿意和我说说最近发生了什么事情吗？",
  "谢谢你愿意表达。现在最让你难受的感受是什么？",
  "我在这里陪你，我们可以慢慢来。"
];

function nowTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", text: assistantPrompts[0], time: "06:10 PM" }
  ]);
  const [input, setInput] = useState("");
  const [activeEmotion, setActiveEmotion] = useState("anxious");

  const nextReply = useMemo(
    () => assistantPrompts[Math.min(messages.length, assistantPrompts.length - 1)],
    [messages.length]
  );

  const send = () => {
    const value = input.trim();
    if (!value) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: value,
      time: nowTime()
    };

    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: "assistant",
      text: `${nextReply}（我识别到你现在可能偏${activeEmotion}）`,
      time: nowTime()
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <main className="chat-page soft-background">
      <header className="chat-header">
        <Link className="icon-circle" href="/" aria-label="返回首页">
          <ArrowLeft size={28} />
        </Link>

        <div className="header-content">
          <h1>属于您的专属心理咨询师</h1>
          <p>在这里，您可以安全地表达情绪。所有交流都是私密、安全、仅属于您的空间。</p>

          <div className="quick-links">
            <Link href="/analysis" className="pill-link">
              <Sparkles size={18} /> 情绪分析
            </Link>
            <Link href="/trends" className="pill-link">
              <TrendingUp size={18} /> 趋势回顾
            </Link>
            <button className="pill-link soft-danger" type="button" aria-label="风险提醒">
              <Shield size={18} />
            </button>
          </div>
        </div>
      </header>

      <section className="chat-messages" aria-label="聊天消息区">
        {messages.map((message) => (
          <article
            key={message.id}
            className={`message-row ${message.role === "assistant" ? "left" : "right"}`}
          >
            {message.role === "assistant" && (
              <span className="avatar-circle" aria-hidden="true">
                <Bot size={22} />
              </span>
            )}
            <div className="message-content">
              <div className={`bubble ${message.role}`}>{message.text}</div>
              <time>{message.time}</time>
            </div>
          </article>
        ))}
      </section>

      <section className="emotion-tags" aria-label="情绪标签">
        {emotionOptions.map((emotion) => (
          <button
            key={emotion}
            type="button"
            className={`tag ${activeEmotion === emotion ? "active" : ""}`}
            onClick={() => setActiveEmotion(emotion)}
          >
            {emotion}
          </button>
        ))}
      </section>

      <section className="chat-input-wrap">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              send();
            }
          }}
          placeholder="想和我聊聊什么？"
          aria-label="输入消息"
        />
        <button type="button" onClick={send} aria-label="发送消息">
          <SendHorizonal size={28} />
        </button>
      </section>
    </main>
  );
}
