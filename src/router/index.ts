import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Logs from "@/views/Logs.vue";
import Tags from "@/views/Tags.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/logs",
    name: "logs",
    component: Logs,
  },
  {
    path: "/tags",
    name: "tags",
    component: Tags,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
