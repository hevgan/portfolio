import { Reveal } from './helpers';

const links = [
  {
    k: 'LinkedIn',
    v: 'linkedin.com/in/maciej-adryan',
    href: 'https://www.linkedin.com/in/maciej-adryan/',
  },
  { k: 'Email', v: 'software@adryanmaciej.com', href: 'mailto:software@adryanmaciej.com' },
  { k: 'GitHub', v: 'github.com/hevgan', href: 'https://github.com/hevgan' },
  { k: 'Résumé', v: 'PDF · one page · honest', href: 'https://github.com/hevgan/portfolio/releases/download/v1.0/Maciej_Adryan_CV.pdf' },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--bordered">
      <div className="eyebrow-row">
        <span className="eyebrow">06 / Contact</span>
        <span className="eyebrow-tag">// short messages preferred</span>
      </div>

      <div className="contact">
        <Reveal>
          <div>
            <h2 className="contact__lead">
              Have a pipeline that needs <em>fewer</em> surprises?
            </h2>
            <p className="contact__sub">
              I'm open to contract or full-time work, especially anything that
              touches AWS, Snowflake, or that suspicious-looking SQL nobody on
              the team wants to maintain. I reply within a day. Usually before
              coffee, sometimes after.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact__links">
            {links.map((l) => (
              <a key={l.k} className="contact__link" href={l.href} target="_blank" rel="noopener noreferrer" {...(l.download ? { download: true } : {})}>
                <div>
                  <div className="k">{l.k}</div>
                  {l.v}
                </div>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
