import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";
import PasswordResetView from "@/views/PasswordResetView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import BeginnerView from "@/views/BeginnerView.vue";
import SubscribeView from "@/views/SubscribeView.vue";
import DeviceView from "@/views/DeviceView.vue";
import LiquidView from "@/views/LiquidView.vue";
import AtomizerView from "@/views/AtomizerView.vue";
import CoilView from "@/views/CoilView.vue";
import AccesoryView from "@/views/AccesoryView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/join",
    name: "join",
    component: JoinView,
  },
  {
    path: "/password-reset",
    name: "password-reset",
    component: PasswordResetView,
  },
  {
    path: "/beginner",
    name: "beginner",
    component: BeginnerView,
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: SubscribeView,
  },
  {
    path: "/device",
    name: "device",
    component: DeviceView,
  },
  {
    path: "/liquid",
    name: "liquid",
    component: LiquidView,
  },
  {
    path: "/atomizer",
    name: "atomizer",
    component: AtomizerView,
  },
  {
    path: "/coil",
    name: "coil",
    component: CoilView,
  },
  {
    path: "/accesory",
    name: "accesory",
    component: AccesoryView,
  },
  {
    path: "/notFound",
    name: "notFound",
    component: NotFoundView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
