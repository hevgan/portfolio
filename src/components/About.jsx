import { Reveal } from './helpers';

const yearsExp = Math.floor((Date.now() - new Date('2021-07-01')) / (365.25 * 86400000));

export default function About() {
  return (
    <section id="about" className="section section--bordered">
      <div className="eyebrow-row">
        <span className="eyebrow">01 / About</span>
        <span className="eyebrow-tag">// the human</span>
      </div>

      <div className="about">
        <div>
          <Reveal>
            <h2 className="about__lead">
              I'm a data engineer based in Gdańsk. Currently shipping
              modular AWS pipelines at <em>S&amp;P Global</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="about__body">
            <p>
              I started writing SQL because the alternative was a spreadsheet
              with seventeen tabs and one increasingly fragile VLOOKUP. I kept
              doing it because there's a specific satisfaction to a job that
              runs at 3 AM and is still running correctly at 6 AM and nobody
              has to think about it.
            </p>
            <p>
              Day-to-day I'm in AWS Step Functions, Snowflake, .NET, and a fair
              amount of YAML I'd rather not be in. I like systems that are
              boring on purpose — observable, idempotent, and explained in a
              README somebody under stress can read.
            </p>
            <p>
              Off the clock I'm a fast learner, slow runner, and a strong
              believer that the best dashboard is the one nobody opens because
              nothing is on fire.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="facts">
            <div className="fact">
              <div className="fact__k">Now</div>
              <div className="fact__v">S&amp;P Global<small>Data Engineer · Contract</small></div>
            </div>
            <div className="fact">
              <div className="fact__k">Based</div>
              <div className="fact__v">Gdańsk, Poland<small>Hybrid / WFO friendly</small></div>
            </div>
            <div className="fact">
              <div className="fact__k">Years</div>
              <div className="fact__v">{yearsExp}+<small>since the Intel internship</small></div>
            </div>
            <div className="fact">
              <div className="fact__k">Stack</div>
              <div className="fact__v">AWS · Snowflake · Python · .NET<small>and the YAML that connects it</small></div>
            </div>
            <div className="fact">
              <div className="fact__k">Status</div>
              <div className="fact__v">Open to interesting<small>contract or full-time</small></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
