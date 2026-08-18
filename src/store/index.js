import { createStore } from "vuex";
import users from "../data/users";
import cities from "../data/cities";
import ApiClient from "../services/apiClient";

const usuarioGuardado = localStorage.getItem("usuario");

export default createStore({
  state: {
    usuario: usuarioGuardado ? JSON.parse(usuarioGuardado) : null,

    isAuthenticated: !!usuarioGuardado,

    cities,
    climas: {},
    selectedCity: null,
    selectedWeather: null,
    cargando: false,
    error: null,
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

    SET_CLIMA(state, { id, clima }) {
      state.climas[id] = clima;
    },

    SET_SELECTED_CITY(state, city) {
      state.selectedCity = city;
    },

    SET_SELECTED_WEATHER(state, weather) {
      state.selectedWeather = weather;
    },

    SET_CARGANDO(state, valor) {
      state.cargando = valor;
    },

    SET_ERROR(state, mensaje) {
      state.error = mensaje;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      const usuario = users.find(
        (user) => user.email === email && user.password === password,
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
    async cargarClimas({ commit, state }) {
      const apiClient = new ApiClient();

      commit("SET_CARGANDO", true);
      commit("SET_ERROR", null);

      try {
        for (const city of state.cities) {
          const clima = await apiClient.obtenerClima(
            city.latitude,
            city.longitude,
          );

          commit("SET_CLIMA", {
            id: city.id,
            clima,
          });
        }
      } catch (error) {
        console.error(error);
        commit("SET_ERROR", "No fue posible cargar los datos del clima.");
      } finally {
        commit("SET_CARGANDO", false);
      }
    },
    async cargarDetalle({ commit, state }, id) {
      const city = state.cities.find((city) => city.id === Number(id));

      if (!city) {
        commit("SET_SELECTED_CITY", null);
        commit("SET_SELECTED_WEATHER", null);
        commit("SET_ERROR", "No se encontró el lugar.");
        return;
      }

      commit("SET_SELECTED_CITY", city);
      commit("SET_SELECTED_WEATHER", null);
      commit("SET_CARGANDO", true);
      commit("SET_ERROR", null);

      const apiClient = new ApiClient();

      try {
        const clima = await apiClient.obtenerClima(
          city.latitude,
          city.longitude,
        );

        commit("SET_SELECTED_WEATHER", clima);
      } catch (error) {
        console.error(error);
        commit("SET_ERROR", "No fue posible cargar los datos del clima.");
      } finally {
        commit("SET_CARGANDO", false);
      }
    },
  },
});
