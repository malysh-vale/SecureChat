/**
 * SecureChat — Mobile Sidebar Patch v2
 * Sidebar retráctil, ocultable y completamente responsivo para móvil.
 */
(function () {
  "use strict";

  var MOBILE_BP = 1024;
  var sidebarOpen = false;
  var contactsHidden = false;
  var touchStartX = 0;
  var touchStartY = 0;

  function createMenuButton() {
    var btn = document.createElement("button");
    btn.id = "sc-menu-btn";
    btn.setAttribute("aria-label", "Abrir menú de contactos");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("type", "button");
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="3" y1="6" x2="21" y2="6"/>' +
      '<line x1="3" y1="12" x2="21" y2="12"/>' +
      '<line x1="3" y1="18" x2="21" y2="18"/>' +
      "</svg>";
    return btn;
  }

  function createHideButton() {
    var btn = document.createElement("button");
    btn.id = "sc-hide-contacts-btn";
    btn.setAttribute("aria-label", "Ocultar contactos");
    btn.setAttribute("type", "button");
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="18" y1="6" x2="6" y2="18"/>' +
      '<line x1="6" y1="6" x2="18" y2="18"/>' +
      "</svg>";
    return btn;
  }

  function createOverlay() {
    var overlay = document.createElement("div");
    overlay.id = "sc-overlay";
    overlay.setAttribute("aria-hidden", "true");
    return overlay;
  }

  function createStatusIndicator() {
    var indicator = document.createElement("div");
    indicator.id = "sc-status-indicator";
    indicator.textContent = "Contactos ocultos";
    return indicator;
  }

  function getSidebar() {
    var container = document.querySelector(".flex.h-screen.overflow-hidden");
    if (!container) return null;
    return container.firstElementChild;
  }

  function openSidebar() {
    var sidebar = getSidebar();
    var overlay = document.getElementById("sc-overlay");
    var btn = document.getElementById("sc-menu-btn");
    if (!sidebar) return;

    sidebarOpen = true;
    sidebar.classList.add("sc-sidebar-open");
    if (overlay) {
      overlay.style.display = "block";
      overlay.offsetHeight;
      overlay.classList.add("sc-visible");
    }
    if (btn) {
      btn.setAttribute("aria-expanded", "true");
      btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="18" y1="6" x2="6" y2="18"/>' +
        '<line x1="6" y1="6" x2="18" y2="18"/>' +
        "</svg>";
    }
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    var sidebar = getSidebar();
    var overlay = document.getElementById("sc-overlay");
    var btn = document.getElementById("sc-menu-btn");
    if (!sidebar) return;

    sidebarOpen = false;
    sidebar.classList.remove("sc-sidebar-open");
    if (overlay) {
      overlay.classList.remove("sc-visible");
      setTimeout(function () {
        if (!sidebarOpen) overlay.style.display = "none";
      }, 300);
    }
    if (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="3" y1="6" x2="21" y2="6"/>' +
        '<line x1="3" y1="12" x2="21" y2="12"/>' +
        '<line x1="3" y1="18" x2="21" y2="18"/>' +
        "</svg>";
    }
    document.body.style.overflow = "";
  }

  function toggleSidebar() {
    if (sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  function hideContacts() {
    var sidebar = getSidebar();
    var indicator = document.getElementById("sc-status-indicator");
    var btn = document.getElementById("sc-hide-contacts-btn");

    if (!sidebar) return;

    contactsHidden = true;
    sidebar.style.display = "none";
    closeSidebar();

    if (indicator) {
      indicator.style.display = "block";
      setTimeout(function () {
        indicator.style.display = "none";
      }, 3000);
    }

    if (btn) {
      btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
        '<circle cx="12" cy="12" r="3"/>' +
        "</svg>";
      btn.setAttribute("aria-label", "Mostrar contactos");
    }
  }

  function showContacts() {
    var sidebar = getSidebar();
    var btn = document.getElementById("sc-hide-contacts-btn");

    if (!sidebar) return;

    contactsHidden = false;
    sidebar.style.display = "";

    if (btn) {
      btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="18" y1="6" x2="6" y2="18"/>' +
        '<line x1="6" y1="6" x2="18" y2="18"/>' +
        "</svg>";
      btn.setAttribute("aria-label", "Ocultar contactos");
    }
  }

  function toggleContacts() {
    if (contactsHidden) {
      showContacts();
    } else {
      hideContacts();
    }
  }

  function isMobile() {
    return window.innerWidth <= MOBILE_BP;
  }

  function waitForChatMount(callback) {
    var observer = new MutationObserver(function () {
      var container = document.querySelector(".flex.h-screen.overflow-hidden");
      if (container && container.children.length >= 2) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(document.getElementById("root") || document.body, {
      childList: true,
      subtree: true,
    });
  }

  function attachConversationClickListener() {
    var container = document.querySelector(".flex.h-screen.overflow-hidden");
    if (!container) return;

    container.addEventListener(
      "click",
      function (e) {
        if (!isMobile() || !sidebarOpen) return;

        var sidebar = getSidebar();
        if (!sidebar) return;

        var target = e.target;
        while (target && target !== sidebar) {
          if (
            target.tagName === "BUTTON" &&
            target.id !== "sc-menu-btn" &&
            target.id !== "sc-hide-contacts-btn"
          ) {
            setTimeout(closeSidebar, 80);
            return;
          }
          target = target.parentElement;
        }
      },
      true
    );
  }

  function handleKeyboardVisibility() {
    var initialViewportHeight = window.innerHeight;

    window.addEventListener("resize", function () {
      var currentViewportHeight = window.innerHeight;
      if (currentViewportHeight < initialViewportHeight * 0.75) {
        document.body.classList.add("sc-keyboard-open");
      } else {
        document.body.classList.remove("sc-keyboard-open");
      }
    });
  }

  function init() {
    var menuBtn = createMenuButton();
    var hideBtn = createHideButton();
    var overlay = createOverlay();
    var indicator = createStatusIndicator();

    document.body.appendChild(menuBtn);
    document.body.appendChild(hideBtn);
    document.body.appendChild(overlay);
    document.body.appendChild(indicator);

    menuBtn.addEventListener("click", toggleSidebar);
    hideBtn.addEventListener("click", toggleContacts);
    overlay.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (sidebarOpen) closeSidebar();
      }
    });

    document.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchend",
      function (e) {
        if (!isMobile()) return;
        var dx = e.changedTouches[0].clientX - touchStartX;
        var dy = Math.abs(e.changedTouches[0].clientY - touchStartY);

        if (!sidebarOpen && touchStartX <= 30 && dx > 50 && dy < 60) {
          openSidebar();
        }
        if (sidebarOpen && dx < -50 && dy < 60) {
          closeSidebar();
        }
      },
      { passive: true }
    );

    window.addEventListener("resize", function () {
      if (!isMobile() && sidebarOpen) {
        closeSidebar();
      }
    });

    attachConversationClickListener();
    handleKeyboardVisibility();

    var observer = new MutationObserver(function () {
      var sidebar = getSidebar();
      if (sidebar && !document.getElementById("sc-hide-contacts-btn-injected")) {
        var existingBtn = sidebar.querySelector("#sc-hide-contacts-btn");
        if (!existingBtn) {
          var clonedBtn = hideBtn.cloneNode(true);
          clonedBtn.id = "sc-hide-contacts-btn-injected";
          sidebar.style.position = "relative";
          sidebar.appendChild(clonedBtn);
          clonedBtn.addEventListener("click", toggleContacts);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      waitForChatMount(init);
    });
  } else {
    waitForChatMount(init);
  }
})();
