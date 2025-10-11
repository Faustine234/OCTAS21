document.addEventListener("DOMContentLoaded", () => {
  // === PILIH FOTO BACKGROUND ===
  const backgrounds = [
    "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80')",
    "url('https://images.unsplash.com/photo-1508675801627-066ac4346a0b?auto=format&fit=crop&w=1950&q=80')",
    "url('https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1950&q=80')",
    "url('https://images.unsplash.com/photo-1526401281623-3594f56a2d1d?auto=format&fit=crop&w=1950&q=80')"
  ];

  let current = 0;

  // === STYLE DASAR BODY ===
  document.body.style.cssText = `
    margin: 0;
    padding: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color: #e6eef8;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-image: ${backgrounds[current]};
    transition: background-image 1.5s ease-in-out;
  `;

  // === GANTI BACKGROUND OTOMATIS TIAP 10 DETIK ===
  setInterval(() => {
    current = (current + 1) % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[current];
  }, 10000);

  // === TOMBOL MANUAL GANTI BACKGROUND ===
  const switchBtn = document.createElement("button");
  switchBtn.textContent = "🔄 Ganti Background";
  switchBtn.className = "btn btn-ghost";
  switchBtn.style.position = "fixed";
  switchBtn.style.bottom = "20px";
  switchBtn.style.right = "20px";
  switchBtn.style.zIndex = "9999";
  switchBtn.onclick = () => {
    current = (current + 1) % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[current];
  };
  document.body.appendChild(switchBtn);

  // === HTML ASLI GUILD KAMU ===
  document.body.innerHTML += `
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo">OFW</div>
        <div>
          <div style="font-weight:700">Octa Fate War</div>
          <div style="font-size:13px;color:#94a3b8">Guild • PvP • Raids • Community</div>
        </div>
      </div>
      <nav>
        <a href="#about">Tentang</a>
        <a href="#roster">Roster</a>
        <a href="#events">Event</a>
        <a href="#rekrut">Rekrut</a>
        <a href="#contact">Kontak</a>
        <a href="gold.html">Gold</a>
      </nav>
    </header>

    <section class="hero">
      <div class="card">
        <h1>Selamat datang di <span style="color:#7c3aed">Octa Fate War</span></h1>
        <p>Guild kompetitif dan ramah — fokus PvP, Raid mingguan, dan turnamen komunitas.</p>
      </div>
    </section>
  </div>
  `;

  // Animasi kecil untuk logo/avatar
  document.querySelectorAll('.avatar').forEach((el, i) => {
    el.style.transform = 'translateY(-4px)';
    el.style.transition = 'transform 600ms cubic-bezier(.2,.9,.3,1)';
    setTimeout(() => el.style.transform = 'translateY(0)', 100 + i * 80);
  });
});
