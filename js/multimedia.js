(() => {
  const mount = document.querySelector("#work-sections");
  if (!mount) return;

  mount.insertAdjacentHTML(
    "beforeend",
    `
      <section aria-labelledby="multimedia-title">
        <h2
          id="multimedia-title"
          class="work-category-label multimedia-label"
        >
          マルチメディア
        </h2>

        <figure class="image-frame work-multimedia-poster">
          <img
            src="assets/images/work-poster.png"
            alt="Contents Creation Circleの勧誘ポスター"
          />
        </figure>

        <p class="work-description multimedia-copy">
          この作品はマルチメディアの課題として
          取り組んだ作品です。
          <br />
          当時所属していたサークルの勧誘ポスターを
          イメージして制作しました。
          <br />
          サークルの特徴、活動詳細を詳しく書き込み、
          一目でわかるように工夫しています。
        </p>

        <figure class="numbered-media media-4">
          <video
            class="portfolio-video"
            src="assets/videos/4.mp4"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
            tabindex="0"
            aria-label="マルチメディア作品4"
          ></video>

          <figcaption class="video-hint">
            クリックで再生・停止
          </figcaption>
        </figure>

        <figure class="numbered-media media-5">
          <video
            class="portfolio-video"
            src="assets/videos/5.mp4"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
            tabindex="0"
            aria-label="マルチメディア作品5"
          ></video>

          <figcaption class="video-hint">
            クリックで再生・停止
          </figcaption>
        </figure>
      </section>
    `,
  );
})();