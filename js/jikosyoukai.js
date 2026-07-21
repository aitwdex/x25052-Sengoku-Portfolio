(() => {
  const mount = document.querySelector("#profile-section");
  if (!mount) return;

  mount.innerHTML = `
    <section id="profile" aria-labelledby="profile-title">
      <h2 id="profile-title" class="section-title profile-title">
        PROFILE
      </h2>

      <span class="title-line profile-line" aria-hidden="true"></span>

      <div class="profile-card">
        <p class="profile-details">
          ・所属：愛知工業大学情報科学部情報科学科メディア情報専攻
          <br />
          ・学年：2年　・得意：デザイン
        </p>
      </div>
    </section>
  `;
})();