import Link from "next/link";
import { ArrowRight, MessageCircleHeart, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "隐私保护",
    description: "所有对话内容均为私密信息，不会被他人查看。"
  },
  {
    icon: MessageCircleHeart,
    title: "情绪分析",
    description: "AI 通过语言理解分析您的情绪状态，提供温和回应。"
  },
  {
    icon: Sparkles,
    title: "情绪趋势",
    description: "可视化展示您的情绪变化趋势，帮助您理解自己。"
  }
];

export default function LandingPage() {
  return (
    <main className="landing-page soft-background">
      <section className="hero">
        <p className="eyebrow">AI EMOTIONAL SUPPORT AGENT</p>
        <h1>属于您的专属心理咨询师</h1>
        <p className="lead">
          在这里，您可以安全地表达情绪。没有人可以看到您的对话内容。系统将严格保护您的隐私，让您安心地表达最真实的自己。
        </p>

        <Link href="/chat" className="primary-cta">
          开始倾诉 <ArrowRight size={30} strokeWidth={2.25} />
        </Link>
      </section>

      <section className="feature-grid" aria-label="功能介绍">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="soft-card feature-card">
            <div className="feature-icon-wrap">
              <Icon size={26} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
