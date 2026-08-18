
<template>
  <main class="container py-5">
    <h1>Mis lugares favoritos</h1>

    <div class="row g-4 mt-3">
      <div
        v-for="city in ciudadesFavoritas"
        :key="city.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="place-card p-4 text-center">
          <h2>{{ city.name }}</h2>

          <p>
            🌡 Lugar favorito
          </p>

          <router-link
            :to="`/lugar/${city.id}`"
            class="btn btn-primary"
          >
            Ver detalle
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import cities from "../data/cities";

export default {
  computed: {
    ciudadesFavoritas() {
      const favoritos =
        this.$store.state.usuario.preferencias.favoritos;

      return cities.filter((city) =>
        favoritos.includes(city.id)
      );
    },
  },
};
</script>