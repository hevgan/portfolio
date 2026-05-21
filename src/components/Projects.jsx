import { Reveal, NumberTicker, SqlTyper } from './helpers';

export default function Projects({ motion }) {
  return (
    <section id="projects" className="section section--bordered">
      <div className="eyebrow-row">
        <span className="eyebrow">02 / Selected work</span>
        <span className="eyebrow-tag">// things that ran in production</span>
      </div>

      <div className="projects">
        <Reveal>
          <article className="project">
            <div className="project__viz">
              <div className="viz-pipeline">
                <div className="viz-node">vendor</div>
                <div className="viz-edge" />
                <div className="viz-node">parse</div>
                <div className="viz-edge" />
                <div className="viz-node">enrich</div>
                <div className="viz-edge" />
                <div className="viz-node viz-node--accent">sink</div>
              </div>
            </div>
            <div className="project__body">
              <div className="project__head">
                <h3 className="project__title">Step Function Merge</h3>
                <span className="project__year">2024 — now</span>
              </div>
              <p className="project__desc">
                Unifying two high-revenue enterprise data platforms under one
                modular architecture. Vendor-shaped Step Function components,
                single shared contract at the seams. Zero downtime tolerance.
              </p>
              <div className="project__metric">
                → <NumberTicker value={2} motion={motion} /> platforms unified
                · <NumberTicker value={40} suffix="+" motion={motion} /> reusable steps
              </div>
              <div className="project__tags">
                <span className="tag">AWS</span>
                <span className="tag">Step Functions</span>
                <span className="tag">.NET</span>
                <span className="tag">Python</span>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="project">
            <div className="project__viz project__viz--warm">
              <div className="viz-counter">
                <div className="viz-counter__num">
                  <NumberTicker value={85} suffix="%" motion={motion} />
                </div>
                <div className="viz-counter__label">runtime cut</div>
              </div>
            </div>
            <div className="project__body">
              <div className="project__head">
                <h3 className="project__title">Bladerunner</h3>
                <span className="project__year">2022 — 2023</span>
              </div>
              <p className="project__desc">
                Migrated 90+ production databases to the cloud with zero data
                loss. Rearchitected the entire trade-data flow underneath them.
                Cut end-to-end runtime by 85%. Shipped on schedule.
              </p>
              <div className="project__metric">
                → <NumberTicker value={90} suffix="+" motion={motion} /> DBs migrated
                · <NumberTicker value={85} suffix="%" motion={motion} /> faster
              </div>
              <div className="project__tags">
                <span className="tag">Snowflake</span>
                <span className="tag">AWS RDS</span>
                <span className="tag">SQL Server</span>
                <span className="tag">CI/CD</span>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.15}>
          <article className="project">
            <div className="project__viz">
              <SqlTyper
                motion={motion}
                lines={[
                  { text: 'WITH daily_runs AS (' },
                  { text: '  SELECT job, AVG(seconds) AS p50' },
                  { text: '  FROM runs WHERE day > NOW()' },
                  { text: '  GROUP BY job' },
                  { text: ') SELECT * FROM daily_runs;' },
                ]}
              />
            </div>
            <div className="project__body">
              <div className="project__head">
                <h3 className="project__title">Runtime Audit</h3>
                <span className="project__year">side · 2025</span>
              </div>
              <p className="project__desc">
                Built and deployed a DAG runtime monitor over a weekend. Watches
                p95 drift, alerts before incidents surface. Six SQL queries, one
                Slack webhook, one fewer weekly incident review.
              </p>
              <div className="project__metric">
                → <NumberTicker value={1} motion={motion} /> meeting saved · weekly
              </div>
              <div className="project__tags">
                <span className="tag">Python</span>
                <span className="tag">Snowflake</span>
                <span className="tag">Slack API</span>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="project">
            <div className="project__viz project__viz--warm">
              <div className="viz-bars">
                {[42, 68, 35, 80, 58, 90, 70, 95, 60, 85, 50, 72].map((h, i) => (
                  <div
                    key={i}
                    className="viz-bars__bar"
                    style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                  />
                ))}
              </div>
            </div>
            <div className="project__body">
              <div className="project__head">
                <h3 className="project__title">Perf-Framework</h3>
                <span className="project__year">2021 — 2022</span>
              </div>
              <p className="project__desc">
                Intel internship. Replaced a static slide deck with a live
                hardware performance dashboard. Automated the entire reporting
                workflow — data collection to visualization. The team switched
                to it immediately.
              </p>
              <div className="project__metric">
                → automated reporting for entire hardware validation team
              </div>
              <div className="project__tags">
                <span className="tag">Python</span>
                <span className="tag">Plotly Dash</span>
                <span className="tag">Automation</span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
