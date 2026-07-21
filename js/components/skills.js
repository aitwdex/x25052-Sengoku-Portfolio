(() => {
  const mount = document.querySelector("#skills-section");
  if (!mount) return;

  mount.innerHTML = `
    <section aria-labelledby="skills-title">
      <h2 id="skills-title" class="section-title skills-title">
        Skills
      </h2>

      <span class="title-line skills-line" aria-hidden="true"></span>

      <div class="skill-card adobe-card">
        <p class="skill-copy adobe-copy">Adobe : Ai(Adobe Illustrator)
             Ae(AfterEffects)
             Ps(Photoshop)</p>

        <img
          class="adobe-icon adobe-ai"
          src="assets/icons/adobe-ai.png"
          alt="Adobe Illustrator"
        />

        <img
          class="adobe-icon adobe-ae"
          src="assets/icons/adobe-ae.png"
          alt="Adobe After Effects"
        />

        <img
          class="adobe-icon adobe-ps"
          src="assets/icons/adobe-ps.png"
          alt="Adobe Photoshop"
        />
      </div>

      <div class="skill-card programming-card">
        <p class="skill-copy programming-copy">Programing : C++,OpenCV
Web : HTML,JavaScript,CSS
Game : Unity</p>
      </div>
    </section>
  `;
})();