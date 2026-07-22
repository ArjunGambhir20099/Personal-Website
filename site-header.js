(() => {
  const smallScreenQuery = window.matchMedia("(max-width: 600px)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const header = document.querySelector(".site-header");
  const nav = header?.querySelector(".nav-links");
  let menuButton;
  let backToTopButton;

  const updateHeader = () => {
    document.body.classList.toggle("has-scrolled", window.scrollY > 12);
  };

  const closeMobileMenu = () => {
    if (!header || !menuButton) return;
    header.classList.remove("is-menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const setupMobileMenu = () => {
    if (!header || !nav || menuButton) return;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    let hasCurrentLink = false;
    nav.querySelectorAll("a").forEach((link) => {
      const linkPath = link.getAttribute("href")?.split("#")[0] || "";
      if (linkPath && linkPath === currentPath) {
        link.setAttribute("aria-current", "page");
        hasCurrentLink = true;
      }
    });

    if (!hasCurrentLink) {
      const fallbackSelector = document.body.classList.contains("page-right-brain")
        ? ".nav-right"
        : document.body.classList.contains("project-detail-page")
          ? ".nav-left"
          : null;
      if (fallbackSelector) nav.querySelector(fallbackSelector)?.setAttribute("aria-current", "page");
    }

    const navId = nav.id || `site-nav-${Math.random().toString(36).slice(2, 8)}`;
    nav.id = navId;

    menuButton = document.createElement("button");
    menuButton.className = "menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", navId);
    menuButton.innerHTML = '<span>Menu</span><span class="menu-toggle-chevron" aria-hidden="true">⌄</span>';
    header.insertBefore(menuButton, nav);

    const toggleMobileMenu = () => {
      const isOpen = header.classList.toggle("is-menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    };

    menuButton.addEventListener("click", toggleMobileMenu);

    menuButton.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleMobileMenu();
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMobileMenu();
    });

    document.addEventListener("click", (event) => {
      if (!smallScreenQuery.matches || !header.classList.contains("is-menu-open")) return;
      if (!header.contains(event.target)) closeMobileMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeMobileMenu();
      if (smallScreenQuery.matches) menuButton.focus();
    });

    smallScreenQuery.addEventListener("change", closeMobileMenu);
  };

  const updateBackToTop = () => {
    if (!backToTopButton) return;
    const shouldShow = window.scrollY > 420;
    backToTopButton.classList.toggle("is-visible", shouldShow);
  };

  const setupBackToTop = () => {
    if (backToTopButton) return;

    backToTopButton = document.createElement("button");
    backToTopButton.className = "back-to-top-button";
    backToTopButton.type = "button";
    backToTopButton.setAttribute("aria-label", "Back to top");
    backToTopButton.textContent = "↑";
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: reducedMotionQuery.matches ? "auto" : "smooth",
      });
    });

    smallScreenQuery.addEventListener("change", updateBackToTop);
  };

  const splitProjectGalleries = () => {
    document.querySelectorAll(".gallery-section").forEach((section) => {
      const rows = section.querySelectorAll(".detail-gallery");
      if (rows.length < 2) return;

      const uniqueFigures = [];
      const seen = new Set();

      rows[0].querySelectorAll("figure").forEach((figure) => {
        const image = figure.querySelector("img");
        const key = image?.getAttribute("src");
        if (!key || seen.has(key)) return;
        seen.add(key);
        uniqueFigures.push(figure.cloneNode(true));
      });

      if (uniqueFigures.length < 4) return;

      const splitAt = Math.ceil(uniqueFigures.length / 2);
      const rowSets = [uniqueFigures.slice(0, splitAt), uniqueFigures.slice(splitAt)];

      rows.forEach((row, rowIndex) => {
        row.replaceChildren();
        const set = rowSets[rowIndex] || [];
        for (let cycle = 0; cycle < 3; cycle += 1) {
          set.forEach((figure) => {
            const clone = figure.cloneNode(true);
            if (cycle > 0 || rowIndex > 0) clone.setAttribute("aria-hidden", "true");
            row.appendChild(clone);
          });
        }
      });
    });
  };

  updateHeader();
  setupMobileMenu();
  setupBackToTop();
  updateBackToTop();
  splitProjectGalleries();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("scroll", updateBackToTop, { passive: true });
})();
