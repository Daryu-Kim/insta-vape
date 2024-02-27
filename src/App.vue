<template>
  <SideBarVue />
  <router-view class="router" />
</template>

<style lang="scss">
@import "@/styles/theme.scss";
@font-face {
  font-family: "billabong";
  src: url("~@/assets/fonts/billabong.ttf");
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
}

.router {
  flex: 1;
}
</style>

<script setup lang="ts">
import SideBarVue from "@/components/SideBar.vue";
</script>
