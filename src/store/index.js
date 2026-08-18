import { createStore } from "vuex";
import users from "../data/users";

const usuarioGuardado = localStorage.getItem("usuario");

export default createStore({
  state: {
    usuario: usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : null,

    isAuthenticated: !!usuarioGuardado,
  },

  mutations: {
    LOGIN(state, usuario) {
      state.usuario = usuario;
      state.isAuthenticated = true;

      localStorage.setItem("usuario", JSON.stringify(usuario));
    },

    LOGOUT(state) {
      state.usuario = null;
      state.isAuthenticated = false;

      localStorage.removeItem("usuario");
    },
  },

  actions: {
    login({ commit }, { email, password }) {
      const usuario = users.find(
        (user) =>
          user.email === email &&
          user.password === password
      );

      if (!usuario) {
        return false;
      }

      commit("LOGIN", usuario);

      return true;
    },

    logout({ commit }) {
      commit("LOGOUT");
    },
  },
});