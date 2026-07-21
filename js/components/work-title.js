(() => {
  const mount = document.querySelector("#work-sections");
  if (!mount) return;

  mount.insertAdjacentHTML(
    "beforeend",
    `
      <section aria-labelledby="work-title">
        <h1
          id="work-title"
          class="section-title work-page-title"
        >
          Work
        </h1>

        <span
          class="title-line work-page-line"
          aria-hidden="true"
        ></span>
      </section>
    `,
  );
})();