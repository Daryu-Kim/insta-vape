<template>
  <div class="password-reset">
    <div class="inner">
      <div class="reset-form">
        <router-link to="">
          <h1>Instavape</h1>
        </router-link>
        <p class="title">로그인에 문제가 있나요?</p>
        <p class="description">
          이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시
          엑세스할 수 있는 링크를 보내드립니다.
        </p>
        <div class="form">
          <div class="input">
            <label for="email" :class="{ selected: inputEmailModel }"
              >휴대폰 번호 또는 이메일 주소</label
            >
            <input
              type="email"
              :class="{ selected: inputEmailModel }"
              v-model="inputEmailModel"
              id="email"
              required
            />
          </div>
          <button class="link-btn">로그인 링크 보내기</button>
          <button class="error">비밀번호를 재설정할 수 없나요?</button>
        </div>
        <div class="border">
          <div class="line"></div>
          <p>또는</p>
          <div class="line"></div>
        </div>
        <RouterLink to="/join">
          <p>새 계정 만들기</p>
        </RouterLink>
      </div>
      <div class="login-form">
        <RouterLink to="/login">
          <button>로그인으로 돌아가기</button>
        </RouterLink>
      </div>
    </div>
    <MainFooterVue />
  </div>
</template>

<style lang="scss" scoped>
.password-reset {
  padding: 5.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 3.6rem;

  > .inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.8rem;

    > .reset-form {
      border: 0.1rem solid var(--border);
      width: 36rem;
      padding: 4rem;

      > a > h1 {
        font-family: "Billabong";
        font-size: 5.6rem;
      }

      > .title {
        font-size: 1.6rem;
        font-weight: 700;
        margin-top: 1.6rem;
      }

      > .description {
        font-size: 1.4rem;
        color: var(--secondary);
        margin-top: 1.2rem;
        word-break: keep-all;
      }

      > .border {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-top: 2rem;

        > .line {
          flex: 1;
          height: 0.1rem;
          background-color: var(--border);
        }

        > p {
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--secondary);
        }
      }

      > .form {
        margin-top: 2rem;
        > .input {
          width: 100%;
          background-color: var(--form-bg);
          border: 0.1rem solid var(--border);
          position: relative;
          height: 4rem;
          border-radius: 0.4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          > input {
            width: 100%;
            font-size: 1.2rem;
            padding: 0 0.8rem;

            &.selected {
              margin-top: 0.2rem;
              font-size: 1.2rem;
            }
          }

          > label {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 0 0.8rem;
            width: 100%;
            font-size: 1.2rem;
            text-align: start;
            color: var(--secondary);
            cursor: text;

            &.selected {
              font-size: 1rem;
              position: unset;
              top: unset;
              transform: unset;
            }
          }
        }

        > .error {
          margin-top: 1.6rem;
          font-size: 1.2rem;
          color: var(--accent);
        }

        > .link-btn {
          width: 100%;
          height: 3.2rem;
          margin-top: 1.6rem;
          background-color: var(--accent);
          color: white;
          border-radius: 0.8rem;
          font-weight: 700;
          font-size: 1.4rem;

          &:disabled {
            cursor: default;
            opacity: 0.75;
          }
        }
      }

      > a > p {
        margin-top: 1.6rem;
        font-weight: 700;
        font-size: 1.4rem;
      }
    }

    > .login-form {
      border: 0.1rem solid var(--border);
      width: 36rem;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      > a > button {
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
import { ref } from "vue";
const inputEmailModel = ref("");
</script>
