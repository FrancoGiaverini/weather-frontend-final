<template>
  <main class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4">

        <h1 class="text-center mb-4">Iniciar sesión</h1>

        <form @submit.prevent="iniciarSesion">

          <div class="mb-3">
            <label for="email" class="form-label">
              Correo
            </label>

            <input
              id="email"
              type="email"
              class="form-control"
              v-model="email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>

          <p v-if="error" class="text-danger">
            {{ error }}
          </p>

          <button type="submit" class="btn btn-primary w-100">
            Iniciar sesión
          </button>

        </form>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async iniciarSesion() {
      const resultado = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });

      if (resultado) {
        this.$router.push("/");
      } else {
        this.error = "Usuario o contraseña incorrectos";
      }
    },
  },
};
</script>