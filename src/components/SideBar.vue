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
              <HomeIconVue
                :selected="$route.path === '/'"
                width="3.6"
                height="3.6"
              />
              <caption :class="{ selected: $route.path === '/' }">
                홈
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <SearchIconVue
                :selected="$route.path === '/search'"
                width="3.6"
                height="3.6"
              />
              <caption :class="{ selected: $route.path === '/search' }">
                검색
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/device">
              <DeviceIconVue
                width="3.6"
                height="3.6"
                :selected="$route.path === '/device'"
              />
              <caption :class="{ selected: $route.path === '/device' }">
                기기 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/liquid">
              <LiquidIconVue
                :selected="$route.path === '/liquid'"
                width="3.6"
                height="3.6"
              />
              <caption :class="{ selected: $route.path === '/liquid' }">
                액상 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/atomizer">
              <AtomizerIconVue
                :selected="$route.path === '/atomizer'"
                width="3.6"
                height="3.6"
              />
              <caption :class="{ selected: $route.path === '/atomizer' }">
                무화기 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/coil">
              <SearchIconVue
                :selected="$route.path === '/coil'"
                width="3.6"
                height="3.6"
              />
              <caption :class="{ selected: $route.path === '/coil' }">
                코일 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/accesory">
              <SearchIconVue
                :selected="$route.path === '/accesory'"
                width="3.6"
                height="3.6"
              />
              <caption :class="{ selected: $route.path === '/accesory' }">
                악세사리 둘러보기
              </caption>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 28rem;
  border-right: 0.1rem solid #aaa;
  padding: 2.4rem 1.6rem;

  > .top {
    width: 100%;

    > a {
      > h1 {
        padding-left: 0.8rem;
        font-family: "billabong", sans-serif;
        font-size: 3.6rem;
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
        gap: 1.2rem;

        > li {
          > a {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            border-radius: 0.8rem;
            padding: 0.6rem;

            &:hover {
              background-color: var(--sub-bg);
            }

            caption {
              font-size: 1.6rem;
              font-weight: 500;

              &.selected {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import HomeIconVue from "@/assets/icons/HomeIcon.vue";
import SearchIconVue from "@/assets/icons/SearchIcon.vue";
import DeviceIconVue from "@/assets/icons/DeviceIcon.vue";
import LiquidIconVue from "@/assets/icons/LiquidIcon.vue";
import AtomizerIconVue from "@/assets/icons/AtomizerIcon.vue";
</script>
