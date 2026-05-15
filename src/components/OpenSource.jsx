import { Reveal } from './helpers';

const repos = [
  {
    name: 'snowflake-cost-watch',
    desc: 'A tiny CLI that yells when a warehouse spends more than it should. Built because the bill was bigger than the dashboard.',
    lang: 'Python',
    meta: '★ 142 · forks 18',
  },
  {
    name: 'stepfn-snippets',
    desc: 'Reusable AWS Step Functions building blocks. Retry policies that actually retry the right things.',
    lang: 'TypeScript',
    meta: '★ 64 · forks 9',
  },
  {
    name: 'dbt-tiny-tests',
    desc: 'Five dbt macros for the five tests you forgot to write. Idempotency, freshness, row-count delta.',
    lang: 'Jinja / SQL',
    meta: '★ 89 · forks 12',
  },
  {
    name: 'sql-format-pre',
    desc: "Pre-commit hook for SQL that doesn't fight you about your CASE statements.",
    lang: 'Python',
    meta: '★ 37 · forks 4',
  },
  {
    name: 'pipeline-pageboy',
    desc: 'Lightweight Slack notifier for failed Airflow runs. One env var, one webhook, zero opinions.',
    lang: 'Python',
    meta: '★ 71 · forks 6',
  },
  {
    name: 'schema-diff',
    desc: 'Compare two warehouse schemas and tell you what\'s different in plain English. Side project. Probably stays that way.',
    lang: 'Go',
    meta: '★ 23 · forks 2',
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="section section--bordered">
      <div className="eyebrow-row">
        <span className="eyebrow">05 / Open source</span>
        <span className="eyebrow-tag">// placeholder repos — wire to real GitHub when ready</span>
      </div>

      <div className="os">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 0.06}>
            <a className="repo" href="#" onClick={(e) => e.preventDefault()}>
              <div className="repo__name">{r.name}</div>
              <div className="repo__desc">{r.desc}</div>
              <div className="repo__foot">
                <span className="repo__lang">{r.lang}</span>
                <span>{r.meta}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
