(() => {
  const mount = document.querySelector("#work-sections");
  if (!mount) return;

  mount.insertAdjacentHTML(
    "beforeend",
    '<a class="top-link work-top-link" href="#top">TOP</a>',
  );
})();