/**
 * Contact page behaviour for the Teresha Young 2026 prototype.
 * Vanilla JS, progressive enhancement only — the page remains fully usable
 * with this file absent: the pathway selector is built from real radio
 * inputs, the FAQ panels fall back to visible content, and the form still
 * carries native HTML validation attributes.
 *
 * NOTE: the enquiry form has no backend yet (action="#"). This script must
 * never report a successful submission — it validates, then explains the
 * prototype state honestly.
 */
(function () {
  'use strict';

  initPathways();
  initCharCount();
  initValidation();
  initFaq();

  /* ------------------------------------------------------------------ */
  /* Enquiry pathway selector                                            */
  /* ------------------------------------------------------------------ */

  function initPathways() {
    var radios = document.querySelectorAll('[data-pathway]');
    if (!radios.length) return;

    var field = document.querySelector('[data-conditional-field]');
    var label = document.querySelector('[data-conditional-label]');

    // Allow other CTAs to deep-link a pathway, e.g.
    // contact.html?enquiry=private-coaching
    var requested = new URLSearchParams(window.location.search).get('enquiry');
    if (requested) {
      radios.forEach(function (radio) {
        if (radio.value === requested) radio.checked = true;
      });
    }

    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        if (radio.checked) syncConditionalField(radio);
      });
    });

    syncConditionalField(document.querySelector('[data-pathway]:checked'));

    function syncConditionalField(active) {
      if (!field || !label || !active) return;

      // Private coaching is a personal enquiry — no organisation field.
      var wantsField = active.value !== 'private-coaching';
      field.hidden = !wantsField;
      if (wantsField) label.textContent = active.getAttribute('data-label');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Message character count                                             */
  /* ------------------------------------------------------------------ */

  function initCharCount() {
    var message = document.getElementById('contact-message');
    var count = document.querySelector('[data-char-count]');
    if (!message || !count) return;

    message.addEventListener('input', function () {
      count.textContent = String(message.value.length);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Accessible client-side validation                                   */
  /* ------------------------------------------------------------------ */

  function initValidation() {
    var form = document.querySelector('[data-enquiry-form]');
    if (!form) return;

    var notice = form.querySelector('[data-enquiry-notice]');
    var fields = [
      { id: 'contact-name', message: 'Please enter your name.' },
      { id: 'contact-email', message: 'Please enter an email address so we can reply.' },
      { id: 'contact-message', message: 'Please tell us a little about your enquiry.' }
    ];

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstInvalid = null;

      fields.forEach(function (entry) {
        var input = document.getElementById(entry.id);
        if (!input) return;

        var valid = input.checkValidity() && input.value.trim() !== '';
        var message = entry.message;

        // A filled-but-malformed email needs a more specific message than
        // the generic "please enter" case.
        if (input.type === 'email' && input.value.trim() !== '' && !input.checkValidity()) {
          message = 'Please check the email address and try again.';
        }

        setFieldError(input, valid ? '' : message);
        if (!valid && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        if (notice) notice.hidden = true;
        firstInvalid.focus();
        return;
      }

      // Valid input — but there is no live inbox behind this form yet, so
      // say so rather than implying the enquiry was delivered.
      if (notice) {
        notice.textContent =
          'Your details are complete. This prototype has no live inbox connected yet, so nothing has been sent.';
        notice.hidden = false;
      }
    });

    // Clear an error as soon as the visitor fixes the field.
    fields.forEach(function (entry) {
      var input = document.getElementById(entry.id);
      if (!input) return;

      input.addEventListener('input', function () {
        if (input.value.trim() !== '' && input.checkValidity()) setFieldError(input, '');
      });
    });

    function setFieldError(input, message) {
      var target = document.querySelector('[data-error-for="' + input.id + '"]');
      if (!target) return;

      target.textContent = message;
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      input.classList.toggle('is-invalid', Boolean(message));
    }
  }

  /* ------------------------------------------------------------------ */
  /* FAQ accordion                                                       */
  /* ------------------------------------------------------------------ */

  function initFaq() {
    var triggers = document.querySelectorAll('.faq__trigger');

    triggers.forEach(function (trigger) {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel) return;

      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        panel.hidden = isOpen;
      });
    });
  }
})();
