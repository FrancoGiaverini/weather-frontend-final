# Weather Frontend M6

## Descripción

Weather Frontend M6 es una aplicación web desarrollada con Vue.js que permite consultar información climática de distintas ciudades de Chile.

La aplicación funciona como una SPA, utilizando Vue Router para navegar entre el listado de ciudades y el detalle de cada lugar.

## Funcionalidades

- Visualización de 10 ciudades de Chile.
- Consulta del clima actual.
- Búsqueda de ciudades mediante `v-model`.
- Tarjetas reutilizables para mostrar cada ciudad.
- Vista detalle de cada ciudad.
- Pronóstico de 7 días.
- Estadísticas de la semana:
  - Temperatura mínima.
  - Temperatura máxima.
  - Temperatura promedio.
  - Días soleados.
  - Días con lluvia.
- Alertas climáticas.
- Navegación entre vistas mediante Vue Router.
- Mensajes de carga y errores.
- Diseño responsivo con Bootstrap.

## Vistas

### Home

Ruta:

`/`

Muestra el listado de ciudades, su información climática actual y permite buscar una ciudad.

### Detalle de lugar

Ruta:

`/lugar/:id`

Muestra información ampliada de la ciudad seleccionada, incluyendo clima actual, pronóstico de 7 días, estadísticas y alertas.

## Componentes

- `App.vue`: componente raíz de la aplicación.
- `HomeView.vue`: vista principal con la lista de ciudades.
- `DetalleLugar.vue`: vista con el detalle de una ciudad.
- `LugarCard.vue`: componente reutilizable para mostrar una ciudad.
- `PronosticoCard.vue`: componente reutilizable para mostrar un día del pronóstico.

## Vue Router

La aplicación utiliza Vue Router para la navegación interna.

Rutas configuradas:

- `/` → Home.
- `/lugar/:id` → Detalle de lugar.

## Tecnologías utilizadas

- Vue.js
- Vue Router
- JavaScript ES6+
- Bootstrap 5
- CSS
- SASS
- Fetch API
- Async/Await

## API utilizada

La aplicación utiliza Open-Meteo API:

https://api.open-meteo.com/v1/forecast

La API proporciona información sobre:

- Temperatura actual.
- Humedad.
- Velocidad del viento.
- Pronóstico diario.
- Códigos climáticos.

## Estructura del proyecto

```text
src/
├── assets/
│   └── main.css
│
├── components/
│   ├── LugarCard.vue
│   └── PronosticoCard.vue
│
├── data/
│   └── cities.js
│
├── router/
│   └── index.js
│
├── services/
│   └── apiClient.js
│
├── views/
│   ├── HomeView.vue
│   └── DetalleLugar.vue
│
├── App.vue
└── main.js

Cómo ejecutar el proyecto

Instalar las dependencias:
npm install

Ejecutar el proyecto:
npm run dev

Ruta al repositorio GIT

https://github.com/FrancoGiaverini/weather-frontend-m6.git