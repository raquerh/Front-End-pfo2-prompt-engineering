/**
 * FORGED — Taller de Motocicletas
 * Main JavaScript
 */

(function () {
  'use strict';

  // ========================================
  // HEADER — Scroll behavior
  // ========================================
  const header = document.getElementById('header');
  let lastScrollY = 0;
  let ticking = false;

  function handleHeaderScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(handleHeaderScroll);
      ticking = true;
    }
  }, { passive: true });

  // ========================================
  // MOBILE NAV TOGGLE
  // ========================================
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  let navOpen = false;

  function toggleNav() {
    navOpen = !navOpen;
    navLinks.classList.toggle('nav__links--open', navOpen);
    navToggle.classList.toggle('nav__toggle--open', navOpen);
    navToggle.setAttribute('aria-expanded', navOpen.toString());
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }

  navToggle.addEventListener('click', toggleNav);

  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navOpen) toggleNav();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navOpen) toggleNav();
  });

  // ========================================
  // INTERSECTION OBSERVER — Reveal animations
  // ========================================
  const revealElements = document.querySelectorAll(
    '[data-reveal], [data-service], [data-work], [data-step], [data-testimonial], .about__content, .about__visual, .contact__info, .contact__form-wrapper'
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  } else {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(function () {
            entry.target.classList.add('revealed');
          }, parseInt(delay));
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el, index) {
      const parent = el.closest('.services__grid, .work__gallery, .process__steps, .testimonials__grid');
      if (parent) {
        const siblings = Array.from(parent.children).filter(function (child) {
          return child.hasAttribute('data-service') ||
                 child.hasAttribute('data-work') ||
                 child.hasAttribute('data-step') ||
                 child.hasAttribute('data-testimonial');
        });
        const siblingIndex = siblings.indexOf(el);
        el.dataset.delay = siblingIndex * 100;
      }
      revealObserver.observe(el);
    });
  }

  // ========================================
  // ANIMATED COUNTERS
  // ========================================
  const counters = document.querySelectorAll('[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  // ========================================
  // FORM VALIDATION
  // ========================================
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  const validators = {
    name: {
      validate: function (val) { return val.trim().length >= 2; },
      message: 'Ingresá tu nombre (mínimo 2 caracteres).'
    },
    email: {
      validate: function (val) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val); },
      message: 'Ingresá un email válido.'
    },
    service: {
      validate: function (val) { return val !== ''; },
      message: 'Seleccioná un servicio.'
    },
    message: {
      validate: function (val) { return val.trim().length >= 10; },
      message: 'Contanos más (mínimo 10 caracteres).'
    }
  };

  function validateField(name) {
    const input = form.querySelector('[name="' + name + '"]');
    const errorEl = input.closest('.form__group').querySelector('.form__error');
    const validator = validators[name];

    if (!validator) return true;

    const isValid = validator.validate(input.value);

    if (isValid) {
      input.classList.remove('form__input--error');
      errorEl.textContent = '';
    } else {
      input.classList.add('form__input--error');
      errorEl.textContent = validator.message;
    }

    return isValid;
  }

  Object.keys(validators).forEach(function (name) {
    var input = form.querySelector('[name="' + name + '"]');
    if (input) {
      input.addEventListener('blur', function () {
        validateField(name);
      });
      input.addEventListener('input', function () {
        if (input.classList.contains('form__input--error')) {
          validateField(name);
        }
      });
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var allValid = true;
    Object.keys(validators).forEach(function (name) {
      if (!validateField(name)) {
        allValid = false;
      }
    });

    if (!allValid) {
      var firstError = form.querySelector('.form__input--error');
      if (firstError) firstError.focus();
      return;
    }

    var submitBtn = form.querySelector('[type="submit"]');
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;

    setTimeout(function () {
      submitBtn.classList.remove('btn--loading');
      submitBtn.disabled = false;
      form.reset();
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      setTimeout(function () {
        formSuccess.hidden = true;
      }, 5000);
    }, 1500);
  });

  // ========================================
  // SMOOTH SCROLL for anchor links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = document.getElementById('header').offsetHeight;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ========================================
  // ACTIVE NAV LINK on scroll
  // ========================================
  var sections = document.querySelectorAll('section[id]');
  var navLinksAll = document.querySelectorAll('.nav__link');

  function updateActiveLink() {
    var scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(function (link) {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateActiveLink);
  }, { passive: true });

})();
