/**
 * Talk search and topic filters for the homepage, plus copy-to-clipboard
 * buttons on the bio page. Progressive enhancement: without JS the full
 * talk list shows and the filter bar stays hidden.
 */
(function () {
  'use strict';

  function initFilters() {
    var bar = document.querySelector('[data-talk-filters]');
    if (!bar) return;

    var items = Array.prototype.slice.call(document.querySelectorAll('.talk-list-item[data-search]'));
    var years = Array.prototype.slice.call(document.querySelectorAll('.talks-year'));
    var yearLinks = Array.prototype.slice.call(document.querySelectorAll('[data-year-link]'));
    var search = bar.querySelector('#talk-search');
    var topicChips = Array.prototype.slice.call(bar.querySelectorAll('[data-topic]'));
    var videoChip = bar.querySelector('[data-video-only]');
    var status = bar.querySelector('[data-talk-count]');
    var empty = document.querySelector('[data-talk-empty]');
    var reset = document.querySelector('[data-talk-reset]');

    var state = { query: '', topic: [], videoOnly: false };
    var total = items.length;

    function matches(item) {
      var text = item.getAttribute('data-search') || '';
      if (state.videoOnly && !item.hasAttribute('data-video')) return false;
      if (state.topic.length && !state.topic.some(function (k) { return text.indexOf(k) !== -1; })) return false;
      if (state.query) {
        return state.query.split(/\s+/).every(function (word) { return text.indexOf(word) !== -1; });
      }
      return true;
    }

    function apply() {
      var shown = 0;
      items.forEach(function (item) {
        var visible = matches(item);
        item.hidden = !visible;
        if (visible) shown++;
      });

      years.forEach(function (section) {
        var count = section.querySelectorAll('.talk-list-item:not([hidden])').length;
        section.hidden = count === 0;
        var link = document.querySelector('[data-year-link="' + section.id.replace('year-', '') + '"]');
        if (link) {
          link.hidden = count === 0;
          var badge = link.querySelector('.year-nav__count');
          if (badge) badge.textContent = count;
        }
      });

      var filtered = state.query || state.topic.length || state.videoOnly;
      status.textContent = filtered ? shown + ' of ' + total + ' talks' : total + ' talks';
      if (empty) empty.hidden = shown !== 0;
    }

    function selectTopic(chip) {
      topicChips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      var keywords = chip.getAttribute('data-topic');
      state.topic = keywords ? keywords.split('|') : [];
      apply();
    }

    var debounce;
    search.addEventListener('input', function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.query = search.value.trim().toLowerCase();
        apply();
      }, 120);
    });

    topicChips.forEach(function (chip) {
      chip.addEventListener('click', function () { selectTopic(chip); });
    });

    videoChip.addEventListener('click', function () {
      state.videoOnly = !state.videoOnly;
      videoChip.setAttribute('aria-pressed', state.videoOnly ? 'true' : 'false');
      apply();
    });

    if (reset) {
      reset.addEventListener('click', function () {
        search.value = '';
        state.query = '';
        state.videoOnly = false;
        videoChip.setAttribute('aria-pressed', 'false');
        selectTopic(topicChips[0]);
        search.focus();
      });
    }

    bar.hidden = false;
    apply();
  }

  function initCopyButtons() {
    var buttons = document.querySelectorAll('[data-copy-target]');
    Array.prototype.forEach.call(buttons, function (button) {
      if (!navigator.clipboard) { button.hidden = true; return; }
      var label = button.getAttribute('data-copy-label') || button.textContent;
      button.addEventListener('click', function () {
        var target = document.getElementById(button.getAttribute('data-copy-target'));
        if (!target) return;
        navigator.clipboard.writeText(target.innerText.trim()).then(function () {
          button.textContent = 'Copied';
          setTimeout(function () { button.textContent = label; }, 2000);
        }, function () {
          button.textContent = 'Copy failed — select the text instead';
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initFilters(); initCopyButtons(); });
  } else {
    initFilters();
    initCopyButtons();
  }
})();
