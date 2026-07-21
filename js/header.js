(() => {
  const mount = document.querySelector("#site-header");
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header" aria-label="サイトヘッダー">
      <div class="header-top-strip" aria-hidden="true"></div>
      <div class="header-brand-block" aria-hidden="true"></div>

      <a
        class="site-brand"
        href="index.html"
        aria-label="ポートフォリオのトップへ"
      >
        PORTFOLIO
      </a>

      <nav class="site-nav" aria-label="メインナビゲーション">
        <a class="nav-link" href="index.html">HOME</a>
        <a class="nav-link" href="index.html#profile">PROFILE</a>
        <a class="nav-link" href="index.html#contact">CONTACT</a>
      </nav>
    </header>
  `;
})();