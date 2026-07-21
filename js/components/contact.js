(() => {
  const mount = document.querySelector("#contact-section");
  if (!mount) return;

  mount.innerHTML = `
    <footer id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" class="contact-heading">
        CONTACT
      </h2>

      <span
        class="contact-line contact-line-left"
        aria-hidden="true"
      ></span>

      <span
        class="contact-line contact-line-right"
        aria-hidden="true"
      ></span>

      <ul class="social-list" aria-label="連絡先とSNS">
        <li>
          <a class="social-link" href="#" aria-label="GitHub">
            <img src="assets/icons/github.svg" alt="" />
          </a>
        </li>

        <li>
          <a class="social-link" href="#" aria-label="Instagram">
            <img src="assets/icons/instagram.svg" alt="" />
          </a>
        </li>

        <li>
          <a class="social-link" href="#" aria-label="メール">
            <img src="assets/icons/mail.svg" alt="" />
          </a>
        </li>

        <li>
          <a class="social-link" href="#" aria-label="Facebook">
            <img src="assets/icons/facebook.svg" alt="" />
          </a>
        </li>
      </ul>

      <a class="top-link home-top-link" href="#top">TOP</a>
    </footer>
  `;
})();