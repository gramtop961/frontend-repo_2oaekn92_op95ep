import { useEffect, useState } from 'react'

const sentimentMap = {
  bullish: { label: '호재', color: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30' },
  bearish: { label: '악재', color: 'text-rose-400', badge: 'bg-rose-500/15 text-rose-300 border-rose-400/30' },
  neutral: { label: '중립', color: 'text-sky-300', badge: 'bg-sky-500/15 text-sky-300 border-sky-400/30' },
}

function NewsFeed() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/news?limit=20`)
        if (!res.ok) throw new Error(`API ${res.status}`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="feed" className="relative py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">실시간 요약 피드</h2>
          <a href="/test" className="text-sm text-slate-300 hover:text-white underline/30">연결 테스트</a>
        </div>

        {loading && <p className="text-slate-300">불러오는 중...</p>}
        {error && <p className="text-rose-300">오류: {error}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => {
            const s = sentimentMap[it.sentiment] || sentimentMap.neutral
            return (
              <article key={it.id} className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${s.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {s.label}
                  </span>
                  <span className="text-xs text-slate-300/70">{it.source}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{it.title_ko}</h3>
                <p className="text-sm text-slate-300/90 line-clamp-3 leading-relaxed">{it.summary_ko}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {it.tags?.slice(0,3).map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10">#{t}</span>
                  ))}
                  {it.ticker && <span className="text-[11px] px-2 py-1 rounded bg-indigo-500/15 text-indigo-200 border border-indigo-400/20">{it.ticker}</span>}
                </div>
              </article>
            )
          })}
        </div>

        {!loading && items.length === 0 && !error && (
          <div className="text-slate-300">아직 저장된 요약이 없습니다. /test 페이지에서 백엔드를 확인하세요.</div>
        )}
      </div>
    </section>
  )
}

export default NewsFeed
