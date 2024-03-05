<template>
  <div class="device">
    <div class="header">
      <img
        src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
      />
      <div>
        <div>
          <p class="title">#기기_둘러보기</p>
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
        <option value="">기기 종류</option>
        <option value="mtl-device">입호흡 기기</option>
        <option value="dtl-device">폐호흡 기기</option>
        <option value="aio-device">입/폐호흡 겸용 기기</option>
        <option value="disposable-device">일회용 기기</option>
      </select>
      <select
        v-model="selectedManuFilter"
        :class="{ selected: selectedManuFilter !== '' }"
      >
        <option value="">제조사</option>
        <option value="uwell">유웰</option>
        <option value="vaporesso">베이포레소</option>
        <option value="hellvape">헬베이프</option>
        <option value="voopoo">부푸</option>
      </select>
      <select
        v-model="selectedInhaleFilter"
        :class="{ selected: selectedInhaleFilter !== '' }"
      >
        <option value="">흡입 방식</option>
        <option value="auto">오토 드로우</option>
        <option value="button">버튼 파이어</option>
      </select>
      <select
        v-model="selectedBatteryFilter"
        :class="{ selected: selectedBatteryFilter !== '' }"
      >
        <option value="">배터리 방식</option>
        <option value="internal">배터리 내장형</option>
        <option value="external-1">배터리 1발식</option>
        <option value="external-2">배터리 2발식</option>
        <option value="external-3">배터리 3발식 이상</option>
      </select>
      <select
        v-model="selectedPriceFilter"
        :class="{ selected: selectedPriceFilter !== '' }"
      >
        <option value="">가격대</option>
        <option :value="[0, 15000]">15,000원 이하</option>
        <option :value="[15000, 30000]">1만 5천원 초과, 3만원 이하</option>
        <option :value="[30000, 50000]">3만원 초과, 5만원 이하</option>
        <option :value="[50000, 75000]">5만원 초과, 7만 5천원 이하</option>
        <option :value="[75000, 100000]">7만 5천원 초과, 10만원 이하</option>
        <option :value="[100000, 9999999]">10만원 초과</option>
      </select>
    </div>
    <div class="content">
      <div
        :style="{
          backgroundImage:
            'url(https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp)',
        }"
      >
        <div>
          <p class="title">[헬베이프] 젤로 맥스 입호흡 전자담배 기기</p>
          <div>
            <div>
              <p>계좌이체가</p>
              <p class="price">53,000원</p>
            </div>
            <div>
              <p>카드가</p>
              <p class="price">56,000원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooterVue style="margin-top: 6.4rem" />
  </div>
</template>

<style lang="scss" scoped>
.device {
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
      cursor: pointer;

      > div {
        opacity: 0;
        pointer-events: none;
        background-color: rgba($color: #000000, $alpha: 0.75);
        width: 100%;
        height: 100%;
        padding: 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > .title {
          font-size: 2.4rem;
          font-weight: 700;
          color: white;
          text-align: start;
          word-break: keep-all;
        }

        > div {
          > div {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            > p {
              font-size: 1.6rem;
              color: white;

              &.price {
                font-size: 2.4rem;
                color: var(--accent);
                font-weight: 700;
              }
            }
          }
        }
      }

      &:hover {
        > div {
          opacity: 1;
          pointer-events: unset;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import MainFooterVue from "@/components/MainFooter.vue";
import { ref } from "vue";

const selectedTypeFilter = ref("");
const selectedManuFilter = ref("");
const selectedInhaleFilter = ref("");
const selectedBatteryFilter = ref("");
const selectedPriceFilter = ref("");
</script>
