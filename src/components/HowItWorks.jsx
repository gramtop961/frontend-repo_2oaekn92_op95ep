function HowItWorks() {
  const steps = [
    { title: 'Collector', desc: 'Python 크롤러가 주요 외신을 주기적으로 수집', icon: '🕷️' },
    { title: 'Processor', desc: 'LLM이 한글 3줄 요약과 감정 태깅 수행', icon: '🧠' },
    { title: 'Database', desc: '가공된 결과를 MongoDB에 저장', icon: '🗄️' },
    { title: 'Client', desc: '웹에서 실시간으로 열람', icon: '🖥️' },
  ]
  return (
    <section id="how" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">아키텍처</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
              <p className="text-slate-300/90 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
