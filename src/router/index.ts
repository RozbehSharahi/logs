import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Logs from "@/views/Logs.vue";
import Tags from "@/views/Tags.vue";
import Statistics from "@/views/Statistics.vue";

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
  {
    path: "/statistics",
    name: "statistics",
    component: Statistics,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
