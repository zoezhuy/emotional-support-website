import Link from "next/link";
import { Bot, MessageCircle, Sparkles } from "lucide-react";

const data = [
  { label: "焦虑", value: 82 },
  { label: "压力", value: 65 },
  { label: "疲惫", value: 48 }
];

export default function AnalysisPage() {
  return (
    <main className="info-page soft-background">
      <section className="info-head">
        <h1>情绪状态分析</h1>
        <p>系统正在帮助您理解当前的情绪状态。</p>
      </section>

      <section className="soft-card analysis-wrap">
        <h2>
          <Sparkles size={18} /> 当前情绪识别
        </h2>

        <article className="soft-panel center-panel">
          <p>系统识别到您当前的主要情绪为</p>
          <strong>焦虑</strong>
          <div className="score-row">
            <span>情绪识别可信度</span>
            <span>82%</span>
          </div>
          <div className="progress-track">
            <span style={{ width: "82%" }} />
          </div>
        </article>

        <div className="mini-grid">
          {data.map((item) => (
            <article key={item.label} className="mini-card">
              <div className="mini-header">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="progress-track small">
                <span style={{ width: `${item.value}%` }} />
              </div>
            </article>
          ))}
        </div>

        <article className="soft-panel ai-note">
          <h3>
            <Bot size={20} /> 来自 AI 咨询师的回复
          </h3>
          <p>“你现在的情绪看起来有些焦虑和压力。这是很多人在面对生活压力时会经历的状态。我们可以一起慢慢聊聊最近发生了什么。”</p>
          <Link href="/chat" className="button-inline">
            <MessageCircle size={18} /> 继续对话
          </Link>
        </article>
      </section>
    </main>
  );
}
