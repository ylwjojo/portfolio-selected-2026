(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.nav-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroImage = document.querySelector('.hero-visual img');

  const closeMenu = () => {
    header?.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', '打开导航');
  };
  menuButton?.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  });
  header?.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  let scrollTicking = false;
  const updateScroll = () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    document.documentElement.style.setProperty('--scroll-progress', `${Math.min(100, window.scrollY / maxScroll * 100)}%`);
    header?.classList.toggle('scrolled', window.scrollY > 25);
    if (heroImage && !reducedMotion) {
      heroImage.style.setProperty('--hero-shift', `${-Math.min(70, window.scrollY * .14)}px`);
    }
    scrollTicking = false;
  };
  updateScroll();
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateScroll);
  }, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });

  const focusSteps = [...document.querySelectorAll('[data-focus-step]')];
  const focusPanels = [...document.querySelectorAll('[data-focus-panel]')];
  if (focusSteps.length && focusPanels.length) {
    const activateFocusStep = (index, moveFocus = false) => {
      focusSteps.forEach((step, stepIndex) => {
        const active = stepIndex === index;
        step.classList.toggle('is-active', active);
        step.setAttribute('aria-pressed', String(active));
      });
      focusPanels.forEach((panel, panelIndex) => { panel.hidden = panelIndex !== index; });
      if (moveFocus) focusSteps[index].focus();
    };
    focusSteps.forEach((step, index) => {
      step.addEventListener('click', () => activateFocusStep(index));
      step.addEventListener('keydown', (event) => {
        const next = {
          ArrowRight: (index + 1) % focusSteps.length,
          ArrowLeft: (index - 1 + focusSteps.length) % focusSteps.length,
          Home: 0,
          End: focusSteps.length - 1
        }[event.key];
        if (next === undefined) return;
        event.preventDefault();
        activateFocusStep(next, true);
      });
    });
  }

  const revealItems = document.querySelectorAll('.intro-grid, .focus-flow, .section-heading, .approach-list > div, .about-grid, .reveal-scroll');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('in-view'));
    return;
  }
  revealItems.forEach((item) => item.classList.add('reveal-scroll'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -5% 0px', threshold: .08 });
  revealItems.forEach((item) => observer.observe(item));
})();
