import {
  summary,
  sentiment,
  platforms,
  topIssues,
  topPros,
  recentReviews,
} from './mockData.js'

function SentimentStack() {
  const { good, moderate, bad } = sentiment
  return (
    <div className="sentiment-stack" role="img" aria-label={`Sentiment: ${good}% good, ${moderate}% moderate, ${bad}% bad`}>
      <div className="sentiment-stack__segment sentiment-stack__segment--good" style={{ flex: good }} title={`Good ${good}%`} />
      <div className="sentiment-stack__segment sentiment-stack__segment--moderate" style={{ flex: moderate }} title={`Moderate ${moderate}%`} />
      <div className="sentiment-stack__segment sentiment-stack__segment--bad" style={{ flex: bad }} title={`Bad ${bad}%`} />
    </div>
  )
}

function PlatformRow({ p }) {
  return (
    <div className="platform-row">
      <div className="platform-row__meta">
        <span className="platform-row__name">{p.name}</span>
        <span className="platform-row__count">{p.reviews.toLocaleString()} reviews</span>
      </div>
      <div className="platform-row__bar" aria-hidden>
        <span className="platform-row__chunk platform-row__chunk--good" style={{ width: `${p.good}%` }} />
        <span className="platform-row__chunk platform-row__chunk--moderate" style={{ width: `${p.moderate}%` }} />
        <span className="platform-row__chunk platform-row__chunk--bad" style={{ width: `${p.bad}%` }} />
      </div>
      <div className="platform-row__pct">
        <span className="text-good">{p.good}%</span>
        <span className="text-muted">/</span>
        <span className="text-warn">{p.moderate}%</span>
        <span className="text-muted">/</span>
        <span className="text-bad">{p.bad}%</span>
      </div>
    </div>
  )
}

function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= n ? 'stars__on' : 'stars__off'}>
          ★
        </span>
      ))}
    </span>
  )
}

function SentimentPill({ sentiment: s }) {
  const map = {
    good: 'Good',
    moderate: 'Moderate',
    bad: 'Bad',
  }
  return <span className={`pill pill--${s}`}>{map[s]}</span>
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__brand">
          <span className="logo" aria-hidden />
          <div>
            <h1 className="header__title">ReviewPulse</h1>
            <p className="header__subtitle">Unified review intelligence (demo)</p>
          </div>
        </div>
        <span className="header__badge">{summary.periodLabel}</span>
      </header>

      <section className="grid grid--kpis" aria-label="Key metrics">
        <article className="card kpi">
          <p className="kpi__label">Total reviews</p>
          <p className="kpi__value">{summary.totalReviews.toLocaleString()}</p>
        </article>
        <article className="card kpi">
          <p className="kpi__label">Average rating</p>
          <p className="kpi__value">
            {summary.avgRating}
            <span className="kpi__suffix">/5</span>
          </p>
        </article>
        <article className="card kpi">
          <p className="kpi__label">Positive sentiment</p>
          <p className="kpi__value text-good">{sentiment.good}%</p>
        </article>
        <article className="card kpi">
          <p className="kpi__label">Needs attention</p>
          <p className="kpi__value text-bad">{sentiment.bad}%</p>
        </article>
      </section>

      <section className="card card--sentiment" aria-labelledby="sentiment-heading">
        <div className="card__head">
          <h2 id="sentiment-heading">Overall sentiment split</h2>
          <p className="card__hint">Aggregated across all connected channels</p>
        </div>
        <SentimentStack />
        <ul className="legend">
          <li>
            <span className="legend__swatch legend__swatch--good" /> Good <strong>{sentiment.good}%</strong>
          </li>
          <li>
            <span className="legend__swatch legend__swatch--moderate" /> Moderate <strong>{sentiment.moderate}%</strong>
          </li>
          <li>
            <span className="legend__swatch legend__swatch--bad" /> Bad <strong>{sentiment.bad}%</strong>
          </li>
        </ul>
      </section>

      <div className="grid grid--two">
        <section className="card" aria-labelledby="issues-heading">
          <div className="card__head">
            <h2 id="issues-heading">Main issues</h2>
            <p className="card__hint">Themes customers complain about most</p>
          </div>
          <ol className="ranked-list">
            {topIssues.map((item, i) => (
              <li key={item.label} className="ranked-list__item ranked-list__item--issue">
                <span className="ranked-list__rank">{i + 1}</span>
                <div className="ranked-list__body">
                  <span className="ranked-list__label">{item.label}</span>
                  <span className="ranked-list__meta">
                    {item.mentions.toLocaleString()} mentions
                    <span className={`ranked-list__trend ranked-list__trend--${item.trend === 'flat' ? 'flat' : item.trend.startsWith('+') ? 'up' : 'down'}`}>
                      {item.trend}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="card" aria-labelledby="pros-heading">
          <div className="card__head">
            <h2 id="pros-heading">Product strengths</h2>
            <p className="card__hint">What buyers praise most often</p>
          </div>
          <ol className="ranked-list">
            {topPros.map((item, i) => (
              <li key={item.label} className="ranked-list__item ranked-list__item--pro">
                <span className="ranked-list__rank">{i + 1}</span>
                <div className="ranked-list__body">
                  <span className="ranked-list__label">{item.label}</span>
                  <span className="ranked-list__meta">
                    {item.mentions.toLocaleString()} mentions
                    <span className={`ranked-list__trend ranked-list__trend--${item.trend === 'flat' ? 'flat' : item.trend.startsWith('+') ? 'up' : 'down'}`}>
                      {item.trend}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="card" aria-labelledby="platforms-heading">
        <div className="card__head">
          <h2 id="platforms-heading">By platform</h2>
          <p className="card__hint">Good / moderate / bad share per source</p>
        </div>
        <div className="platform-list">
          {platforms.map((p) => (
            <PlatformRow key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="card" aria-labelledby="recent-heading">
        <div className="card__head">
          <h2 id="recent-heading">Recent reviews</h2>
          <p className="card__hint">Sample pulled from each platform</p>
        </div>
        <div className="table-wrap">
          <table className="reviews-table">
            <thead>
              <tr>
                <th scope="col">Platform</th>
                <th scope="col">Rating</th>
                <th scope="col">Snippet</th>
                <th scope="col">Sentiment</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentReviews.map((r) => (
                <tr key={r.id}>
                  <td>{r.platform}</td>
                  <td>
                    <Stars n={r.rating} />
                  </td>
                  <td className="reviews-table__snippet">{r.snippet}</td>
                  <td>
                    <SentimentPill sentiment={r.sentiment} />
                  </td>
                  <td className="reviews-table__date">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">
        <p>Demo dashboard — data is static for showcase only.</p>
      </footer>
    </div>
  )
}
