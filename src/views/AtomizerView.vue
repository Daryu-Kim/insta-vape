<template>
  <div class="atomizer">
    <div class="header">
      <img
        src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
      />
      <div>
        <div>
          <p class="title">#무화기_둘러보기</p>
          <div>
            <p>상품 총 갯수</p>
            <p class="description">81.4만</p>
          </div>
        </div>
      </div>
    </div>
    <div class="filter">
      <select
        v-model="selectedType1Filter"
        :class="{ selected: selectedType1Filter !== '' }"
      >
        <option value="">무화기 종류</option>
        <option value="pod">코일 내장팟</option>
        <option value="empty-pod">코일 미포함 공팟</option>
        <option value="tank">탱크</option>
        <option value="rebuild">리빌드</option>
      </select>
      <select
        v-model="selectedManuFilter"
        :class="{ selected: selectedManuFilter !== '' }"
      >
        <option value="">제조사</option>
        <option value="geekvape">긱베이프</option>
        <option value="hellvape">헬베이프</option>
        <option value="uwell">유웰</option>
        <option value="vaporesso">베이포레소</option>
        <option value="vaptio">뱁티오</option>
        <option value="voopoo">부푸</option>
      </select>
      <select
        v-model="selectedType2Filter"
        :class="{ selected: selectedType2Filter !== '' }"
      >
        <option value="">코일 종류</option>
        <option value="mtl-atomizer">입호흡 전용</option>
        <option value="dtl-atomizer">폐호흡 전용</option>
        <option value="aio-atomizer">입/폐호흡 겸용</option>
      </select>
      <select
        v-model="selectAirFilter"
        :class="{ selected: selectAirFilter !== '' }"
      >
        <option value="">에어홀 조절</option>
        <option :value="true">에어홀 조절 가능</option>
        <option :value="false">에어홀 조절 불가</option>
      </select>
      <select
        v-model="selectedPriceFilter"
        :class="{ selected: selectedPriceFilter !== '' }"
      >
        <option value="">가격대</option>
        <option :value="[0, 15000]">15,000원 미만</option>
        <option :value="[15000, 20000]">1만 5천원 이상, 2만원 미만</option>
        <option :value="[20000, 30000]">2만원 이상, 3만원 미만</option>
        <option :value="[30000, 50000]">3만원 이상, 5만원 미만</option>
        <option :value="[50000, 9999999]">5만원 이상</option>
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
.atomizer {
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

const selectedType1Filter = ref("");
const selectedManuFilter = ref("");
const selectedType2Filter = ref("");
const selectAirFilter = ref("");
const selectedPriceFilter = ref("");
</script>
