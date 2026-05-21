import { Reveal, LiveClock, LiveTenure } from './helpers';
import PipelineMonitor from './PipelineMonitor';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__meta">
        <span className="hero__status">Open to work</span>
        <span className="hero__status hero__status--ghost">Contract</span>
        <span>POLAND · GDAŃSK</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <LiveClock />
        <span style={{ opacity: 0.5 }}>·</span>
        <LiveTenure from="2024-10-01" label="S&amp;P Global" />
      </div>

      <div>
        <div className="hero__role">Data Engineer · v4.0</div>
        <h1 className="hero__title">
          <div className="hero__title-line">
            <div className="hero__title-clip">
              <span>Maciej{" "}<span className="hero__title-aka">(Mac)</span></span>
            </div>
            <sup className="hero__title-mark">*</sup>
          </div>
          <div className="hero__title-line">
            <div className="hero__title-clip">
              <span>Adryan.</span>
            </div>
            <sup className="hero__title-mark">‡</sup>
          </div>
        </h1>
        <div className="hero__name-notes">
          <span><sup>*</sup> "Mac" for short.</span>
          <span><sup>‡</sup> "Adryan", with a "y".</span>
        </div>
      </div>

      <Reveal delay={0.3}>
        <p className="hero__bio">
          I move data from <em>where it is</em> to <em>where it needs to be</em>.
          Mostly without anyone noticing. Four years of pipelines, warehouses,
          and explaining what an idempotent retry is.
        </p>
      </Reveal>

      <Reveal delay={0.5} className="hero__bottom">
        <a href="#about" className="hero__scroll">
          <span>Scroll</span>
          <span className="hero__scroll-arrow">↓</span>
        </a>

        <PipelineMonitor />
      </Reveal>
    </section>
  );
}
