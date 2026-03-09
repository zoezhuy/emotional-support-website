import Link from "next/link";
import { Bot, CalendarDays, MessageCircle, Sparkles } from "lucide-react";

export default function TrendsPage() {
  return (
    <main className="info-page soft-background">
      <section className="info-head">
        <h1>情绪变化趋势</h1>
        <p>通过回顾您的情绪记录，帮助您更好地理解自己。</p>
      </section>

      <section className="soft-card trends-wrap">
        <h2>
          <CalendarDays size={18} /> 最近 7 天情绪变化
        </h2>
        <article className="chart-box">
          <div className="chart-line" />
          <div className="chart-fill" />
          <div className="chart-days">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="soft-card insight-wrap">
        <h2>
          <Bot size={18} /> AI 情绪观察
        </h2>
        <p>
          “在过去一周中，您的压力水平在周三和周四较高，而周末情绪明显有所缓解。建议您在压力较大的时间段安排更多休息和自我放松时间。”
        </p>
        <div className="actions-row">
          <Link href="/chat" className="button-inline">
            <MessageCircle size={18} /> 继续和 AI 咨询师对话
          </Link>
          <Link href="/analysis" className="button-ghost">
            <Sparkles size={18} /> 即时分析
          </Link>
        </div>
      </section>
    </main>
  );
}
