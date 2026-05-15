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
    motion === false ? lines.map((l) => l.length) : lines.map(() => 0)
  );
  const ref = useRef(null);
  const inView = useInView(ref, 0.3);

  useEffect(() => {
    if (motion === false) return;
    if (!inView) return;
    let li = 0, ci = 0, timer;
    const step = () => {
      if (li >= lines.length) return;
      ci++;
      setShown((prev) => {
        const next = [...prev];
        next[li] = ci;
        return next;
      });
      if (ci >= lines[li].text.length) {
        li++; ci = 0;
        timer = setTimeout(step, 220);
      } else {
        timer = setTimeout(step, 22 + Math.random() * 30);
      }
    };
    timer = setTimeout(step, 300);
    return () => clearTimeout(timer);
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
          {i === shown.findIndex((s, idx) => s < lines[idx].text.length) && motion !== false && (
            <span className="cursor" />
          )}
        </div>
      ))}
    </div>
  );
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
