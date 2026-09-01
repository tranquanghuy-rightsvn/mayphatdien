(function () {
  "use strict";

  // ---- Mobile drawer -------------------------------------------------
  var openBtn = document.querySelector(".js-mobile-open");
  var closeBtns = document.querySelectorAll(".js-mobile-close");
  var drawer = document.querySelector(".js-mobile-drawer");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.remove("hidden");
    document.body.classList.add("tdm-drawer-open");
    // flush layout while still in the closed state, then slide in from the left
    void drawer.getBoundingClientRect();
    drawer.classList.add("is-open");
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    // keep scroll locked until the panel has finished sliding out
    window.setTimeout(function () {
      drawer.classList.add("hidden");
      document.body.classList.remove("tdm-drawer-open");
    }, 300);
  }

  if (openBtn && drawer) {
    openBtn.addEventListener("click", openDrawer);
    closeBtns.forEach(function (btn) {
      btn.addEventListener("click", closeDrawer);
    });
    // close when a real navigation link inside the drawer is tapped
    drawer.querySelectorAll('a[href]').forEach(function (link) {
      link.addEventListener("click", closeDrawer);
    });
    // close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !drawer.classList.contains("hidden")) closeDrawer();
    });
  }

  var mobileProductsToggle = document.querySelector(".js-mobile-products-toggle");
  var mobileProductsPanel = document.querySelector(".js-mobile-products-panel");
  var mobileProductsChevron = document.querySelector(".js-mobile-products-chevron");
  if (mobileProductsToggle && mobileProductsPanel) {
    mobileProductsToggle.addEventListener("click", function () {
      mobileProductsPanel.classList.toggle("hidden");
      if (mobileProductsChevron) mobileProductsChevron.classList.toggle("rotate-180");
    });
  }

  // ---- Hero carousel ---------------------------------------------------
  var hero = document.querySelector(".js-hero");
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".js-hero-slide"));
    var dots = Array.prototype.slice.call(hero.parentElement.querySelectorAll(".js-hero-dot"));
    var index = 0;
    var timer = null;

    function render() {
      slides.forEach(function (slide, i) {
        slide.classList.toggle("opacity-100", i === index);
        slide.classList.toggle("opacity-0", i !== index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("bg-white", i === index);
        dot.classList.toggle("shadow", i === index);
        dot.classList.toggle("bg-transparent", i !== index);
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      render();
    }

    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () {
        goTo(index + 1);
      }, 5000);
    }

    var prevBtn = hero.querySelector(".js-hero-prev");
    var nextBtn = hero.querySelector(".js-hero-next");
    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); restart(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); restart(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); restart(); });
    });

    restart();
  }

  // ---- Product gallery ---------------------------------------------------
  var gallery = document.querySelector(".js-gallery");
  if (gallery) {
    var images = Array.prototype.slice.call(gallery.querySelectorAll(".js-gallery-image"));
    var thumbs = Array.prototype.slice.call(gallery.querySelectorAll(".js-gallery-thumb"));
    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        var i = Number(thumb.getAttribute("data-index"));
        images.forEach(function (img) {
          img.classList.toggle("hidden", Number(img.getAttribute("data-index")) !== i);
        });
        thumbs.forEach(function (t) {
          t.classList.toggle("border-primary", t === thumb);
          t.classList.toggle("border-transparent", t !== thumb);
        });
      });
    });
  }

  // ---- Product tabs ---------------------------------------------------
  var tabsRoot = document.querySelector(".js-tabs");
  if (tabsRoot) {
    var tabBtns = Array.prototype.slice.call(tabsRoot.querySelectorAll(".js-tab-btn"));
    var tabPanels = Array.prototype.slice.call(tabsRoot.querySelectorAll(".js-tab-panel"));
    tabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = btn.getAttribute("data-tab");
        tabBtns.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle("border-primary", active);
          b.classList.toggle("text-primary", active);
          b.classList.toggle("border-transparent", !active);
          b.classList.toggle("text-muted-foreground", !active);
        });
        tabPanels.forEach(function (panel) {
          panel.classList.toggle("hidden", panel.getAttribute("data-panel") !== i);
        });
      });
    });
  }

  // ---- Contact form ---------------------------------------------------
  var contactForm = document.querySelector(".js-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = contactForm.querySelector(".js-contact-success");
      if (success) success.classList.remove("hidden");
    });
  }
})();
