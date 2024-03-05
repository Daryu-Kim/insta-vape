<template>
  <div class="liquid">
    <div class="header">
      <img
        src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
      />
      <div>
        <div>
          <p class="title">#액상_둘러보기</p>
          <div>
            <p>상품 총 갯수</p>
            <p class="description">81.4만</p>
          </div>
        </div>
      </div>
    </div>
    <div class="filter">
      <select
        v-model="selectedTypeFilter"
        :class="{ selected: selectedTypeFilter !== '' }"
      >
        <option value="">액상 종류</option>
        <option value="mtl-liquid">입호흡 액상</option>
        <option value="dtl-liquid">폐호흡 액상</option>
      </select>
      <select
        v-model="selectedFlavorFilter"
        :class="{ selected: selectedFlavorFilter !== '' }"
      >
        <option value="">맛 종류</option>
        <option value="fruit">과일</option>
        <option value="juice">음료</option>
        <option value="only-menthol">단일 멘솔</option>
        <option value="dessert">디저트</option>
        <option value="cigarette">연초</option>
      </select>
      <select
        v-model="selectedSugarFilter"
        :class="{ selected: selectedSugarFilter !== '' }"
      >
        <option value="">당도</option>
        <option value="0">☆☆☆☆☆</option>
        <option value="1">★☆☆☆☆</option>
        <option value="2">★★☆☆☆</option>
        <option value="3">★★★☆☆</option>
        <option value="4">★★★★☆</option>
        <option value="5">★★★★★</option>
      </select>
      <select
        v-model="selectedCoolFilter"
        :class="{ selected: selectedCoolFilter !== '' }"
      >
        <option value="">쿨링감</option>
        <option value="0">☆☆☆☆☆</option>
        <option value="1">★☆☆☆☆</option>
        <option value="2">★★☆☆☆</option>
        <option value="3">★★★☆☆</option>
        <option value="4">★★★★☆</option>
        <option value="5">★★★★★</option>
      </select>
      <select
        v-model="selectedHitFilter"
        :class="{ selected: selectedHitFilter !== '' }"
      >
        <option value="">타격감</option>
        <option value="0">☆☆☆☆☆</option>
        <option value="1">★☆☆☆☆</option>
        <option value="2">★★☆☆☆</option>
        <option value="3">★★★☆☆</option>
        <option value="4">★★★★☆</option>
        <option value="5">★★★★★</option>
      </select>
      <select
        v-model="selectedNicotineFilter"
        :class="{ selected: selectedNicotineFilter !== '' }"
      >
        <option value="">니코틴 함량</option>
        <option :value="[0, 3]">3mg 미만</option>
        <option :value="[3, 6]">3mg 이상, 6mg 미만</option>
        <option :value="[6, 10]">6mg 이상, 10mg 미만</option>
        <option :value="[10, 30]">10mg 이상, 30mg 미만</option>
        <option :value="[30, 50]">30mg 이상, 50mg 미만</option>
        <option :value="[50, 100]">50mg 이상</option>
      </select>
      <select
        v-model="selectedPriceFilter"
        :class="{ selected: selectedPriceFilter !== '' }"
      >
        <option value="">가격대</option>
        <option :value="[0, 15000]">15,000원 미만</option>
        <option :value="[15000, 20000]">1만 5천원 이상, 2만원 미만</option>
        <option :value="[20000, 25000]">2만원 이상, 2만 5천원 미만</option>
        <option :value="[25000, 30000]">2만 5천원 이상, 3만원 미만</option>
        <option :value="[30000, 100000]">3만원 이상</option>
      </select>
    </div>
    <div class="content">
      <div
        :style="{
          backgroundImage:
            'url(https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp)',
        }"
      ></div>
      <div
        :style="{
          backgroundImage:
            'url(https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp)',
        }"
      ></div>
      <div
        :style="{
          backgroundImage:
            'url(https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp)',
        }"
      ></div>
      <div
        :style="{
          backgroundImage:
            'url(https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp)',
        }"
      ></div>
    </div>
    <MainFooterVue style="margin-top: 6.4rem" />
  </div>
</template>

<style lang="scss" scoped>
.liquid {
  margin: 0 auto;
  max-width: 96rem;
  width: 100%;
  padding: 3.6rem 2.4rem;

  > .header {
    display: flex;
    align-items: center;
    gap: 5.2rem;

    > img {
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      width: 15.2rem;
      height: 15.2rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex: 1;

      > div {
        > .title {
          font-size: 3.2rem;
          width: fit-content;
        }

        > div {
          margin-top: 1.6rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;

          > p {
            font-size: 1.6rem;

            &.description {
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  > .filter {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2.8rem;
    gap: 1.6rem;

    > select {
      border: 0.1rem solid var(--border);
      background: none;
      border-radius: 100rem;
      padding: 0.4rem 1.2rem;
      font-size: 1.4rem;

      &:focus {
        outline: none;
      }

      &.selected {
        border-color: var(--accent);
        background-color: var(--accent);
        color: white;
        font-weight: 700;

        > option {
          background-color: var(--bg);
          color: var(--primary);
        }
      }
    }
  }

  > .content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    margin-top: 2.8rem;

    > div {
      aspect-ratio: 1 / 1;
    }
  }
}
</style>

<script setup lang="ts">
import MainFooterVue from "@/components/MainFooter.vue";
import { ref } from "vue";

const selectedTypeFilter = ref("");
const selectedFlavorFilter = ref("");
const selectedSugarFilter = ref("");
const selectedCoolFilter = ref("");
const selectedHitFilter = ref("");
const selectedNicotineFilter = ref("");
const selectedPriceFilter = ref("");
</script>
