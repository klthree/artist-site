<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
import GalleryView from './views/GalleryView.vue';
</script>

<template>
  <div class="main-flex">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <GalleryView />
  </div>
  <!-- <HomeView /> -->
  <!-- <RouterView /> -->
</template>

<style scoped>
.main-flex {
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
}

header {
  flex: 1 1 0;
  background: #fafafa; /* Optional: visual separation */
  box-shadow: 1px 0 4px rgba(0,0,0,0.03);
  z-index: 1;
}

.main-flex > *:not(header) {
  flex: 3 1 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
