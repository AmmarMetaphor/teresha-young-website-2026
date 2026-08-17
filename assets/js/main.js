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

  markCurrentNavLink();
  initScrollState();
  initMobileNav();
  initNewsList();
  initResourcesList();

  function markCurrentNavLink() {
    if (!window.SITE_CONFIG || !Array.isArray(window.SITE_CONFIG.nav)) return;

    var currentFile = (window.location.pathname.split('/').pop() || 'index.html');
    var links = document.querySelectorAll('[data-site-nav] a[href]');

    links.forEach(function (link) {
      var linkFile = link.getAttribute('href').split('/').pop();
      if (linkFile === currentFile) {
        link.setAttribute('aria-current', 'page');
      }
    });
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

  function initNewsList() {
    var list = document.querySelector('[data-news-list]');
    if (!list) return;

    fetchJSON('data/news.json')
      .then(function (data) {
        renderList(list, data.items, function (item) {
          return (
            '<article class="card">' +
            '<p class="eyebrow">' + escapeHTML(item.outlet) + '</p>' +
            '<span class="placeholder__tag">' + escapeHTML(item.status) + '</span>' +
            '<p>Headline and link pending approval.</p>' +
            '</article>'
          );
        });
      })
      .catch(function () {
        renderError(list, 'Media mentions could not be loaded.');
      });
  }

  function initResourcesList() {
    var list = document.querySelector('[data-resources-list]');
    if (!list) return;

    fetchJSON('data/resources.json')
      .then(function (data) {
        renderList(list, data.items, function (item) {
          return (
            '<article class="card">' +
            '<span class="placeholder__tag">' + escapeHTML(item.status) + '</span>' +
            '<h3>Resource pending</h3>' +
            '<p>No approved resource exists yet — this card will describe it once confirmed.</p>' +
            '</article>'
          );
        });
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

  function renderList(listEl, items, itemTemplate) {
    if (!items || !items.length) {
      renderError(listEl, 'Nothing to show yet.');
      return;
    }

    listEl.innerHTML = items
      .map(function (item) {
        return '<li>' + itemTemplate(item) + '</li>';
      })
      .join('');
  }

  function renderError(listEl, message) {
    listEl.innerHTML =
      '<li class="placeholder"><span class="placeholder__tag">Placeholder</span><p>' +
      escapeHTML(message) +
      '</p></li>';
  }

  function escapeHTML(value) {
    var div = document.createElement('div');
    div.textContent = String(value == null ? '' : value);
    return div.innerHTML;
  }
})();
