<script setup></script>
<template>
  
    <nav class="nav">
      <div class="nav__container">
        <h1 class="nav__title">AlexCG.</h1>

        <a href="#menu" class="nav__menu">
          <img src="@/assets/menu.svg" class="nav__icon" />
        </a>

        <a href="#" class="nav__menu nav__menu--second">
          <img src="@/assets/close.svg" class="nav__icon" />
        </a>

        <ul class="dropdown" id="menu">
          <li class="dropdown__list">
            <a href="#" class="dropdown__link">
              <img src="@/assets/house.svg" class="dropdown__icon" />
              <span class="dropdown__span">Inicio</span>
            </a>
          </li>

          <li class="dropdown__list">
            <a href="#" class="dropdown__link">
              <img src="@/assets/projects.svg" class="dropdown__icon" />
              <span class="dropdown__span">Projects</span>
              <img src="@/assets/down.svg" class="dropdown__arrow" />

              <input type="checkbox" class="dropdown__check" />
            </a>

            <div class="dropdown__content">
              <ul class="dropdown__sub">
                <li class="dropdown__li">
                  <a href="#" class="dropdown__anchor">Project 1</a>
                </li>
                <li class="dropdown__li">
                  <a href="#" class="dropdown__anchor">Project 2</a>
                </li>
                <li class="dropdown__li">
                  <a href="#" class="dropdown__anchor">Project 3</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="dropdown__list">
            <a href="#" class="dropdown__link">
              <img src="@/assets/email.svg" class="dropdown__icon" />
              <span class="dropdown__span">Contacto</span>
              <img src="@/assets/down.svg" class="dropdown__arrow" />

              <input type="checkbox" class="dropdown__check" />
            </a>

            <div class="dropdown__content">
              <ul class="dropdown__sub">
                <li class="dropdown__li">
                  <a href="#" class="dropdown__anchor">Contact 1</a>
                </li>
                <li class="dropdown__li">
                  <a href="#" class="dropdown__anchor">Contact 2</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="dropdown__list">
            <a href="#" class="dropdown__link">
              <img src="@/assets/help.svg" class="dropdown__icon" />
              <span class="dropdown__span">Ayuda</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  
</template>
<style scoped>

.nav {
  width: 80%;
  height: 80%;
  background-color: #830248;
  --img1: scale(1);
  --img2: scale(0);
}

.nav:has(.dropdown:target) {
  --img1: scale(0);
  --img2: scale(1);

  --clip: inset(0 0 0 0);
}

.nav__container {
  width: 90%;
  margin: 0 auto;
  height: auto;

  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-areas: "title img";
  justify-content: space-between;
  align-items: flex-start;

}

.nav__title {
  color: #fff;
  grid-area: title;
}

.nav__menu {
  grid-area: img;
  position: relative;
  z-index: 10;

  transform: var(--img1);
}

.nav__menu--second {
  transform: var(--img2);
}

.nav__icon {
  width: 30px;
  display: block;
}

.dropdown {
  position: absolute;
  background-color: #000;
  width: 75%;
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 1em;

  display: grid;
  align-content: center;
  gap: 1rem;

  overflow-y: auto;

  clip-path: var(--clip, inset(0 0 100% 100%));
  transition: clip-path 0.5s;
}

.dropdown__list {
  list-style: none;
}

.dropdown__link {
  color: rgb(184, 187, 191);
  padding: 1em 0.7em;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  position: relative;
  background-color: var(--bg, transparent);
  border-radius: 6px;
}

.dropdown__list:has(:checked) {
  --rows: 1fr;
  --rotate: rotate(180deg);
  --bg: #28303b;
}

.dropdown__check {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.dropdown__arrow {
  margin-left: auto;
  transform: var(--rotate, 0);
  transition: 0.2s transform;
}

.dropdown__content {
  display: grid;
  grid-template-rows: var(--rows, 0fr);
  transition: 0.3s grid-template-rows;
}

.dropdown__sub {
  overflow: hidden;
}

.dropdown__li {
  width: 85%;
  list-style: none;
  margin-left: auto;
}

.dropdown__anchor {
  padding: 1em 0;
  display: block;
  color: #b6babe;
  text-decoration: none;
}
</style>
