(() => {
  'use strict';

  /* ============ LOADING SCREEN ============ */
  const loadingScreen = document.getElementById('loading-screen');
  const MIN_DISPLAY_MS = 1500;
  const startTime = Date.now();

  function hideLoadingScreen() {
    const elapsed = Date.now() - startTime;
    const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
    setTimeout(() => loadingScreen.classList.add('loaded'), wait);
  }

  if (document.readyState === 'complete') {
    hideLoadingScreen();
  } else {
    window.addEventListener('load', hideLoadingScreen);
  }

  /* ============ HEADER SCROLL STATE ============ */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ============ MOBILE NAV TOGGLE ============ */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.innerHTML = isOpen
      ? '<svg width="24" height="24"><use href="#icon-close"/></svg>'
      : '<svg width="24" height="24"><use href="#icon-menu"/></svg>';
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = '<svg width="24" height="24"><use href="#icon-menu"/></svg>';
    });
  });

  /* ============ SCROLL REVEAL ANIMATIONS ============ */
  const revealEls = document.querySelectorAll('.reveal');
  revealEls.forEach((el) => {
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) el.style.setProperty('--d', delay);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ============ HERO TYPEWRITER ============ */
  const typewriterEl = document.getElementById('typewriter');
  const words = [
    'colchones.',
    'sofás y salas.',
    'asientos de auto.',
    'sillas de oficina.',
    'sillas de comedor.',
  ];

  if (typewriterEl) {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const TYPE_SPEED = 65;
    const DELETE_SPEED = 32;
    const HOLD_TIME = 1500;

    function tick() {
      const currentWord = words[wordIndex];

      if (!deleting) {
        charIndex++;
        typewriterEl.textContent = currentWord.slice(0, charIndex);
        if (charIndex === currentWord.length) {
          deleting = true;
          setTimeout(tick, HOLD_TIME);
          return;
        }
        setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex--;
        typewriterEl.textContent = currentWord.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(tick, 260);
          return;
        }
        setTimeout(tick, DELETE_SPEED);
      }
    }

    setTimeout(tick, 500);
  }

  /* ============ BEFORE / AFTER SLIDERS ============ */
  document.querySelectorAll('[data-ba-slider]').forEach((slider) => {
    const frame = slider.querySelector('.ba-slider-frame');
    const range = slider.querySelector('.ba-range');
    if (!frame || !range) return;

    const setPos = (value) => {
      frame.style.setProperty('--pos', `${value}%`);
    };

    setPos(range.value);
    range.addEventListener('input', () => setPos(range.value));

    // subtle auto-hint sweep the first time it scrolls into view
    const hintObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slider.classList.add('ba-hint');
          setTimeout(() => slider.classList.remove('ba-hint'), 1400);
          hintObserver.unobserve(slider);
        }
      });
    }, { threshold: 0.6 });
    hintObserver.observe(slider);
  });

  /* ============ FOOTER YEAR ============ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============ HERO BLUE PARTICLES ============ */
  const canvas = document.getElementById('particles-canvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    const heroSection = canvas.closest('.hero');
    let particles = [];
    let width, height, rafId;

    const PARTICLE_COLORS = ['rgba(47,144,152,', 'rgba(15,63,99,', 'rgba(79,179,172,'];

    function makeParticle() {
      const radius = Math.random() * 2.4 + 1;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.35 - 0.08,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        alpha: Math.random() * 0.35 + 0.15,
        pulse: Math.random() * Math.PI * 2,
      };
    }

    function resize() {
      width = canvas.width = heroSection.offsetWidth;
      height = canvas.height = heroSection.offsetHeight;
      const count = Math.min(70, Math.round((width * height) / 18000));
      particles = Array.from({ length: count }, makeParticle);
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const r = p.baseRadius + Math.sin(p.pulse) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(r, 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(step);
    }

    resize();
    step();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(step);
      }
    });
  }

})();
