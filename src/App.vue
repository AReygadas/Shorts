<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>

    <div class="👾">
      
      <nav class="nav">
        <a>Home</a>
        <RouterLink to="/recursos">Recursos</RouterLink>
        <RouterLink to="/video">video</RouterLink>

        <RouterLink to="/center">center</RouterLink>
        <RouterLink to="/dropdown">DropDown Menu</RouterLink>
        <RouterLink to="/btn">Botones</RouterLink>
        <RouterLink to="/input">Input</RouterLink>
        <RouterLink to="/inputCurrenci">Currenci</RouterLink>
       
      </nav>  
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 95vh;
}
.👾{
  display: grid;
  grid-template-columns: 17vw 75vw;
}
nav {
  display: grid;
  width: 100%;
  height: 95vh;
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

@media (min-width: 1024px) {
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
}
</style>
