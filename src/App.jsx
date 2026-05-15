import { useEffect } from 'react';
import { useScrolled, useReveal } from './components/helpers';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle } from './components/TweaksPanel';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';

const TWEAK_DEFAULTS = {
  theme: 'light',
  density: 'comfy',
  motion: true,
  accent: '#b5674a',
};

function Nav() {
  const scrolled = useScrolled(60);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="nav__brand">
        <span className="nav__dot" />
        <span>Maciej Adryan</span>
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#about"><span className="nav__num">01</span>About</a>
        <a className="nav__link" href="#projects"><span className="nav__num">02</span>Work</a>
        <a className="nav__link" href="#stack"><span className="nav__num">03</span>Stack</a>
        <a className="nav__link" href="#experience"><span className="nav__num">04</span>CV</a>
        <a className="nav__link" href="#contact"><span className="nav__num">06</span>Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} · Maciej Adryan</span>
      <span>Built with too much SQL.</span>
    </footer>
  );
}

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', t.theme);
    html.setAttribute('data-density', t.density);
    html.setAttribute('data-motion', t.motion ? 'on' : 'off');
    html.style.setProperty('--terra', t.accent);
  }, [t.theme, t.density, t.motion, t.accent]);

  useReveal();

  return (
    <div className="app">
      <div className="bp-grid" aria-hidden="true" />
      <Nav />
      <Hero />
      <About />
      <Projects motion={t.motion} />
      <TechStack />
      <Experience />
      {/* <OpenSource /> */}{/* 05 hidden — uncomment to restore */}
      <Contact />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Theme" value={t.theme}
          options={['light', 'dark']}
          onChange={(v) => setTweak('theme', v)} />
        <TweakColor label="Accent" value={t.accent}
          options={['#b5674a', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
          onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)} />

        <TweakSection label="Motion" />
        <TweakToggle label="Animations" value={t.motion}
          onChange={(v) => setTweak('motion', v)} />
      </TweaksPanel>
    </div>
  );
}
