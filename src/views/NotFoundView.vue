<template>
  <div class="not-found">
    <div class="inner">
      <h1>죄송합니다. 페이지를 사용할 수 없습니다.</h1>
      <div>
        <p>클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.</p>
        <RouterLink to="/">InstaVape로 돌아가기.</RouterLink>
      </div>
    </div>
    <MainFooterVue />
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 3.6rem;

  > .inner {
    flex: 1;
    > h1 {
      font-weight: 700;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2.4rem;
      gap: 0.8rem;

      > p {
        font-size: 1.6rem;
      }

      > a {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--accent);
      }
    }
  }
}
</style>

<script setup lang="ts">
import MainFooterVue from "@/components/MainFooter.vue";
</script>
