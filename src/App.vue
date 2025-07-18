<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="main-flex">
    <header>
      <nav>
        <h1>April</h1>
        <div class="links">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/editorial">Editorial</RouterLink>
          <RouterLink to="/cartoon">Cartoon</RouterLink>
          <RouterLink to="/animation">Animation</RouterLink>
        </div>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.main-flex {
  display: flex;
  width: 100vw;
  max-width: 90vw;
  min-height: 100vh;
}

header {
  flex: 1 1 0;
  background: #ffffff;
  z-index: 1;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

h1 {
  padding-bottom: 2rem;
}

.main-flex > *:not(header) {
  flex: 7 1 0;
}

nav {
  display: flex;
  flex-direction: column;
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
  padding: 1rem 0;
  font-size: large;
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 600px) {
  header {
  flex: 1 1 0;
  background: #ffffff;
  z-index: 1;
  }

  .main-flex {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .main-flex > *:not(header) {
    width: 100%;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding: 0;
    justify-self: center
  } 

  .links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .links * {
    font-size: small;
  }
}

</style>
