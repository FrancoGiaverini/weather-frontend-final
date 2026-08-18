<template>
  <header class="weather-app__header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          🌤 Weather Frontend
        </router-link>

        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/"> Inicio </router-link>
        </div>
      </div>
    </nav>
  </header>

  <main class="weather-app__content container py-5">
    <div v-if="cargando" class="text-center">
      <p>Cargando datos del clima...</p>
    </div>

    <div v-if="error" class="text-danger text-center">
      <p>{{ error }}</p>
    </div>

    <div v-if="city && clima">
      <section class="text-center mb-5">
        <h1>Clima en {{ city.name }}</h1>

        <p class="display-6">🌡 {{ clima.current.temperature_2m }}°C</p>

        <p>💧 Humedad: {{ clima.current.relative_humidity_2m }}%</p>

        <p>💨 Viento: {{ clima.current.wind_speed_10m }} km/h</p>
      </section>

      <section class="mb-5">
        <h2 class="text-center mb-4">Pronóstico de 7 días</h2>

        <div class="row g-4">
          <div class="row g-4">
            <PronosticoCard
              v-for="(fecha, index) in clima.daily.time"
              :key="fecha"
              :fecha="fecha"
              :minima="clima.daily.temperature_2m_min[index]"
              :maxima="clima.daily.temperature_2m_max[index]"
              :codigo="clima.daily.weather_code[index]"
            />
          </div>
        </div>
      </section>

      <section v-if="estadisticas" class="mb-5">
        <div class="card">
          <div class="card-body text-center">
            <h2>Estadísticas de la semana</h2>

            <p>
              Temperatura mínima:
              {{ estadisticas.temperaturaMinima }}°C
            </p>

            <p>
              Temperatura máxima:
              {{ estadisticas.temperaturaMaxima }}°C
            </p>

            <p>
              Temperatura promedio:
              {{ estadisticas.promedio }}°C
            </p>

            <p>
              Días soleados:
              {{ estadisticas.diasSoleados }}
            </p>

            <p>
              Días con lluvia:
              {{ estadisticas.diasLluvia }}
            </p>
          </div>
        </div>
      </section>

      <section v-if="alerta" class="text-center mb-5">
        <div class="alert alert-info">
          <h2>Alerta climática</h2>
          <p>{{ alerta }}</p>
        </div>
      </section>

      <div class="text-center">
        <router-link to="/" class="btn btn-primary">
          Volver al Home
        </router-link>
      </div>
    </div>
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
import PronosticoCard from "../components/PronosticoCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    PronosticoCard,
  },

  computed: {
    ...mapState({
      city: "selectedCity",
      clima: "selectedWeather",
      cargando: "cargando",
      error: "error",
    }),

    estadisticas() {
      if (!this.clima) {
        return null;
      }

      const temperaturasMinimas = this.clima.daily.temperature_2m_min;

      const temperaturasMaximas = this.clima.daily.temperature_2m_max;

      const temperaturaMinima = Math.min(...temperaturasMinimas);

      const temperaturaMaxima = Math.max(...temperaturasMaximas);

      const suma = temperaturasMaximas.reduce(
        (total, temperatura) => total + temperatura,
        0,
      );

      const promedio = (suma / temperaturasMaximas.length).toFixed(1);

      let diasSoleados = 0;
      let diasLluvia = 0;

      this.clima.daily.weather_code.forEach((codigo) => {
        if (codigo <= 1) {
          diasSoleados++;
        }

        if (codigo >= 51 && codigo <= 67) {
          diasLluvia++;
        }
      });

      return {
        temperaturaMinima,
        temperaturaMaxima,
        promedio,
        diasSoleados,
        diasLluvia,
      };
    },
    alerta() {
      if (!this.estadisticas) {
        return null;
      }

      if (this.estadisticas.promedio > 30) {
        return "🔥 Alerta de calor";
      }

      if (this.estadisticas.diasLluvia >= 3) {
        return "🌧 Semana lluviosa";
      }

      return "✅ Sin alertas climáticas";
    },
  },

  async mounted() {
    const id = Number(this.$route.params.id);

    await this.$store.dispatch("cargarDetalle", id);
  },
};
</script>
