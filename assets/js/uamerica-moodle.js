(function () {
  "use strict";

  var activeModal = null;
  var lastFocusedElement = null;

  function toArray(list) {
    return Array.prototype.slice.call(list || []);
  }

  function ensureId(element, prefix) {
    if (!element.id) {
      element.id = prefix + "-" + Math.random().toString(36).slice(2, 9);
    }
    return element.id;
  }

  function parseNumber(value, fallback) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function initAccordions(root) {
    toArray(root.querySelectorAll("[data-ua-accordion]")).forEach(function (accordion) {
      var triggers = toArray(accordion.querySelectorAll(".ua-accordion__trigger"));

      triggers.forEach(function (trigger, index) {
        var panel = trigger.nextElementSibling;
        if (!panel || !panel.classList.contains("ua-accordion__panel")) {
          return;
        }

        var initialized = trigger.dataset.uaReady === "true";
        var triggerId = ensureId(trigger, "ua-accordion-trigger");
        var panelId = ensureId(panel, "ua-accordion-panel");
        var expanded = trigger.getAttribute("aria-expanded") === "true" || (!initialized && index === 0);

        trigger.setAttribute("type", "button");
        trigger.setAttribute("aria-controls", panelId);
        trigger.setAttribute("aria-expanded", String(expanded));
        panel.setAttribute("role", "region");
        panel.setAttribute("aria-labelledby", triggerId);
        panel.hidden = !expanded;

        if (initialized) {
          return;
        }

        trigger.dataset.uaReady = "true";
        trigger.addEventListener("click", function () {
          var isOpen = trigger.getAttribute("aria-expanded") === "true";
          var single = accordion.getAttribute("data-ua-accordion") !== "multiple";

          if (single) {
            triggers.forEach(function (otherTrigger) {
              var otherPanel = otherTrigger.nextElementSibling;
              otherTrigger.setAttribute("aria-expanded", "false");
              if (otherPanel) {
                otherPanel.hidden = true;
              }
            });
          }

          trigger.setAttribute("aria-expanded", String(!isOpen));
          panel.hidden = isOpen;
        });
      });
    });
  }

  function initTabs(root) {
    toArray(root.querySelectorAll("[data-ua-tabs]")).forEach(function (tabset) {
      var tabs = toArray(tabset.querySelectorAll(".ua-tabs__tab"));
      var panels = toArray(tabset.querySelectorAll(".ua-tabs__panel"));

      if (!tabs.length || !panels.length) {
        return;
      }

      tabs.forEach(function (tab, index) {
        var panel = panels[index];
        if (!panel) {
          return;
        }

        var initialized = tab.dataset.uaReady === "true";
        var tabId = ensureId(tab, "ua-tab");
        var panelId = ensureId(panel, "ua-tab-panel");
        var selected = tab.getAttribute("aria-selected") === "true" || (!initialized && index === 0);

        tab.setAttribute("type", "button");
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", panelId);
        tab.setAttribute("aria-selected", String(selected));
        tab.setAttribute("tabindex", selected ? "0" : "-1");
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", tabId);
        panel.hidden = !selected;

        if (initialized) {
          return;
        }

        tab.dataset.uaReady = "true";
        tab.addEventListener("click", function () {
          activateTab(tabs, panels, index);
        });

        tab.addEventListener("keydown", function (event) {
          var nextIndex = index;

          if (event.key === "ArrowRight") {
            nextIndex = (index + 1) % tabs.length;
          } else if (event.key === "ArrowLeft") {
            nextIndex = (index - 1 + tabs.length) % tabs.length;
          } else if (event.key === "Home") {
            nextIndex = 0;
          } else if (event.key === "End") {
            nextIndex = tabs.length - 1;
          } else {
            return;
          }

          event.preventDefault();
          activateTab(tabs, panels, nextIndex);
          tabs[nextIndex].focus();
        });
      });
    });
  }

  function activateTab(tabs, panels, selectedIndex) {
    tabs.forEach(function (tab, index) {
      var selected = index === selectedIndex;
      tab.setAttribute("aria-selected", String(selected));
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      if (panels[index]) {
        panels[index].hidden = !selected;
      }
    });
  }

  function initCarousels(root) {
    toArray(root.querySelectorAll("[data-ua-carousel]")).forEach(function (carousel) {
      if (carousel.dataset.uaReady === "true") {
        return;
      }

      var track = carousel.querySelector(".ua-carousel__track");
      var slides = toArray(carousel.querySelectorAll(".ua-carousel__slide"));
      var previous = carousel.querySelector("[data-ua-carousel-prev], .ua-carousel__prev");
      var next = carousel.querySelector("[data-ua-carousel-next], .ua-carousel__next");
      var dots = carousel.querySelector(".ua-carousel__dots");
      var current = 0;
      var timer = null;
      var wrap = carousel.getAttribute("data-ua-wrap") !== "false";

      if (!track || !slides.length) {
        return;
      }

      carousel.dataset.uaReady = "true";
      carousel.setAttribute("role", "region");
      carousel.setAttribute("aria-roledescription", "carousel");

      slides.forEach(function (slide, index) {
        slide.setAttribute("role", "group");
        slide.setAttribute("aria-roledescription", "slide");
        slide.setAttribute("aria-label", (index + 1) + " de " + slides.length);
      });

      if (dots && !dots.children.length) {
        slides.forEach(function (_, index) {
          var dot = document.createElement("button");
          dot.className = "ua-carousel__dot";
          dot.type = "button";
          dot.setAttribute("aria-label", "Ir al slide " + (index + 1));
          dot.addEventListener("click", function () {
            goTo(index);
            restart();
          });
          dots.appendChild(dot);
        });
      }

      var dotButtons = dots ? toArray(dots.querySelectorAll("button")) : [];

      function goTo(index) {
        if (wrap) {
          current = (index + slides.length) % slides.length;
        } else {
          current = Math.max(0, Math.min(slides.length - 1, index));
        }
        track.style.transform = "translateX(" + current * -100 + "%)";

        slides.forEach(function (slide, slideIndex) {
          slide.setAttribute("aria-hidden", String(slideIndex !== current));
        });

        dotButtons.forEach(function (dot, dotIndex) {
          dot.setAttribute("aria-current", String(dotIndex === current));
        });

        updateControls();
      }

      function updateButtonState(button, disabled) {
        if (!button) {
          return;
        }
        button.disabled = Boolean(disabled);
        button.setAttribute("aria-disabled", String(Boolean(disabled)));
      }

      function updateControls() {
        if (wrap) {
          updateButtonState(previous, slides.length < 2);
          updateButtonState(next, slides.length < 2);
          return;
        }
        updateButtonState(previous, current === 0);
        updateButtonState(next, current === slides.length - 1);
      }

      function start() {
        var shouldAutoplay = carousel.hasAttribute("data-ua-autoplay");
        var delay = parseNumber(carousel.getAttribute("data-ua-autoplay"), 5000);

        if (!shouldAutoplay || slides.length < 2) {
          return;
        }

        stop();
        timer = window.setInterval(function () {
          if (!wrap && current === slides.length - 1) {
            stop();
            return;
          }
          goTo(current + 1);
        }, delay);
      }

      function stop() {
        if (timer) {
          window.clearInterval(timer);
          timer = null;
        }
      }

      function restart() {
        stop();
        start();
      }

      if (previous) {
        previous.setAttribute("type", "button");
        previous.addEventListener("click", function () {
          goTo(current - 1);
          restart();
        });
      }

      if (next) {
        next.setAttribute("type", "button");
        next.addEventListener("click", function () {
          goTo(current + 1);
          restart();
        });
      }

      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", start);
      carousel.addEventListener("focusin", stop);
      carousel.addEventListener("focusout", start);
      goTo(0);
      start();
    });
  }

  function initModals(root) {
    toArray(root.querySelectorAll(".ua-modal")).forEach(function (modal) {
      if (!modal.hasAttribute("aria-hidden")) {
        modal.setAttribute("aria-hidden", "true");
      }

      modal.hidden = modal.getAttribute("aria-hidden") !== "false";

      if (modal.dataset.uaReady === "true") {
        return;
      }

      modal.dataset.uaReady = "true";
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          closeModal(modal);
        }
      });

      toArray(modal.querySelectorAll("[data-ua-modal-close]")).forEach(function (button) {
        button.setAttribute("type", "button");
        button.addEventListener("click", function () {
          closeModal(modal);
        });
      });
    });

    toArray(root.querySelectorAll("[data-ua-modal-target]")).forEach(function (trigger) {
      if (trigger.dataset.uaReady === "true") {
        return;
      }

      trigger.dataset.uaReady = "true";
      trigger.addEventListener("click", function () {
        var selector = trigger.getAttribute("data-ua-modal-target");
        var modal = document.querySelector(selector);
        if (modal) {
          openModal(modal, trigger);
        }
      });
    });
  }

  function openModal(modal, trigger) {
    if (activeModal && activeModal !== modal) {
      closeModal(activeModal);
    }

    lastFocusedElement = trigger || document.activeElement;
    activeModal = modal;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");

    var firstFocusable = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }

    modal.setAttribute("aria-hidden", "true");
    activeModal = activeModal === modal ? null : activeModal;

    window.setTimeout(function () {
      if (modal.getAttribute("aria-hidden") === "true") {
        modal.hidden = true;
      }
    }, 280);

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function initDismissibles(root) {
    toArray(root.querySelectorAll("[data-ua-dismiss]")).forEach(function (button) {
      if (button.dataset.uaReady === "true") {
        return;
      }

      button.dataset.uaReady = "true";
      button.setAttribute("type", "button");
      button.addEventListener("click", function () {
        var target = button.closest("[data-ua-dismissible]");
        if (target) {
          target.hidden = true;
        }
      });
    });
  }

  function initReveals(root) {
    var revealItems = toArray(root.querySelectorAll("[data-ua-reveal], .ua-reveal"));

    if (!revealItems.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("ua-is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("ua-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach(function (item) {
      if (item.dataset.uaRevealReady === "true") {
        return;
      }

      item.dataset.uaRevealReady = "true";
      observer.observe(item);
    });
  }

  function initCounters(root) {
    var counters = toArray(root.querySelectorAll("[data-ua-counter]"));

    if (!counters.length) {
      return;
    }

    function runCounter(counter) {
      if (counter.dataset.uaCounted === "true") {
        return;
      }

      counter.dataset.uaCounted = "true";
      var end = parseNumber(counter.getAttribute("data-ua-counter"), 0);
      var duration = parseNumber(counter.getAttribute("data-ua-counter-duration"), 1100);
      var prefix = counter.getAttribute("data-ua-counter-prefix") || "";
      var suffix = counter.getAttribute("data-ua-counter-suffix") || "";
      var decimals = parseNumber(counter.getAttribute("data-ua-counter-decimals"), 0);
      var startTime = null;

      function tick(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = end * eased;
        counter.textContent = prefix + value.toFixed(decimals) + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      }

      window.requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (counter) {
      if (counter.dataset.uaCounterReady === "true") {
        return;
      }

      counter.dataset.uaCounterReady = "true";
      observer.observe(counter);
    });
  }

  function initTilt(root) {
    toArray(root.querySelectorAll("[data-ua-tilt], .ua-hover-tilt")).forEach(function (element) {
      if (element.dataset.uaTiltReady === "true") {
        return;
      }

      element.dataset.uaTiltReady = "true";
      element.addEventListener("mousemove", function (event) {
        var rect = element.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        var y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
        element.style.setProperty("--ua-tilt-x", x.toFixed(2) + "deg");
        element.style.setProperty("--ua-tilt-y", y.toFixed(2) + "deg");
        element.classList.add("ua-is-tilting");
      });

      element.addEventListener("mouseleave", function () {
        element.style.removeProperty("--ua-tilt-x");
        element.style.removeProperty("--ua-tilt-y");
        element.classList.remove("ua-is-tilting");
      });
    });
  }

  function initCopy(root) {
    toArray(root.querySelectorAll("[data-ua-copy]")).forEach(function (button) {
      if (button.dataset.uaReady === "true") {
        return;
      }

      button.dataset.uaReady = "true";
      button.setAttribute("type", "button");
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-ua-copy");
        var targetSelector = button.getAttribute("data-ua-copy-target");
        var target = targetSelector ? document.querySelector(targetSelector) : null;

        if (target) {
          value = target.value || target.textContent || "";
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value || "");
        }
      });
    });
  }

  function initVideos(root) {
    toArray(root.querySelectorAll("[data-ua-video]")).forEach(function (videoWrap) {
      if (videoWrap.dataset.uaReady === "true") {
        return;
      }

      var button = videoWrap.querySelector(".ua-video__play");
      var video = videoWrap.querySelector("video");

      if (!button || !video) {
        return;
      }

      videoWrap.dataset.uaReady = "true";
      button.setAttribute("type", "button");
      button.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          button.hidden = true;
        } else {
          video.pause();
          button.hidden = false;
        }
      });

      video.addEventListener("pause", function () {
        button.hidden = false;
      });
    });
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    var minutes = Math.floor(seconds / 60);
    var remaining = Math.floor(seconds % 60);
    return minutes + ":" + (remaining < 10 ? "0" : "") + remaining;
  }

  function initPodcastPlayers(root) {
    toArray(root.querySelectorAll("[data-ua-podcast], .ua-podcast-player")).forEach(function (player) {
      if (player.dataset.uaReady === "true") {
        return;
      }

      var audio = player.querySelector(".ua-podcast-player__audio, audio");
      var source = player.getAttribute("data-ua-audio") || player.getAttribute("data-ua-audio-src");
      var playButton = player.querySelector(".ua-podcast-player__play");
      var range = player.querySelector(".ua-podcast-player__range");
      var current = player.querySelector(".ua-podcast-player__current");
      var duration = player.querySelector(".ua-podcast-player__duration");

      if (!audio && source) {
        audio = document.createElement("audio");
        audio.className = "ua-podcast-player__audio";
        audio.preload = "metadata";
        audio.src = source;
        player.appendChild(audio);
      } else if (audio && source && !audio.getAttribute("src")) {
        audio.setAttribute("src", source);
      }

      if (!audio) {
        return;
      }

      player.dataset.uaReady = "true";

      if (!playButton || !range) {
        audio.controls = true;
        player.classList.add("ua-podcast-player--native");
        return;
      }

      playButton.setAttribute("type", "button");
      range.setAttribute("min", "0");
      range.setAttribute("value", "0");
      range.setAttribute("step", "0.1");

      function updateDuration() {
        var audioDuration = Number.isFinite(audio.duration) ? audio.duration : 0;
        range.max = String(audioDuration || 0);
        if (duration) {
          duration.textContent = formatTime(audioDuration);
        }
      }

      function updateProgress() {
        range.value = String(audio.currentTime || 0);
        if (current) {
          current.textContent = formatTime(audio.currentTime || 0);
        }
      }

      function setPlaying(playing) {
        playButton.textContent = playing ? "Pausa" : "Play";
        playButton.setAttribute("aria-label", playing ? "Pausar audio" : "Reproducir audio");
      }

      playButton.addEventListener("click", function () {
        toArray(document.querySelectorAll(".ua-podcast-player audio")).forEach(function (otherAudio) {
          if (otherAudio !== audio) {
            otherAudio.pause();
          }
        });

        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });

      range.addEventListener("input", function () {
        audio.currentTime = parseNumber(range.value, 0);
        updateProgress();
      });

      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("durationchange", updateDuration);
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("play", function () {
        setPlaying(true);
      });
      audio.addEventListener("pause", function () {
        setPlaying(false);
      });
      audio.addEventListener("ended", function () {
        setPlaying(false);
        audio.currentTime = 0;
      });

      updateDuration();
      updateProgress();
      setPlaying(false);
    });
  }

  function init(root) {
    var scope = root || document;
    initAccordions(scope);
    initTabs(scope);
    initCarousels(scope);
    initModals(scope);
    initDismissibles(scope);
    initReveals(scope);
    initCounters(scope);
    initTilt(scope);
    initCopy(scope);
    initVideos(scope);
    initPodcastPlayers(scope);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && activeModal) {
      closeModal(activeModal);
    }
  });

  window.UAmericaMoodle = {
    init: init,
    openModal: openModal,
    closeModal: closeModal
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init(document);
    });
  } else {
    init(document);
  }
})();
