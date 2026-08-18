<template>
  <header class="bg-primary text-white p-3">
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="h4 mb-0">Weather App</h1>

      <div v-if="$store.state.isAuthenticated">
        <router-link to="/" class="btn btn-light btn-sm me-2">
          Inicio
        </router-link>

        <router-link to="/favoritos" class="btn btn-light btn-sm me-3">
          Mis favoritos
        </router-link>

        <span class="me-3"> Hola, {{ $store.state.usuario.nombre }} </span>

        <button class="btn btn-light btn-sm" @click="cerrarSesion">
          Cerrar sesión
        </button>
      </div>

      <router-link v-else to="/login" class="btn btn-light btn-sm">
        Iniciar sesión
      </router-link>
    </div>
  </header>

  <router-view />
</template>

<script>
export default {
  methods: {
    cerrarSesion() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
