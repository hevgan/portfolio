import { Reveal } from './helpers';

const rows = [
  {
    when: 'Oct 2025 → now',
    dur: '8 mos',
    role: 'Data Engineer',
    company: 'S&P Global',
    meta: 'Contract · Gdańsk · Remote',
    desc:
      'Back on the Step Functions, this time as a contractor. Cleaning up edges ' +
      'from the merge, pushing reusable components into shared territory.',
    tags: ['AWS', 'Step Functions', 'Snowflake', '.NET'],
  },
  {
    when: 'Jan 2024 → Sep 2025',
    dur: '1 yr 9 mos',
    role: 'Data Engineer',
    company: 'S&P Global',
    meta: 'Full-time · Gdańsk · Hybrid',
    desc:
      'Built modular AWS Step Functions workflows to merge two high-revenue data ' +
      'platforms into one scalable pipeline. Reusable components for accurate ' +
      'vendor-specific processing — fewer special cases, fewer 3 AM tickets.',
    tags: ['.NET', 'AWS', 'Step Functions', 'Snowflake', '+23 more'],
  },
  {
    when: 'Mar 2022 → Dec 2023',
    dur: '1 yr 10 mos',
    role: 'Junior Software Engineer',
    company: 'S&P Global',
    meta: 'Full-time · Gdańsk · Hybrid',
    desc:
      'Led the Bladerunner project: migrated 90+ databases to the cloud and cut ' +
      'pipeline runtimes by 85%+. Delivered scalable POCs and rearchitected ' +
      'high-volume trade data flows for reliability and efficiency.',
    tags: ['Snowflake', 'AWS RDS', 'SQL Server'],
  },
  {
    when: 'Aug 2021 → Mar 2022',
    dur: '8 mos',
    role: 'Software Development Intern',
    company: 'Intel Corporation',
    meta: 'Internship · Gdańsk · Remote',
    desc:
      'Automated a hardware performance framework using Plotly Dash, boosting ' +
      'testing efficiency across the team. The internship that taught me ' +
      'dashboards are software, not slideware.',
    tags: ['Python', 'Process Automation', 'Dash'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section--bordered">
      <div className="eyebrow-row">
        <span className="eyebrow">04 / Experience</span>
        <span className="eyebrow-tag">// reverse-chronological</span>
      </div>

      <div className="timeline">
        {rows.map((r, i) => (
          <Reveal key={i} delay={i * 0.05} className="tl-row">
            <div className="tl-when">{r.when}<small>{r.dur}</small></div>
            <div className="tl-node" aria-hidden="true" />
            <div className="tl-body">
              <div className="tl-head">
                <h3 className="tl-role">{r.role}</h3>
                <span className="tl-company">@ {r.company}</span>
                <span className="tl-meta">{r.meta}</span>
              </div>
              <p className="tl-desc">{r.desc}</p>
              <div className="tl-tags">
                {r.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
