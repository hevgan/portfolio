import { Reveal } from './helpers';

const groups = [
  {
    head: 'Cloud / Orchestration',
    tone: 'default',
    items: [
      ['AWS', 'daily'],
      ['Step Functions', 'fluent'],
      ['Lambda', 'fluent'],
      ['S3 / Glue', 'comfortable'],
      ['Airflow', 'exposure'],
    ],
  },
  {
    head: 'Data / Warehouse',
    tone: 'warm',
    items: [
      ['Snowflake', 'fluent'],
      ['SQL Server', 'fluent'],
      ['PostgreSQL', 'comfortable'],
      ['dbt', 'comfortable'],
      ['Spark', 'exposure'],
    ],
  },
  {
    head: 'Languages / Glue',
    tone: 'default',
    items: [
      ['Python', 'fluent'],
      ['.NET / C#', 'fluent'],
      ['TypeScript', 'comfortable'],
      ['Bash', 'comfortable'],
      ['YAML', 'regrettably'],
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section section--bordered">
      <div className="eyebrow-row">
        <span className="eyebrow">03 / Stack</span>
        <span className="eyebrow-tag">// approximate, not exhaustive</span>
      </div>

      <div className="stack">
        {groups.map((g, gi) => (
          <Reveal key={g.head} delay={gi * 0.08}>
            <div className={`stack__group${g.tone === 'warm' ? ' stack__group--warm' : ''}`}>
              <div className="stack__head">{g.head}</div>
              {g.items.map(([name, conf]) => (
                <div key={name} className="stack__item">
                  <span>{name}</span>
                  <span className="conf">{conf}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
