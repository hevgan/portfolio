import { Reveal } from './helpers';

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
              Data engineer who designs systems <em>built to last</em>.
              Currently leading pipeline architecture at <em>S&amp;P Global</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="about__body">
            <p>
              I've migrated 90+ production databases, cut job runtimes by 85%,
              and shipped a modular Step Functions framework that two enterprise
              data platforms now run on. The work is invisible when it's done
              right — and that's the point.
            </p>
            <p>
              Stack: AWS Step Functions, Snowflake, Python, .NET. I build
              systems that are observable, fault-tolerant, and documented well
              enough that on-call at 3 AM doesn't require a phone call. If
              something breaks, it logs why — and retries correctly.
            </p>
            <p>
              Available for contract or full-time. I ramp fast, write docs
              worth reading, and leave codebases better than I found them.
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
              <div className="fact__v">4+<small>pipelines · warehouses · migrations</small></div>
            </div>
            <div className="fact">
              <div className="fact__k">Stack</div>
              <div className="fact__v">AWS · Snowflake · Python · .NET<small>and the YAML that connects it</small></div>
            </div>
            <div className="fact">
              <div className="fact__k">Lang</div>
              <div className="fact__v">Polish · English<small>native · professional proficiency</small></div>
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
