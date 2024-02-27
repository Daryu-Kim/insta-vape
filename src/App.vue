<template>
  <div class="side-bar">
    <div class="top">
      <router-link to="/">
        <h1>Instavape</h1>
      </router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/">
              <HomeIconVue width="2.8" height="2.8" />
              <caption>
                홈
              </caption>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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

.side-bar {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 20rem;
  border-right: 0.1rem solid #aaa;
  padding: 2.4rem 1.6rem;

  > .top {
    width: 100%;

    > a {
      > h1 {
        padding-left: 0.8rem;
        font-family: "billabong", sans-serif;
        font-size: 2.8rem;
        font-weight: 500;
        text-align: start;
      }
    }

    > nav {
      margin-top: 2.4rem;

      > ul {
        list-style: none;
        text-align: start;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        > li {
          > a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            border-radius: 0.8rem;
            padding: 0.4rem;

            &:hover {
              background-color: var(--sub-bg);
            }

            caption {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
}

.router {
  flex: 1;
}
</style>

<script setup lang="ts">
import HomeIconVue from "@/assets/icons/HomeIcon.vue";
</script>
