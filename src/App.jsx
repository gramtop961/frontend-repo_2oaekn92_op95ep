import Hero from './components/Hero'
import NewsFeed from './components/NewsFeed'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.08),transparent_40%)] pointer-events-none" />
      <div className="relative">
        <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/20">📈</span>
            <div>
              <div className="font-semibold">MarketView AI</div>
              <div className="text-xs text-slate-300/70">Speed • Simplicity • Insight</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#feed" className="hover:text-white">피드</a>
            <a href="#how" className="hover:text-white">아키텍처</a>
            <a href="/test" className="hover:text-white">연결 테스트</a>
          </nav>
        </header>
        <Hero />
        <NewsFeed />
        <HowItWorks />
        <footer className="border-t border-white/10 py-8 mt-8">
          <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} MarketView AI</span>
            <span>MVP • LLM 기반 요약 서비스</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
