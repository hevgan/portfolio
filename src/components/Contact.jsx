import { Reveal } from './helpers';

const links = [
  {
    k: 'LinkedIn',
    v: 'linkedin.com/in/maciej-adryan',
    href: 'https://www.linkedin.com/in/maciej-adryan/',
  },
  { k: 'Email', v: 'hello@maciej.dev', href: 'mailto:hello@maciej.dev' },
  { k: 'GitHub', v: 'github.com/maciej-adryan', href: '#' },
  { k: 'Résumé', v: 'PDF · one page · honest', href: '#' },
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
              <a key={l.k} className="contact__link" href={l.href} target="_blank" rel="noopener noreferrer">
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
