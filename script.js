/* =====================================================
   SKYLAR'S HOPE FOR CHANGE — Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky Nav Shadow ──────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile Menu Toggle ─────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));

      const [top, mid, bot] = hamburger.querySelectorAll('span');
      if (isOpen) {
        top.style.transform = 'rotate(45deg) translate(5px, 5px)';
        mid.style.opacity   = '0';
        bot.style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        top.style.transform = '';
        mid.style.opacity   = '';
        bot.style.transform = '';
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.querySelectorAll('span').forEach(s => (s.style.cssText = ''));
      }
    });
  }

  // ── Intersection Observer: fade-up animations ──────
  const fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );
    fadeEls.forEach(el => io.observe(el));
  } else {
    // Fallback for unsupported browsers
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ── Donation Progress Bar ──────────────────────────
  const fill = document.querySelector('.progress-fill');
  if (fill) {
    const pct = parseFloat(fill.dataset.percent || '0');
    // Small delay so the animated fill is visible
    setTimeout(() => { fill.style.width = pct + '%'; }, 600);
  }

  // ── Contact Form (placeholder submit) ─────────────
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Message Sent! We\'ll be in touch.';
      btn.disabled = true;
      btn.style.background = '#2d6a4f';
      setTimeout(() => {
        contactForm.reset();
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
      }, 3500);
    });
  }

  // ── Volunteer / Get Involved Form ─────────────────
  const volunteerForm = document.querySelector('#volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = volunteerForm.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Thank You! We\'ll Be In Touch Soon.';
      btn.disabled = true;
      setTimeout(() => {
        volunteerForm.reset();
        btn.textContent = orig;
        btn.disabled = false;
      }, 4000);
    });
  }

  // ── Smooth Scroll for in-page anchors ─────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // account for sticky nav
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Active nav link highlight ──────────────────────
  // Mark the nav link that matches the current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
