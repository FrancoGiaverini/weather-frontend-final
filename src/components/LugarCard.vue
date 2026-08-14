<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="place-card h-100 p-4 text-center">
      <div class="place-card__icon">🌤️</div>

      <h2 class="place-card__name">
        {{ city.name }}
      </h2>

      <p v-if="clima" class="place-card__temp">
        🌡 {{ clima.current.temperature_2m }}°C
      </p>

      <p v-if="clima">
        💧 {{ clima.current.relative_humidity_2m }}%
      </p>

      <p v-if="clima">
        💨 {{ clima.current.wind_speed_10m }} km/h
      </p>

      <router-link
        class="btn btn-primary"
        :to="`/lugar/${city.id}`"
      >
        Ver detalle
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
    clima: {
      type: Object,
      default: null,
    },
  },
};
</script>