(() => {
  const mount = document.querySelector("#work-sections");
  if (!mount) return;

  mount.insertAdjacentHTML(
    "beforeend",
    `
      <section aria-labelledby="cg-programming-title">
        <h2
          id="cg-programming-title"
          class="work-category-label cg-programming-label"
        >
          CGプログラミング
        </h2>

        <figure class="numbered-media media-1">
          <img
            src="assets/images/1.png"
            alt="CGプログラミング作品1"
          />
        </figure>

        <p class="work-description cg-programming-copy">
          この作品はCGプログラミングの課題として制作したものです。
          運動する物体同士が衝突した際の動きなどに気をつけながら
          コードを書きました。
        </p>

        <figure class="numbered-media media-2">
          <img
            src="assets/images/2.png"
            alt="CGプログラミング作品2"
          />
        </figure>

        <figure class="numbered-media media-3">
          <img
            src="assets/images/3.png"
            alt="CGプログラミング作品3"
          />
        </figure>
      </section>
    `,
  );
})();