<template>
  <div class="side-bar" @click.self="isSelectedEtcButton = false">
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
                width="2.8"
                height="2.8"
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
                width="2.8"
                height="2.8"
              />
              <caption :class="{ selected: $route.path === '/search' }">
                검색
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/beginner">
              <BeginnerIconVue
                width="2.8"
                height="2.8"
                :selected="$route.path === '/beginner'"
              />
              <caption :class="{ selected: $route.path === '/beginner' }">
                입문용 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/subscribe">
              <SubscribeIconVue
                width="2.8"
                height="2.8"
                :selected="$route.path === '/subscribe'"
              />
              <caption :class="{ selected: $route.path === '/subscribe' }">
                정기구독 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/device">
              <DeviceIconVue
                width="2.8"
                height="2.8"
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
                width="2.8"
                height="2.8"
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
                width="2.8"
                height="2.8"
              />
              <caption :class="{ selected: $route.path === '/atomizer' }">
                무화기 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/coil">
              <CoilIconVue
                :selected="$route.path === '/coil'"
                width="2.8"
                height="2.8"
              />
              <caption :class="{ selected: $route.path === '/coil' }">
                코일 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/accesory">
              <AccesoryIconVue
                :selected="$route.path === '/accesory'"
                width="2.8"
                height="2.8"
              />
              <caption :class="{ selected: $route.path === '/accesory' }">
                악세사리 둘러보기
              </caption>
            </router-link>
          </li>
          <li>
            <router-link to="/profile">
              <ProfileIconVue
                :selected="$route.path === '/profile'"
                width="2.8"
                height="2.8"
              />
              <caption :class="{ selected: $route.path === '/profile' }">
                프로필
              </caption>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <router-link to="/cart">
            <CartIconVue
              :selected="$route.path === '/cart'"
              width="2.8"
              height="2.8"
            />
            <caption :class="{ selected: $route.path === '/cart' }">
              장바구니
            </caption>
          </router-link>
        </li>
        <li>
          <button @click="isSelectedEtcButton = !isSelectedEtcButton">
            <EtcIconVue
              :selected="isSelectedEtcButton"
              width="2.8"
              height="2.8"
            />
            <caption :class="{ selected: isSelectedEtcButton }">
              더 보기
            </caption>
            <Menu :visible="isSelectedEtcButton"></Menu>
          </button>
        </li>
      </ul>
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
  width: 24rem;
  border-right: 0.1rem solid var(--border);
  padding: 2.8rem 1rem;
  height: 100%;

  > .top {
    width: 100%;
    margin-top: 0.8rem;

    > a {
      > h1 {
        padding-left: 1.6rem;
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
        gap: 0.8rem;

        > li {
          > a {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            border-radius: 0.8rem;
            padding: 1.2rem;

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

  > .bottom {
    width: 100%;

    > ul {
      list-style: none;
      text-align: start;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      > li {
        > a,
        button {
          cursor: pointer;
          width: 100%;
          border: none;
          background: none;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          border-radius: 0.8rem;
          padding: 1.2rem;

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
</style>

<script setup lang="ts">
import HomeIconVue from "@/assets/icons/HomeIcon.vue";
import SearchIconVue from "@/assets/icons/SearchIcon.vue";
import BeginnerIconVue from "@/assets/icons/BeginnerIcon.vue";
import SubscribeIconVue from "@/assets/icons/SubscribeIcon.vue";
import DeviceIconVue from "@/assets/icons/DeviceIcon.vue";
import LiquidIconVue from "@/assets/icons/LiquidIcon.vue";
import AtomizerIconVue from "@/assets/icons/AtomizerIcon.vue";
import CoilIconVue from "@/assets/icons/CoilIcon.vue";
import AccesoryIconVue from "@/assets/icons/AccesoryIcon.vue";
import ProfileIconVue from "@/assets/icons/ProfileIcon.vue";
import CartIconVue from "@/assets/icons/CartIcon.vue";
import EtcIconVue from "@/assets/icons/EtcIcon.vue";
import { ref } from "vue";
import Menu from "@/components/MoreMenu.vue";

const isSelectedEtcButton = ref(false);
</script>
