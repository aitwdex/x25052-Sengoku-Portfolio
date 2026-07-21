(() => {
  const mount = document.querySelector("#home-work-section");
  if (!mount) return;

  mount.innerHTML = `
    <section aria-labelledby="home-work-title">
      <h2 id="home-work-title" class="section-title home-work-title">
        Work
      </h2>

      <span class="title-line home-work-line" aria-hidden="true"></span>
      <span class="more-arrow" aria-hidden="true"></span>

      <a class="more-link" href="work.html">More</a>

      <figure class="image-frame home-horse">
        <img
          src="assets/images/horse-home.png"
          alt="歯車を用いた馬型の3DCGモデル"
        />
      </figure>

      <figure class="image-frame home-fluid">
        <img
          src="assets/images/fluid.png"
          alt="球体と流体表現のCG作品"
        />
      </figure>

      <figure class="image-frame home-poster">
        <img
          src="assets/images/poster.png"
          alt="Contents Creation Circleの勧誘ポスター"
        />
      </figure>
    </section>
  `;
})();