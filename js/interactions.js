(() => {
  const CANVAS_WIDTH = 1280;

  function updateCanvasScale() {
    const shell = document.querySelector(".page-shell");
    const canvas = document.querySelector(".page-canvas");

    if (!shell || !canvas) return;

    const pageHeight = Number(canvas.dataset.pageHeight || 3773);
    const scale = Math.min(1, window.innerWidth / CANVAS_WIDTH);

    canvas.style.transform = `scale(${scale})`;
    shell.style.width = `${CANVAS_WIDTH * scale}px`;
    shell.style.height = `${pageHeight * scale}px`;
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

  window.addEventListener("resize", updateCanvasScale, {
    passive: true,
  });
})();