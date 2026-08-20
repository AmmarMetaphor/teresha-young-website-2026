/**
 * Global progressive-enhancement behaviour for the Teresha Young 2026 prototype.
 * Vanilla JS only. Every page must remain usable with this file absent —
 * navigation links, layout, and content are all present in the static HTML.
 */
(function () {
  'use strict';

  var header = document.querySelector('[data-site-header]');
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-site-nav]');

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  markCurrentNavLink();
  initScrollState();
  initMobileNav();
  initNavDropdowns();
  initResourcesList();
  initResourceForm();
  initRibbons();
  initRails();
  initDisclosures();
  initResourceGate();

  function markCurrentNavLink() {
    if (!window.SITE_CONFIG || !Array.isArray(window.SITE_CONFIG.nav)) return;

    var currentFile = (window.location.pathname.split('/').pop() || 'index.html');
    var links = document.querySelectorAll('[data-site-nav] a[href]');

    links.forEach(function (link) {
      var linkFile = link.getAttribute('href').split('/').pop();
      if (linkFile === currentFile) {
        link.setAttribute('aria-current', 'page');

        // A current page inside a dropdown also lights up its collapsed
        // parent, so the trigger still shows where the visitor is.
        var parent = link.closest('[data-nav-parent]');
        var trigger = parent && parent.querySelector('[data-nav-trigger]');
        if (trigger) trigger.classList.add('is-active');
      }
    });
  }

  /**
   * "Work With Me" and "Media & Speaking" dropdowns.
   *
   * The trigger is a real <button aria-expanded>, so click, Enter and Space
   * all open the menu; ArrowDown moves into it, Escape closes and returns
   * focus, and Tab out of the menu closes it. Hover is layered on top on
   * pointer-capable wide screens only — it is never the only way in.
   */
  function initNavDropdowns() {
    var parents = Array.prototype.slice.call(document.querySelectorAll('[data-nav-parent]'));
    if (!parents.length) return;

    var wide = window.matchMedia('(min-width: 1180px)');

    parents.forEach(function (parent) {
      var trigger = parent.querySelector('[data-nav-trigger]');
      var menu = parent.querySelector('[data-nav-menu]');
      if (!trigger || !menu) return;

      var items = Array.prototype.slice.call(menu.querySelectorAll('a[href]'));
      var hoverTimer = null;

      /* Whether the menu is being held open by an explicit action (click,
         Enter, Space, ArrowDown) rather than by hover. Without this, moving
         the pointer onto the trigger opens the menu on hover and the click
         that follows immediately toggles it shut again. */
      var pinned = false;

      trigger.addEventListener('click', function () {
        if (pinned && isOpen(parent)) {
          pinned = false;
          setOpen(parent, false);
        } else {
          pinned = true;
          setOpen(parent, true);
        }
      });

      trigger.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          pinned = true;
          setOpen(parent, true);
          if (items[0]) items[0].focus();
        }
      });

      menu.addEventListener('keydown', function (event) {
        var index = items.indexOf(document.activeElement);

        if (event.key === 'ArrowDown') {
          event.preventDefault();
          if (items[index + 1]) items[index + 1].focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          if (index > 0) items[index - 1].focus();
          else trigger.focus();
        }
      });

      // Pointer convenience on wide screens. Closing is delayed slightly so
      // the diagonal travel from trigger to menu does not drop the menu.
      parent.addEventListener('mouseenter', function () {
        if (!wide.matches) return;
        window.clearTimeout(hoverTimer);
        // Only ever one menu open at a time, including a pinned one.
        parents.forEach(function (other) {
          if (other !== parent) closeParent(other);
        });
        setOpen(parent, true);
      });

      parent.addEventListener('mouseleave', function () {
        if (!wide.matches) return;
        // A menu the visitor deliberately opened stays open until they click
        // away or press Escape; only hover-opened menus close on mouseleave.
        if (pinned) return;
        hoverTimer = window.setTimeout(function () {
          setOpen(parent, false);
        }, 160);
      });

      // Tabbing or clicking clean out of the parent closes it.
      parent.addEventListener('focusout', function (event) {
        if (parent.contains(event.relatedTarget)) return;
        pinned = false;
        setOpen(parent, false);
      });

      parent.addEventListener('nav:close', function () {
        pinned = false;
        setOpen(parent, false);
      });
    });

    document.addEventListener('click', function (event) {
      parents.forEach(function (parent) {
        if (parent.contains(event.target)) return;
        closeParent(parent);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;

      parents.forEach(function (parent) {
        if (!isOpen(parent)) return;
        closeParent(parent);
        var trigger = parent.querySelector('[data-nav-trigger]');
        if (trigger) trigger.focus();
      });
    });

    /* Closing from outside the per-parent closure needs to clear that
       parent's pinned flag too, which only its own listener can see. */
    function closeParent(parent) {
      parent.dispatchEvent(new CustomEvent('nav:close'));
    }

    function isOpen(parent) {
      return parent.classList.contains('is-open');
    }

    function setOpen(parent, open) {
      parent.classList.toggle('is-open', open);
      var trigger = parent.querySelector('[data-nav-trigger]');
      if (trigger) trigger.setAttribute('aria-expanded', String(open));
    }
  }

  function initScrollState() {
    if (!header) return;

    var toggleScrolled = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };

    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  function initMobileNav() {
    if (!navToggle || !nav) return;

    var firstLink = nav.querySelector('a');

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!isOpen);
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        setNavOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setNavOpen(false);
        navToggle.focus();
      }
    });

    function setNavOpen(open) {
      navToggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);

      if (open && firstLink) {
        firstLink.focus();
      }
    }
  }

  /**
   * Only items with real (non-"TODO") content are ever rendered — no
   * visible TODO/status badge or "pending" language reaches a visitor.
   * See docs/voice-guide.md.
   */
  function isApproved(value) {
    return typeof value === 'string' && value.trim() !== '' && value.trim().toUpperCase() !== 'TODO';
  }

  function initResourcesList() {
    var list = document.querySelector('[data-resources-list]');
    if (!list) return;

    fetchJSON('data/resources.json')
      .then(function (data) {
        var approved = (data.items || []).filter(function (item) {
          return isApproved(item.title);
        });
        renderList(list, approved, function (item) {
          return (
            '<article class="card">' +
            '<h3>' + escapeHTML(item.title) + '</h3>' +
            '<p>' + escapeHTML(item.description) + '</p>' +
            '</article>'
          );
        }, 'New resources will appear here.');
      })
      .catch(function () {
        renderError(list, 'Resources could not be loaded.');
      });
  }

  function fetchJSON(url) {
    return fetch(url).then(function (response) {
      if (!response.ok) throw new Error('Request failed: ' + url);
      return response.json();
    });
  }

  function renderList(listEl, items, itemTemplate, emptyMessage) {
    if (!items || !items.length) {
      renderError(listEl, emptyMessage || 'Nothing to show yet.');
      return;
    }

    listEl.innerHTML = items
      .map(function (item) {
        return '<li>' + itemTemplate(item) + '</li>';
      })
      .join('');
  }

  function renderError(listEl, message) {
    listEl.innerHTML = '<li><p>' + escapeHTML(message) + '</p></li>';
  }

  function escapeHTML(value) {
    var div = document.createElement('div');
    div.textContent = String(value == null ? '' : value);
    return div.innerHTML;
  }

  /**
   * The homepage resource form has no live email-platform connection yet
   * (see docs/open-decisions.md). This only prevents a real navigation
   * away from the page and is honest with the reviewer about that status
   * instead of pretending the sign-up succeeded against a real service.
   */
  function initResourceForm() {
    var form = document.querySelector('[data-resource-form]');
    if (!form) return;

    var success = form.querySelector('[data-resource-form-success]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (success) {
        success.classList.add('is-visible');
      }
      form.reset();
    });
  }

  /**
   * Moving ribbons — the media-logo ribbon (homepage, Organisations, Media
   * & Speaking) and the awards ribbon (homepage).
   *
   * The movement itself is a single CSS transform animation per ribbon, not
   * a JS animation loop: this only wires up the explicit pause control and
   * keeps its label in sync. Hover and keyboard focus already pause the
   * ribbon in CSS, but neither is reachable by a touch-only visitor, so the
   * button is what actually satisfies "pausable moving content".
   *
   * Under prefers-reduced-motion the CSS never starts the animation and the
   * ribbon renders as a static wrapped row, so the control is removed
   * rather than left sitting there doing nothing.
   */
  function initRibbons() {
    var ribbons = document.querySelectorAll('[data-ribbon]');
    if (!ribbons.length) return;

    Array.prototype.forEach.call(ribbons, function (ribbon) {
      var toggle = ribbon.querySelector('[data-ribbon-toggle]');
      if (!toggle) return;

      if (reducedMotion.matches) {
        toggle.hidden = true;
        return;
      }

      toggle.addEventListener('click', function () {
        var paused = ribbon.classList.toggle('is-paused');
        toggle.setAttribute('aria-pressed', String(paused));
        toggle.querySelector('[data-ribbon-toggle-label]').textContent = paused
          ? 'Resume movement'
          : 'Pause movement';
      });
    });
  }

  /**
   * Horizontal content rails — the Media & Speaking visual rail and the
   * Organisations proof carousel.
   *
   * A native overflow-x scroller does the real work, so touch swipe,
   * trackpad and keyboard scrolling all come for free and the content is
   * fully readable with this file absent. This adds the arrow controls,
   * disables them at each end, and (only where a rail opts in via
   * data-rail-autoplay) advances it slowly. Auto-advance is skipped
   * entirely under reduced motion and stops for good on first interaction.
   */
  function initRails() {
    var rails = document.querySelectorAll('[data-rail]');
    if (!rails.length) return;

    Array.prototype.forEach.call(rails, function (rail) {
      var track = rail.querySelector('[data-rail-track]');
      var prev = rail.querySelector('[data-rail-prev]');
      var next = rail.querySelector('[data-rail-next]');
      if (!track) return;

      var timer = null;
      var interacted = false;

      updateControls();
      track.addEventListener('scroll', updateControls, { passive: true });
      window.addEventListener('resize', updateControls);

      if (prev) prev.addEventListener('click', function () { step(-1); });
      if (next) next.addEventListener('click', function () { step(1); });

      if (rail.hasAttribute('data-rail-autoplay') && !reducedMotion.matches) {
        startAuto();
        ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (type) {
          rail.addEventListener(type, stopAuto, { passive: true, once: true });
        });
        rail.addEventListener('mouseenter', pauseAuto);
        rail.addEventListener('mouseleave', resumeAuto);
        rail.addEventListener('focusin', pauseAuto);
        rail.addEventListener('focusout', resumeAuto);
      }

      /* One card plus its gap, so an arrow press lands cleanly on a card
         edge rather than mid-card at any viewport width. */
      function stepSize() {
        var card = track.querySelector('[data-rail-item]');
        if (!card) return Math.round(track.clientWidth * 0.8);
        var styles = window.getComputedStyle(track);
        var gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
        return Math.round(card.getBoundingClientRect().width + gap);
      }

      function step(direction) {
        interacted = true;
        track.scrollBy({
          left: stepSize() * direction,
          behavior: reducedMotion.matches ? 'auto' : 'smooth',
        });
      }

      function maxScroll() {
        return Math.max(0, track.scrollWidth - track.clientWidth);
      }

      function updateControls() {
        var max = maxScroll();
        var left = track.scrollLeft;
        /* 2px tolerance: sub-pixel layout means scrollLeft rarely lands on
           an exact integer bound. */
        if (prev) prev.disabled = left <= 2;
        if (next) next.disabled = left >= max - 2;
        rail.classList.toggle('is-scrollable', max > 2);
      }

      function startAuto() {
        window.clearInterval(timer);
        timer = window.setInterval(function () {
          if (interacted) return;
          if (track.scrollLeft >= maxScroll() - 2) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            track.scrollBy({ left: stepSize(), behavior: 'smooth' });
          }
        }, 6000);
      }

      function pauseAuto() { window.clearInterval(timer); }

      function resumeAuto() {
        if (!interacted) startAuto();
      }

      function stopAuto() {
        interacted = true;
        window.clearInterval(timer);
      }
    });
  }

  /**
   * Accessible disclosure — the About page's "Read the full story" control.
   * The panel is present in the static HTML and only hidden by this script,
   * so the full story is still readable with JS unavailable.
   */
  function initDisclosures() {
    var triggers = document.querySelectorAll('[data-disclosure-trigger]');
    if (!triggers.length) return;

    Array.prototype.forEach.call(triggers, function (trigger) {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel) return;

      var labelEl = trigger.querySelector('[data-disclosure-label]');
      var openLabel = trigger.getAttribute('data-label-open') || 'Read the full story';
      var closeLabel = trigger.getAttribute('data-label-close') || 'Close the full story';

      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');

      trigger.addEventListener('click', function () {
        var open = trigger.getAttribute('aria-expanded') !== 'true';
        trigger.setAttribute('aria-expanded', String(open));
        panel.hidden = !open;
        if (labelEl) labelEl.textContent = open ? closeLabel : openLabel;

        /* Moving focus into the newly revealed region means a screen-reader
           or keyboard visitor continues reading from the story, not from
           the button they just left behind. */
        if (open) {
          panel.setAttribute('tabindex', '-1');
          panel.focus({ preventScroll: true });
        } else {
          trigger.scrollIntoView({
            block: 'center',
            behavior: reducedMotion.matches ? 'auto' : 'smooth',
          });
        }
      });
    });
  }

  /**
   * PROTOTYPE resource gate — the eBook modal and the inline article forms
   * on the Resources page.
   *
   * There is deliberately no delivery mechanism behind either one. Nothing
   * entered is sent, stored, persisted, or written to localStorage; the
   * submitted values are simply discarded and a visual acknowledgement is
   * shown. Wiring a real email platform in is still outstanding work — see
   * docs/open-decisions.md.
   */
  function initResourceGate() {
    var modal = document.querySelector('[data-gate-modal]');

    initInlineGates();
    if (modal) initModalGate(modal);

    function initInlineGates() {
      var forms = document.querySelectorAll('[data-gate-inline-form]');
      Array.prototype.forEach.call(forms, function (form) {
        wireForm(form);
      });

      var toggles = document.querySelectorAll('[data-gate-inline-toggle]');
      Array.prototype.forEach.call(toggles, function (toggle) {
        var panel = document.getElementById(toggle.getAttribute('aria-controls'));
        if (!panel) return;

        panel.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');

        toggle.addEventListener('click', function () {
          var open = toggle.getAttribute('aria-expanded') !== 'true';
          toggle.setAttribute('aria-expanded', String(open));
          panel.hidden = !open;

          if (open) {
            var field = panel.querySelector('input');
            if (field) field.focus();
          }
        });
      });
    }

    function initModalGate(modalEl) {
      var titleSlot = modalEl.querySelector('[data-gate-title]');
      var form = modalEl.querySelector('form');
      var lastTrigger = null;

      wireForm(form);

      document.querySelectorAll('[data-gate-open]').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          lastTrigger = trigger;
          if (titleSlot) {
            titleSlot.textContent = trigger.getAttribute('data-gate-open') || 'this resource';
          }
          open();
        });
      });

      modalEl.querySelectorAll('[data-gate-close]').forEach(function (button) {
        button.addEventListener('click', close);
      });

      modalEl.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          event.preventDefault();
          close();
          return;
        }
        if (event.key === 'Tab') trapFocus(event);
      });

      function open() {
        modalEl.hidden = false;
        document.body.classList.add('gate-open');
        resetForm(form);

        var first = focusables()[0];
        if (first) first.focus();
      }

      function close() {
        modalEl.hidden = true;
        document.body.classList.remove('gate-open');
        if (lastTrigger) lastTrigger.focus();
      }

      function focusables() {
        return Array.prototype.filter.call(
          modalEl.querySelectorAll('button, [href], input, select, textarea'),
          function (el) {
            return !el.disabled && el.offsetParent !== null;
          }
        );
      }

      function trapFocus(event) {
        var items = focusables();
        if (!items.length) return;

        var first = items[0];
        var last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    function resetForm(form) {
      if (!form) return;
      form.reset();
      form.classList.remove('is-sent');
      var fields = form.querySelectorAll('[data-gate-field]');
      Array.prototype.forEach.call(fields, function (field) {
        clearFieldError(form, field);
      });
    }

    function wireForm(form) {
      if (!form) return;

      form.addEventListener('submit', function (event) {
        event.preventDefault();

        var fields = Array.prototype.slice.call(form.querySelectorAll('[data-gate-field]'));
        var firstInvalid = null;

        fields.forEach(function (field) {
          var message = validate(field);
          if (message) {
            setFieldError(form, field, message);
            if (!firstInvalid) firstInvalid = field;
          } else {
            clearFieldError(form, field);
          }
        });

        if (firstInvalid) {
          firstInvalid.focus();
          return;
        }

        /* Prototype only: the entered values are never read, sent or
           stored — the form is simply reset and an acknowledgement shown. */
        form.reset();
        form.classList.add('is-sent');

        var confirmation = form.querySelector('[data-gate-confirmation]');
        if (confirmation) {
          confirmation.setAttribute('tabindex', '-1');
          confirmation.focus({ preventScroll: true });
        }
      });

      form.querySelectorAll('[data-gate-field]').forEach(function (field) {
        field.addEventListener('input', function () {
          if (field.getAttribute('aria-invalid') === 'true') {
            clearFieldError(form, field);
          }
        });
      });
    }

    function validate(field) {
      var value = field.value.trim();
      if (!value) {
        return field.type === 'email'
          ? 'Please enter your email address.'
          : 'Please enter your name.';
      }
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        return 'Please enter a valid email address.';
      }
      return '';
    }

    function setFieldError(form, field, message) {
      field.setAttribute('aria-invalid', 'true');
      var error = form.querySelector('#' + field.getAttribute('aria-describedby'));
      if (error) error.textContent = message;
    }

    function clearFieldError(form, field) {
      field.removeAttribute('aria-invalid');
      var error = form.querySelector('#' + field.getAttribute('aria-describedby'));
      if (error) error.textContent = '';
    }
  }
})();
