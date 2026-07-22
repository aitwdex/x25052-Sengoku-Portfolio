(() => {
  const CANVAS_WIDTH = 1280;
  let resizeFrame = 0;

  function updateCanvasScale() {
    const shell = document.querySelector(".page-shell");
    const canvas = document.querySelector(".page-canvas");

    if (!shell || !canvas) return;

    const pageHeight = Number(canvas.dataset.pageHeight || 3773);
    const viewportWidth =
      window.visualViewport?.width || document.documentElement.clientWidth;
    const scale = Math.min(1, viewportWidth / CANVAS_WIDTH);

    canvas.style.transform = `scale(${scale})`;
    shell.style.width = `${CANVAS_WIDTH * scale}px`;
    shell.style.height = `${pageHeight * scale}px`;
  }

  function scheduleCanvasScaleUpdate() {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(updateCanvasScale);
  }

  function scrollToHash(hash, behavior = "smooth") {
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({
      behavior,
      block: "start",
    });
  }

  function bindPageNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const hash = link.getAttribute("href");
        if (!hash || hash === "#") return;

        event.preventDefault();
        history.replaceState(null, "", hash);
        scrollToHash(hash);
      });
    });

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(window.location.hash, "auto");
      });
    }
  }

  function bindVideos() {
    document.querySelectorAll(".portfolio-video").forEach((video) => {
      const toggle = () => {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      };

      video.addEventListener("click", toggle);

      video.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      });
    });
  }

  function guardPlaceholderLinks() {
    document
      .querySelectorAll('.social-link[href="#"]')
      .forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
        });
      });
  }

  updateCanvasScale();
  bindVideos();
  guardPlaceholderLinks();
  bindPageNavigation();

  window.addEventListener("resize", scheduleCanvasScaleUpdate, {
    passive: true,
  });

  window.addEventListener("orientationchange", scheduleCanvasScaleUpdate, {
    passive: true,
  });

  window.visualViewport?.addEventListener(
    "resize",
    scheduleCanvasScaleUpdate,
    { passive: true },
  );
})();
