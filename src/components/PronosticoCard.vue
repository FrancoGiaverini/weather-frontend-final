<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="place-card h-100 p-4 text-center">
      <h3>{{ fecha }}</h3>

      <p>
        Mínima: {{ minima }}°C
      </p>

      <p>
        Máxima: {{ maxima }}°C
      </p>

      <p>
        Código del clima: {{ codigo }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fecha: String,
    minima: Number,
    maxima: Number,
    codigo: Number,
  },
};
</script>