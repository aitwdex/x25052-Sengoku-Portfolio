(() => {
  const mount = document.querySelector("#work-sections");
  if (!mount) return;

  mount.insertAdjacentHTML(
    "beforeend",
    `
      <section aria-labelledby="cg-content-title">
        <h2
          id="cg-content-title"
          class="work-category-label cg-content-label"
        >
          CGコンテンツ
        </h2>

        <figure class="image-frame work-room">
          <img
            src="assets/images/work-room.png"
            alt="室内の間取りとインテリアを再現したCG作品"
          />
        </figure>

        <p class="work-description cg-content-copy">
          この作品はCGコンテンツという授業で制作した課題です。
          自分が普段過ごしている部屋を間取り、配置、
          インテリアなどを細かく再現しました。
        </p>

        <figure class="image-frame work-bag">
          <img
            src="assets/images/work-bag.png"
            alt="バッグの3DCGモデル"
          />
        </figure>

        <figure class="image-frame work-pen">
          <img
            src="assets/images/work-pen.png"
            alt="ペンの3DCGモデル"
          />
        </figure>

        <figure class="image-frame work-horse">
          <img
            src="assets/images/work-horse.png"
            alt="歯車を用いた馬型の3DCGモデル"
          />
        </figure>
      </section>
    `,
  );
})();