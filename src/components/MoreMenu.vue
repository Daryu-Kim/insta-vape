<template>
  <div v-if="visible" class="menu" @click.stop>
    <div class="top">
      <button @click="$router.push('/')">
        <SettingIconVue width="1.8" height="1.8" />
        <p>설정</p>
      </button>
      <router-link to="/">
        <AnalyticsIconVue width="1.8" height="1.8" />
        <p>내 활동</p>
      </router-link>
      <router-link to="/">
        <BookmarkIconVue width="1.8" height="1.8" />
        <p>저장됨</p>
      </router-link>
      <button @click="$router.push('/')">
        <ReportIconVue width="1.8" height="1.8" />
        <p>문제 신고</p>
      </button>
    </div>
    <div class="bold-border"></div>
    <div class="middle">
      <a href="https://innovape.co.kr/" target="_blank">
        <PartnerIconVue width="1.8" height="1.8" />
        <p>이노베이프</p>
      </a>
    </div>
    <div class="light-border"></div>
    <div class="bottom">
      <button @click="$router.push('/')">
        <p>로그아웃</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import SettingIconVue from "@/assets/icons/SettingIcon.vue";
import AnalyticsIconVue from "@/assets/icons/AnalyticsIcon.vue";
import BookmarkIconVue from "@/assets/icons/BookmarkIcon.vue";
import ReportIconVue from "@/assets/icons/ReportIcon.vue";
import PartnerIconVue from "@/assets/icons/PartnerIcon.vue";

const props = defineProps({
  visible: Boolean,
});

const { visible } = toRefs(props);
</script>

<style lang="scss" scoped>
.menu {
  /* 메뉴 스타일 설정 */
  position: absolute;
  background-color: var(--thd-bg);
  z-index: 100;
  bottom: 8.4rem;
  left: 1rem;
  border-radius: 0.8rem;
  width: 26rem;
  display: flex;
  flex-direction: column;

  > .top,
  .middle,
  .bottom {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;

    > a,
    button {
      width: 100%;
      padding: 1.6rem;
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;

      &:hover {
        background-color: var(--fou-bg);
      }

      > p {
        font-size: 1.4rem;
      }
    }
  }

  > .bold-border {
    width: 100%;
    height: 0.6rem;
    background-color: var(--border);
  }

  > .light-border {
    width: 100%;
    height: 0.1rem;
    background-color: var(--border);
  }
}
</style>
