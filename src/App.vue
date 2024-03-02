<template>
  <SideBarVue
    v-if="
      $router.currentRoute.value.name !== 'login' &&
      $router.currentRoute.value.name !== 'join' &&
      $router.currentRoute.value.name !== 'password-reset'
    "
  />
  <router-view class="router" />
</template>

<style lang="scss">
@import "@/styles/theme.scss";
@font-face {
  font-family: "billabong";
  src: url("~@/assets/fonts/billabong.ttf");
}

@font-face {
  font-family: "Instagram Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Instagram Sans"),
    url("@/assets/fonts/Instagram Sans Regular.ttf") format("ttf");
}

@font-face {
  font-family: "Instagram Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Instagram Sans Light"),
    url("@/assets/fonts/Instagram Sans Light.ttf") format("ttf");
}

@font-face {
  font-family: "Instagram Sans";
  font-style: normal;
  font-weight: 500;
  src: local("Instagram Sans Medium"),
    url("@/assets/fonts/Instagram Sans Medium.ttf") format("ttf");
}

@font-face {
  font-family: "Instagram Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Instagram Sans Bold"),
    url("@/assets/fonts/Instagram Sans Bold.ttf") format("ttf");
}

@font-face {
  font-family: "Instagram Sans Condensed";
  font-style: normal;
  font-weight: 400;
  src: local("Instagram Sans Condensed Regular"),
    url("@/assets/fonts/Instagram Sans Condensed Regular.ttf") format("ttf");
}

@font-face {
  font-family: "Instagram Sans Condensed";
  font-style: normal;
  font-weight: 700;
  src: local("Instagram Sans Condensed Bold"),
    url("@/assets/fonts/Instagram Sans Condensed Bold.ttf") format("ttf");
}

svg {
  fill: var(--primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 100vh;
  overflow: hidden;
  color: var(--primary);
  background-color: var(--bg);
  align-items: center;
}

html {
  font-size: 10px;
}

a {
  text-decoration: none;
  color: var(--primary);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
  font-family: "Instagram Sans";
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 2.4rem;
  font-family: "Instagram Sans Condensed";
}

.router {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}

button,
input {
  border: none;
  background: none;
  color: var(--primary);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--secondary);
  }
}

button {
  cursor: pointer;
}

.swiper {
  border-radius: 0.8rem !important;
}

.swiper-button-disabled {
  display: none !important;
}

.swiper-button-next,
.swiper-button-prev {
  width: 2.8rem !important;
  height: 2.8rem !important;
  aspect-ratio: 1 / 1 !important;
  background-color: rgba($color: #ffffff, $alpha: 1);
  border-radius: 50%;

  &::after {
    font-size: 1.2rem !important;
    color: black !important;
    font-weight: 700 !important;
  }
}

.swiper-pagination-bullet {
  background-color: white !important;
  opacity: 0.5 !important;

  &.swiper-pagination-bullet-active {
    opacity: 1 !important;
  }
}
</style>

<script setup lang="ts">
import SideBarVue from "@/components/SideBar.vue";
</script>
