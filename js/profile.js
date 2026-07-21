(() => {
  const mount = document.querySelector("#intro-section");
  if (!mount) return;

  mount.innerHTML = `
    <section aria-labelledby="home-name">
      <h1 id="home-name" class="home-name">Shota Sengoku</h1>
      <span class="name-line" aria-hidden="true"></span>

      <p class="home-tagline">
        ーStudent of Aichi Institute Technology
      </p>

      <p class="home-summary">
        これは授業などで取り組んだ成果物をまとめたポートフォリオです。
        主にプログラミングについて学んでいる学生で、
        デザインに関する技術が得意です。
        今後社会に出た際に役に立つ技術を学んでいます。
      </p>

      <figure class="image-frame profile-photo">
        <img
          src="assets/images/profile.png"
          alt="Shota Sengokuのプロフィール写真"
        />
      </figure>
    </section>
  `;
})();