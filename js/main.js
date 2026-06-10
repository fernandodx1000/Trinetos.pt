/* ==========================================================================
   TRINETOS — interações da página
   Carrossel hero · Filtros do catálogo · Menu mobile · Revelação ao scroll
   ========================================================================== */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     Carrossel hero
     ------------------------------------------------------------------ */
  var carousel = document.getElementById("hero-carousel");

  if (carousel) {
    var slides = carousel.querySelectorAll(".slide");
    var dotsWrap = document.getElementById("carousel-dots");
    var prevBtn = document.getElementById("carousel-prev");
    var nextBtn = document.getElementById("carousel-next");
    var currentEl = document.getElementById("carousel-current");
    var progressEl = document.getElementById("counter-progress");

    var AUTOPLAY_MS = 6000;
    var TICK_MS = 50;
    var current = 0;
    var elapsed = 0;
    var timer = null;
    var paused = false;

    // Criar pontos de navegação
    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Ir para o diapositivo " + (i + 1));
      dot.addEventListener("click", function () {
        goTo(i);
        resetAutoplay();
      });
      dotsWrap.appendChild(dot);
    });

    var dots = dotsWrap.querySelectorAll("button");

    function pad(n) {
      return n < 10 ? "0" + n : String(n);
    }

    function goTo(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
        dot.setAttribute("aria-selected", i === current ? "true" : "false");
      });

      currentEl.textContent = pad(current + 1);
      elapsed = 0;
    }

    function tick() {
      if (paused) return;
      elapsed += TICK_MS;
      progressEl.style.width = Math.min((elapsed / AUTOPLAY_MS) * 100, 100) + "%";
      if (elapsed >= AUTOPLAY_MS) {
        goTo(current + 1);
      }
    }

    function resetAutoplay() {
      elapsed = 0;
      progressEl.style.width = "0%";
    }

    prevBtn.addEventListener("click", function () {
      goTo(current - 1);
      resetAutoplay();
    });

    nextBtn.addEventListener("click", function () {
      goTo(current + 1);
      resetAutoplay();
    });

    // Pausar em hover ou quando o carrossel tem foco
    carousel.addEventListener("mouseenter", function () { paused = true; });
    carousel.addEventListener("mouseleave", function () { paused = false; });
    carousel.addEventListener("focusin", function () { paused = true; });
    carousel.addEventListener("focusout", function () { paused = false; });

    // Pausar quando o separador não está visível
    document.addEventListener("visibilitychange", function () {
      paused = document.hidden || paused;
      if (!document.hidden) paused = false;
    });

    // Navegação por teclado
    carousel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { goTo(current - 1); resetAutoplay(); }
      if (e.key === "ArrowRight") { goTo(current + 1); resetAutoplay(); }
    });

    // Swipe em ecrãs táteis
    var touchStartX = 0;
    var track = document.getElementById("carousel-track");

    track.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", function (e) {
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 48) {
        goTo(delta < 0 ? current + 1 : current - 1);
        resetAutoplay();
      }
    }, { passive: true });

    goTo(0);

    if (!prefersReducedMotion) {
      timer = setInterval(tick, TICK_MS);
    }
  }

  /* ------------------------------------------------------------------
     Filtros do catálogo
     ------------------------------------------------------------------ */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var catCards = document.querySelectorAll(".cat-card");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;

      filterBtns.forEach(function (b) { b.classList.toggle("is-active", b === btn); });

      catCards.forEach(function (card) {
        var show = filter === "todos" || card.dataset.group === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ------------------------------------------------------------------
     Menu mobile
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    // Fechar o menu ao escolher uma secção
    mainNav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------
     Header com sombra ao fazer scroll
     ------------------------------------------------------------------ */
  var header = document.querySelector(".site-header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  /* ------------------------------------------------------------------
     Revelação ao scroll
     ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ------------------------------------------------------------------
     Ano no footer
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
