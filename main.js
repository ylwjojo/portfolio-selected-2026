(() => {
  const header = document.querySelector('.site-header');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 48);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const focusSteps = [...document.querySelectorAll('[data-focus-step]')];
  const focusPanels = [...document.querySelectorAll('[data-focus-panel]')];
  if (focusSteps.length && focusPanels.length) {
    const activateFocusStep = (index, moveFocus = false) => {
      focusSteps.forEach((step, stepIndex) => {
        const active = stepIndex === index;
        step.classList.toggle('is-active', active);
        step.setAttribute('aria-pressed', String(active));
      });
      focusPanels.forEach((panel, panelIndex) => {
        panel.hidden = panelIndex !== index;
      });
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

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal-scroll');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  items.forEach((item) => observer.observe(item));
})();
