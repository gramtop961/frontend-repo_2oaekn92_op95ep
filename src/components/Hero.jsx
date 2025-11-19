import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),rgba(14,165,233,0.15)_35%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center text-xs uppercase tracking-wider bg-white/10 border border-white/20 text-white rounded-full px-3 py-1 mb-4 backdrop-blur">
            <span className="mr-2">📈</span> MarketView AI
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            복잡한 글로벌 뉴스,
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-orange-300"> AI가 3줄로 요약</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-xl">
            미국 증시와 테크 뉴스를 자동 수집·번역·요약하여 핵심만 빠르게 파악하세요. 속도, 간결함, 통찰을 한 곳에.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#feed" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">
              최신 요약 보기
            </a>
            <a href="#how" className="px-5 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">
              어떻게 동작하나요?
            </a>
          </div>
        </div>
        <div className="h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero
