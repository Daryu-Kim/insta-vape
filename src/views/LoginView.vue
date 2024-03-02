<template>
  <div class="login">
    <div class="inner">
      <div class="login-form">
        <router-link to="">
          <h1>Instavape</h1>
        </router-link>
        <div class="form">
          <div class="input">
            <label for="email" :class="{ selected: inputEmailModel }"
              >전화번호, 사용자 이름 또는 이메일</label
            >
            <input
              type="email"
              :class="{ selected: inputEmailModel }"
              v-model="inputEmailModel"
              id="email"
              required
            />
          </div>
          <div class="input">
            <label for="password" :class="{ selected: inputPasswordModel }"
              >비밀번호</label
            >
            <input
              type="password"
              :class="{ selected: inputPasswordModel }"
              v-model="inputPasswordModel"
              id="password"
              required
            />
          </div>
          <button class="login-btn">로그인</button>
          <div class="border">
            <div class="line"></div>
            <p>또는</p>
            <div class="line"></div>
          </div>
          <div class="social">
            <button>
              <DiscordIconVue width="2.8" height="2.8" />
            </button>
            <button>
              <FacebookIconVue width="2.8" height="2.8" />
            </button>
            <button>
              <GoogleIconVue width="2.8" height="2.8" />
            </button>
            <button>
              <KakaoIconVue width="2.8" height="2.8" />
            </button>
            <button>
              <XIconVue width="2.8" height="2.8" />
            </button>
          </div>
          <RouterLink to="/password-reset" class="find-pw">
            <p>비밀번호를 잊으셨나요?</p>
          </RouterLink>
        </div>
      </div>
      <div class="join-form">
        <p>계정이 없으신가요?</p>
        <RouterLink to="/join">
          <button>가입하기</button>
        </RouterLink>
      </div>
      <div class="download" v-if="deferredPrompt">
        <p>간편하게 설치하고 이용하세요.</p>
        <button @click="installPWA">
          <InstallIconVue width="12.8" height="4" />
        </button>
      </div>
    </div>
    <MainFooterVue />
  </div>
</template>

<style lang="scss" scoped>
.login {
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

    > .login-form {
      border: 0.1rem solid var(--border);
      width: 36rem;
      padding: 4rem;

      > a > h1 {
        font-family: "Billabong";
        font-size: 5.6rem;
      }

      > .form {
        margin-top: 2.4rem;
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

          &:nth-child(2) {
            margin-top: 0.6rem;
          }

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

        > .login-btn {
          width: 100%;
          height: 3.2rem;
          margin-top: 1.2rem;
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

        > .border {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          margin-top: 1.6rem;
          margin-bottom: 2.4rem;

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

        > .social {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.4rem;
          width: 100%;
        }

        > .find-pw > p {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: var(--accent);
        }
      }
    }

    > .join-form {
      border: 0.1rem solid var(--border);
      width: 36rem;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      > p {
        font-size: 1.4rem;
      }

      > a > button {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--accent);
      }
    }

    > .download {
      margin-top: 0.8rem;
      > p {
        font-size: 1.4rem;
      }
      > button {
        margin-top: 1.6rem;
      }
    }
  }
}
</style>

<script setup lang="ts">
import MainFooterVue from "@/components/MainFooter.vue";
import DiscordIconVue from "@/assets/icons/DiscordIcon.vue";
import FacebookIconVue from "@/assets/icons/FacebookIcon.vue";
import GoogleIconVue from "@/assets/icons/GoogleIcon.vue";
import KakaoIconVue from "@/assets/icons/KakaoIcon.vue";
import XIconVue from "@/assets/icons/XIcon.vue";
import InstallIconVue from "@/assets/icons/InstallIcon.vue";
import { Ref, onBeforeMount, ref } from "vue";
const inputEmailModel = ref("");
const inputPasswordModel = ref("");
const deferredPrompt: Ref<null | Event> = ref(null);

onBeforeMount(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt.value = e;
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt.value = null;
  });
});

async function installPWA() {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt();
  }
}
</script>
