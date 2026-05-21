import { useEffect, useRef, useState } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function useInView(ref, threshold = 0.4) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return inView;
}

export function NumberTicker({ value, suffix = '', duration = 1400, motion }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [n, setN] = useState(motion === false ? value : 0);

  useEffect(() => {
    if (motion === false) { setN(value); return; }
    if (!inView) return;
    let start;
    let raf;
    const animate = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, motion]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function SqlTyper({ lines, motion }) {
  const [shown, setShown] = useState(
    motion === false ? lines.map((l) => l.text.length) : lines.map(() => 0)
  );
  const [cursorLine, setCursorLine] = useState(-1);
  const ref = useRef(null);
  const inView = useInView(ref, 0.3);

  useEffect(() => {
    if (motion === false) return;
    if (!inView) return;
    let li = 0, ci = 0, timer;
    const step = () => {
      if (li >= lines.length) { setCursorLine(-1); return; }
      ci++;
      setShown((prev) => {
        const next = [...prev];
        next[li] = ci;
        return next;
      });
      if (ci >= lines[li].text.length) {
        setCursorLine(-1); // hide cursor during inter-line pause
        li++; ci = 0;
        timer = setTimeout(step, 220);
      } else {
        setCursorLine(li);
        timer = setTimeout(step, 22 + Math.random() * 30);
      }
    };
    setCursorLine(-1);
    timer = setTimeout(step, 300);
    return () => { clearTimeout(timer); setCursorLine(-1); };
  }, [inView, motion]);

  return (
    <div className="viz-sql" ref={ref}>
      {lines.map((l, i) => (
        <div key={i}>
          {l.text.slice(0, shown[i]).split(/(\bSELECT\b|\bFROM\b|\bWHERE\b|\bGROUP\b|\bBY\b|\bJOIN\b|\bON\b|\bAS\b|\bWITH\b|\bORDER\b|\bDESC\b|\bLIMIT\b)/g).map((part, j) => (
            /^(SELECT|FROM|WHERE|GROUP|BY|JOIN|ON|AS|WITH|ORDER|DESC|LIMIT)$/.test(part)
              ? <span key={j} className="k">{part}</span>
              : <span key={j}>{part}</span>
          ))}
          {i === cursorLine && motion !== false && (
            <span className="cursor" />
          )}
        </div>
      ))}
    </div>
  );
}

export function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      // UTC+1: add local offset + 60 min
      const utc1 = new Date(d.getTime() + (d.getTimezoneOffset() + 60) * 60000);
      setTime(utc1.toTimeString().slice(0, 8) + ' UTC+1');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

export function LiveTenure({ from, label }) {
  const [val, setVal] = useState('');
  useEffect(() => {
    const tick = () => {
      const ms = Date.now() - new Date(from).getTime();
      const days = Math.floor(ms / 86400000);
      const mo = Math.floor(days / 30.44);
      const d = Math.floor(days % 30.44);
      setVal(`${label} · ${mo}mo ${d}d`);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [from, label]);
  return <span>{val}</span>;
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}
