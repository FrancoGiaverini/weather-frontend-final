<template>
  <header class="weather-app__header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          🌤 Weather Frontend
        </router-link>

        <div class="navbar-nav ms-auto">
          <router-link class="nav-link active" to="/"> Inicio </router-link>
        </div>
      </div>
    </nav>
  </header>

  <main class="weather-app__content container py-5">
    <section class="weather-app__hero text-center mb-5">
      <h1 class="display-5 fw-bold">Clima en Chile</h1>

      <p class="lead">
        Consulta las condiciones climáticas de distintas ciudades del país.
      </p>
    </section>

    <section class="weather-app__search mb-5">
      <form @submit.prevent>
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <input
              type="text"
              class="form-control"
              v-model="busqueda"
              placeholder="Buscar ciudad..."
            />
          </div>
        </div>
      </form>
    </section>

    <p v-if="cargando" class="text-center">Cargando datos del clima...</p>

    <p v-if="error" class="text-danger text-center">
      {{ error }}
    </p>

    <p v-if="!cargando && ciudadesFiltradas.length === 0" class="text-center">
      No se encontró el lugar.
    </p>

    <section class="weather-app__results">
      <div class="weather-app__cities row g-4">
        <LugarCard
  v-for="city in ciudadesFiltradas"
  :key="city.id"
  :city="city"
  :clima="climas[city.id]"
/>
      </div>
    </section>
  </main>

  <footer class="weather-app__footer bg-dark text-white text-center py-4">
    <div class="container">
      <p class="mb-1">Weather Frontend</p>
      <p class="mb-1">Aplicación de consulta climática de ciudades chilenas</p>
      <p class="mb-0">Franco Giaverini © 2026</p>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import LugarCard from "../components/LugarCard.vue";  

export default {
 data() {
  return {
    busqueda: "",
  };
},
  components: {
  LugarCard,
},
computed: {
  ...mapState(["cities", "climas", "cargando", "error"]),

  ciudadesFiltradas() {
    return this.cities.filter((city) =>
      city.name.toLowerCase().includes(this.busqueda.toLowerCase()),
    );
  },
},
mounted() {
  this.$store.dispatch("cargarClimas");
},
};
</script>
