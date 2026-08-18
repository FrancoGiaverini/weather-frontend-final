import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import HomeView from "../views/HomeView.vue";
import DetalleLugar from "../views/DetalleLugar.vue";
import LoginView from "../views/LoginView.vue";
import FavoritosView from "../views/FavoritosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lugar/:id",
      name: "detalle",
      component: DetalleLugar,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: FavoritosView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to) => {
if (to.meta.requiresAuth && !store.state.isAuthenticated) {
  return "/login";
}
});

export default router;