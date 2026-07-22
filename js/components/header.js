(() => {
  const mount = document.querySelector("#site-header");
  if (!mount) return;

  const isHomePage = document.querySelector(".home-page") !== null;
  const homeHref = isHomePage ? "#top" : "index.html#top";
  const profileHref = isHomePage ? "#profile-title" : "index.html#profile-title";
  const contactHref = isHomePage ? "#contact-heading" : "index.html#contact-heading";

  mount.innerHTML = `
    <header class="site-header" aria-label="サイトヘッダー">
      <div class="header-top-strip" aria-hidden="true"></div>
      <div class="header-brand-block" aria-hidden="true"></div>

      <a
        class="site-brand"
        href="${homeHref}"
        aria-label="ポートフォリオのトップへ"
      >
        PORTFOLIO
      </a>

      <nav class="site-nav" aria-label="メインナビゲーション">
        <a class="nav-link" href="${homeHref}">HOME</a>
        <a class="nav-link" href="${profileHref}">PROFILE</a>
        <a class="nav-link" href="${contactHref}">CONTACT</a>
      </nav>
    </header>
  `;
})();
