(function () {
  'use strict';

  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navLinks = nav.querySelectorAll('.nav__link');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  /* ---- Header scroll state ---- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  function toggleMenu(forceClose) {
    const isOpen = forceClose === true ? false : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', isOpen);
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => toggleMenu());

  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggleMenu(true);
      menuToggle.focus();
    }
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = nav.querySelector(`.nav__link[href="#${id}"]`);

      if (link && scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ---- Contact form validation ---- */
  const validators = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Introduce tu nombre (mínimo 2 caracteres).'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Introduce un email válido.'),
    service: (v) => (v ? '' : 'Selecciona un tipo de servicio.'),
    message: (v) => (v.trim().length >= 10 ? '' : 'Cuéntanos más sobre tu proyecto (mínimo 10 caracteres).'),
  };

  function validateField(field) {
    const rule = validators[field.name];
    if (!rule) return true;

    const errorEl = document.getElementById(`${field.name}Error`);
    const message = rule(field.value);

    field.classList.toggle('is-invalid', !!message);
    if (errorEl) errorEl.textContent = message;

    return !message;
  }

  contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('is-invalid')) validateField(field);
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = contactForm.querySelectorAll('input, select, textarea');
    let isValid = true;

    fields.forEach((field) => {
      if (field.required || validators[field.name]) {
        if (!validateField(field)) isValid = false;
      }
    });

    if (!isValid) {
      const firstInvalid = contactForm.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    formSuccess.hidden = false;
    contactForm.reset();
    contactForm.querySelector('button[type="submit"]').disabled = true;

    setTimeout(() => {
      formSuccess.hidden = true;
      contactForm.querySelector('button[type="submit"]').disabled = false;
    }, 5000);
  });
})();
