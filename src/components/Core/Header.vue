<template>
  <header>
    <nav class="navbar">
      <div class="navbar-section logo">
        <a href="/" class="text-xl font-bold text-[#f2f2f2]">Fisher's Hood</a>
      </div>

      <div class="navbar-section center-buttons">
        <a href="/booking" class="outline-btn">
          <span class="icon">📍</span> Booking
        </a>
        <a href="/forums" class="outline-btn">
          <span class="icon">🗨️</span> Forum
        </a>
        <a href="/shop" class="outline-btn">
          <span class="icon">🛒</span> Toko
        </a>
      </div>

      <div class="navbar-section right-buttons">
        <a href="/login" class="outline-btn">
          <span class="icon">👤</span> Login
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: transparent;
  position: relative;
  z-index: 10;
  color: white;
}

.outline-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  color: white;
  border-radius: 256px;
  backdrop-filter: blur(12px);
  box-shadow: 0 6px 12px rgba(16, 16, 16, 0.2);
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.outline-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.icon {
  font-size: 18px;
  line-height: 0;
}

.logo {
  color: white;
}

.center-buttons {
  display: flex;
  gap: 1.5rem;
}

.right-buttons {
  display: flex;
  align-items: center;
}

.navbar {
  max-width: 100%;
}

</style>

<script setup>
  
</script>