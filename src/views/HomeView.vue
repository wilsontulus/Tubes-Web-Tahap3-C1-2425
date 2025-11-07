<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Tempat memancing Anda.</h1>
        <p>Siap untuk Anda kunjungi.</p>

        <div class="hero-buttons">
            <a href="/booking" class="filled-btn">
            <span class="icon">📍</span> Cari Tempat Anda
            </a>
            <a href="/shop" class="outline-btn">
            <span class="icon">🛒</span> Buka Toko
            </a>
        </div>
      </div>

      <div class="hero-map">
        <img src="@/assets/homepage-map.jpg" alt="Image preview" />
      </div>
    </div>
  </section>

  <section class="aap-main">
    <h2 class="aap-title">Tempat tersebar dimanapun</h2>

    <div class="card-grid">
      <div class="place-card">
        <img src="@/assets/dummy-prev.jpg" alt="Fishing Spot #1" />
        <h3>Fishing Spot #1</h3>
        <p>Dummy Description</p>
      </div>

      <div class="place-card">
        <img src="@/assets/dummy-prev.jpg" alt="Fishing Spot #2" />
        <h3>Fishing Spot #2</h3>
        <p>Dummy Description</p>
      </div>

      <div class="place-card">
        <img src="@/assets/dummy-prev.jpg" alt="Fishing Spot #3" />
        <h3>Fishing Spot #3</h3>
        <p>Dummy Description</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

.hero {
  height: 100vh;
  background: url("@/assets/homepage-background.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;
  padding: 6rem 3rem 3rem;
}

/* Main hero layout */
.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.hero-text {
  max-width: 50%;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero-text p {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

/* Buttons */
.outline-btn,
.filled-btn {
  border-radius: 256px;
  backdrop-filter: blur(12px);
  box-shadow: 0 6px 12px rgba(16, 16, 16, 0.2);
  padding: 0.6rem 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.25s ease;
}
.outline-btn {
  background: transparent;
  color: white;
}
.outline-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}
.filled-btn {
  background: linear-gradient(135deg, #4361e7d9, #66a6ffc9);
  color: white;
}
.filled-btn:hover {
  opacity: 0.9;
}

.hero-map img {
  width: 450px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

/* AAP Showcase place */

.aap-main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  color: #333;
  padding: 6rem 3rem;
  text-align: center;
}

.aap-title {
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.card-grid {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
}

.place-card {
  background: #dde7fa;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 320px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.place-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
.place-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.place-card h3 {
  font-size: 1.25rem;
  margin: 1rem 0 0.5rem;
}
.place-card p {
  font-size: 0.95rem;
  color: #555;
  padding: 0 1.5rem 1.5rem;
}

</style>
