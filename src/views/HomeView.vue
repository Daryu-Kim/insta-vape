<template>
  <div class="home">
    <div class="content">
      <div class="notice">
        <button>
          <div class="img-box">
            <img
              src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
            />
          </div>
          <p>문의하기</p>
        </button>
        <button>
          <div class="img-box">
            <img
              src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
            />
          </div>
          <p>NOTICE</p>
        </button>
        <button>
          <div class="img-box">
            <img
              src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
            />
          </div>
          <p>BEST</p>
        </button>
        <button>
          <div class="img-box">
            <img
              src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
            />
          </div>
          <p>NEW</p>
        </button>
      </div>
      <div class="feed-box">
        <div class="feed">
          <div class="header">
            <div class="info">
              <img
                src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
              />
              <p>instavape_official</p>
              <p class="created">1시간</p>
            </div>
            <button>
              <MoreIconVue width="2.4" height="2.4" />
            </button>
          </div>
          <div class="content">
            <Swiper
              :slides-per-view="1"
              :modules="swiperModules"
              navigation
              pagination
            >
              <SwiperSlide>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="function">
            <div class="reaction">
              <button>
                <LikeIconVue width="2.8" height="2.8" />
              </button>
              <button>
                <CommentIconVue width="2.8" height="2.8" />
              </button>
              <button>
                <SendIconVue width="2.8" height="2.8" />
              </button>
            </div>
            <div class="bookmark">
              <button>
                <BookmarkIconVue width="2.8" height="2.8" />
              </button>
            </div>
          </div>
          <div class="like">
            <img
              src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
            />
            <p>좋아요 {{ 1 }}개</p>
          </div>
          <div class="description">
            <p class="user-name">instavape_official</p>
            <p class="user-description">테스트 상품이라는뎁쇼? 처리할까요?</p>
            <button>더 보기</button>
          </div>
          <div class="comment">
            <button>댓글 {{ 10 }}개 모두 보기</button>
            <div class="form">
              <input
                type="text"
                placeholder="댓글 달기..."
                v-model="inputModel"
              />
              <button class="upload" v-if="inputModel">게시</button>
            </div>
          </div>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="user">
      <div class="header">
        <img
          src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
        />
        <div>
          <p class="title">김원재 님 환영합니다!</p>
          <p class="description">
            현재 등급 : Family <br />
            현재 적립금 : 3,500원<br />
          </p>
        </div>
        <button>로그아웃</button>
      </div>
      <div class="content">
        <div>
          <p>회원님을 위한 추천</p>
          <button>모두 보기</button>
        </div>
        <ul>
          <li>
            <RouterLink to="/product/blank">
              <div>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
                <div>
                  <p class="title">헬베이프 젤로 맥스 입호흡 전자담배 기기</p>
                  <p class="description">
                    젤로의 후속작이 될 말 그대로 MAX의 기기!
                  </p>
                </div>
              </div>
              <button>바로가기</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product/blank">
              <div>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
                <div>
                  <p class="title">헬베이프 젤로 맥스 입호흡 전자담배 기기</p>
                  <p class="description">
                    젤로의 후속작이 될 말 그대로 MAX의 기기!
                  </p>
                </div>
              </div>
              <button>바로가기</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product/blank">
              <div>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
                <div>
                  <p class="title">헬베이프 젤로 맥스 입호흡 전자담배 기기</p>
                  <p class="description">
                    젤로의 후속작이 될 말 그대로 MAX의 기기!
                  </p>
                </div>
              </div>
              <button>바로가기</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product/blank">
              <div>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
                <div>
                  <p class="title">헬베이프 젤로 맥스 입호흡 전자담배 기기</p>
                  <p class="description">
                    젤로의 후속작이 될 말 그대로 MAX의 기기!
                  </p>
                </div>
              </div>
              <button>바로가기</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product/blank">
              <div>
                <img
                  src="https://i.namu.wiki/i/RXeCbPSe14RMuLDIw4NkoVZ-VUCMS0mcluoJfSJPPfdnyF_k9mLqpcgvzNvSzdcVYENN2Gs0lWOfjJFN3Kyx0ToRzBH7YJhIjyPk-JfnjyAsW5x09h1Q9DJJumtIfGo1F66T27DhxELLeAzZRnQjGA.webp"
                />
                <div>
                  <p class="title">헬베이프 젤로 맥스 입호흡 전자담배 기기</p>
                  <p class="description">
                    젤로의 후속작이 될 말 그대로 MAX의 기기!
                  </p>
                </div>
              </div>
              <button>바로가기</button>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer">
        <ul>
          <li><RouterLink to="/information">소개</RouterLink></li>
          <li><RouterLink to="/help">도움말</RouterLink></li>
          <li><RouterLink to="/recruit">채용 정보</RouterLink></li>
          <li><RouterLink to="/privacy">개인정보처리방침</RouterLink></li>
          <li><RouterLink to="/terms">약관</RouterLink></li>
          <li><RouterLink to="/location">위치</RouterLink></li>
          <li>INNOBITE Verified.</li>
        </ul>
        <p>© 2024 INSTAVAPE FROM INNOBITE</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  gap: 6.4rem;

  > .content {
    width: 100%;
    max-width: 64rem;
    height: 100%;
    padding: 2.4rem 0;

    > .notice {
      display: flex;
      justify-content: start;
      gap: 0.8rem;

      > button {
        border: none;
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 7.2rem;

        > .img-box {
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.2rem;
          border-radius: 100%;
          background: linear-gradient(
            55deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
          > img {
            padding: 0.2rem;
            aspect-ratio: 1 / 1;
            width: 6rem;
            border-radius: 100%;
            background: var(--bg);
          }
        }

        > p {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 1.2rem;
          margin-top: 0.4rem;
        }
      }
    }

    > .feed-box {
      width: 100%;
      max-width: 48rem;
      margin: auto;
      margin-top: 2.4rem;

      > .feed {
        > .header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          > .info {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            > img {
              border-radius: 50%;
              aspect-ratio: 1 / 1;
              width: 3.2rem;
            }
            > p {
              font-size: 1.4rem;
              font-weight: 700;
            }
            > .created {
              color: var(--secondary);
              font-weight: 400;
            }
          }
        }

        > .content {
          margin-top: 1.2rem;

          img {
            width: 100%;
            aspect-ratio: 1 / 1;
          }
        }

        > .function {
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          > .reaction {
            display: flex;
            align-items: center;
            gap: 1.6rem;
          }
        }

        > .like {
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;

          > img {
            width: 1.6rem;
            height: 1.6rem;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
          }

          > p {
            font-size: 1.4rem;
            font-weight: 700;
            width: fit-content;
          }
        }

        > .description {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 0.8rem;

          > p,
          button {
            font-size: 1.4rem;
          }

          > .user-name {
            font-weight: 700;
          }

          > .user-description {
            width: 20rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          > button {
            color: var(--secondary);
            font-weight: 500;
          }
        }

        > .comment {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 0.8rem;
          gap: 0.8rem;

          > button {
            color: var(--secondary);
            font-size: 1.4rem;
            font-weight: 500;
          }

          > div {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 0.8rem;

            > * {
              font-size: 1.4rem;
            }

            > input {
              flex: 1;
            }

            > .upload {
              font-weight: 700;
              color: var(--accent);
            }
          }
        }
      }

      > .border {
        width: 100%;
        margin: 1.6rem 0;
        height: 0.1rem;
        background-color: var(--border);
      }
    }
  }

  > .user {
    width: 100%;
    max-width: 40rem;
    height: 100%;
    padding: 3.6rem 1.6rem;

    > .header {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      > img {
        width: 4.8rem;
        height: 4.8rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
      }

      > div {
        flex: 1;
        text-align: start;

        > .title {
          font-weight: 700;
          font-size: 1.4rem;
        }

        > .description {
          margin-top: 0.4rem;
          font-size: 1.4rem;
          color: var(--secondary);
        }
      }

      > button {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--accent);
      }
    }

    > .content {
      margin-top: 3.6rem;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > p {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--secondary);
        }

        > button {
          font-size: 1.2rem;
          font-weight: 700;
        }
      }

      > ul {
        margin-top: 1.6rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        > li > a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;

          > div {
            display: flex;
            align-items: center;
            gap: 1.6rem;

            > img {
              width: 4.8rem;
              height: 4.8rem;
              aspect-ratio: 1 / 1;
              border-radius: 50%;
            }

            > div {
              text-align: start;
              > .title {
                font-size: 1.4rem;
                font-weight: 700;
                width: 24rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }

              > .description {
                margin-top: 0.4rem;
                font-size: 1.2rem;
                color: var(--secondary);
                width: 20rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }

          > button {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent);
          }
        }
      }
    }

    > .footer {
      margin-top: 3.6rem;
      > ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
        list-style: none;
        width: 36rem;

        > li:not(:first-child)::before {
          content: "·";
          margin-right: 0.4rem;
        }
      }

      > p {
        margin-top: 2.4rem;
        text-align: start;
      }
      * {
        font-size: 1.2rem;
        color: var(--secondary);
      }
    }
  }
}
</style>

<script setup lang="ts">
import MoreIconVue from "@/assets/icons/MoreIcon.vue";
import LikeIconVue from "@/assets/icons/LikeIcon.vue";
import CommentIconVue from "@/assets/icons/CommentIcon.vue";
import SendIconVue from "@/assets/icons/SendIcon.vue";
import BookmarkIconVue from "@/assets/icons/BookmarkIcon.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";

const swiperModules = [Navigation, Pagination];
const inputModel = ref("");
</script>
