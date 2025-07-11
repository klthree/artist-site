<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="main-flex">
    <header>
      <nav>
        <h1>April Brust</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/editorial">Editorial</RouterLink>
        <RouterLink to="/science">Science</RouterLink>
        <RouterLink to="/fine">Fine Art</RouterLink>
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
  padding-right: calc(var(--section-gap) / 2);
}

header {
  flex: 1 1 0;
  background: #ffffff;
  z-index: 1;
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
  /* border-left: 1px solid var(--color-border); */
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
