<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/components/Core/Header.vue';
  import Footer from '@/components/Core/Footer.vue';
</script>

<template>
  <div class="font-inter antialiased">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>
