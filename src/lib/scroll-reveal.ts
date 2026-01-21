export default function initScrollReveal(root = document) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // if you want one-time reveals, unobserve afterwards
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    }
  );

  const els = Array.from(root.querySelectorAll('.reveal')) as Element[];
  els.forEach((el) => observer.observe(el));

  return observer;
}
