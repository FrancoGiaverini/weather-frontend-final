Weather Frontend M7
Descripción

Weather Frontend M7 es una aplicación web desarrollada con Vue.js que permite consultar información climática de distintas ciudades de Chile.

La aplicación funciona como una SPA (Single Page Application), utilizando Vue Router para la navegación entre las distintas vistas y Vuex para gestionar el estado global de autenticación y la información del usuario.

En esta versión se incorpora un sistema básico de usuarios con inicio de sesión, cierre de sesión, rutas protegidas y lugares favoritos personalizados para cada usuario.

Funcionalidades
Visualización de 10 ciudades de Chile.
Consulta del clima actual.
Búsqueda de ciudades mediante v-model.
Vista detalle de cada ciudad.
Pronóstico de 7 días.
Estadísticas de la semana:
Temperatura mínima.
Temperatura máxima.
Temperatura promedio.
Días soleados.
Días con lluvia.
Alertas climáticas.
Navegación entre vistas mediante Vue Router.
Inicio de sesión de usuarios.
Validación de credenciales.
Mensaje de error cuando las credenciales son incorrectas.
Estado global de autenticación mediante Vuex.
Visualización del nombre del usuario autenticado.
Cierre de sesión.
Lugares favoritos personalizados según el usuario.
Ruta protegida para acceder a los lugares favoritos.
Persistencia de la sesión mediante localStorage.
Diseño responsivo con Bootstrap.
Usuarios de prueba

La aplicación utiliza usuarios simulados definidos en el proyecto.

Usuario 1
Correo:
franco@email.com
Contraseña:
123456

Favoritos:
Santiago
Valparaíso
Concepción


Usuario 2
Correo:
juan@email.com
Contraseña:
123456

Favoritos:
Temuco
Arica

Los lugares favoritos se almacenan dentro de las preferencias de cada usuario y son obtenidos de Vuex.

Vistas
Home
Ruta:
/
Muestra el listado de ciudades, su información climática actual y permite buscar una ciudad.

Detalle de lugar
Ruta:
/lugar/:id
Muestra información de la ciudad seleccionada, incluyendo clima actual, pronóstico de 7 días, estadísticas y alertas.

Login
Ruta:
/login
Permite al usuario ingresar su correo y contraseña.

Si las credenciales son correctas, el usuario se almacena en Vuex y es dirigido al Home.

Si las credenciales son incorrectas, se muestra un mensaje de error.

Favoritos
Ruta:
/favoritos
Muestra los lugares favoritos correspondientes al usuario autenticado.

Esta es una ruta protegida. Si un usuario no ha iniciado sesión e intenta acceder a esta ruta, es redirigido automáticamente a /login.

Vue Router
La aplicación utiliza Vue Router para realizar la navegación interna sin recargar la página.

Rutas configuradas:
/ → Home.
/lugar/:id → Detalle de lugar.
/login → Inicio de sesión.
/favoritos → Lugares favoritos del usuario autenticado.

La ruta /favoritos utiliza un guard de navegación para comprobar si el usuario está autenticado.

Vuex

Vuex se utiliza para gestionar el estado global de autenticación.

El store contiene:

usuario: información del usuario autenticado.
isAuthenticated: indica si existe una sesión activa.
Mutations
LOGIN: guarda el usuario e inicia la sesión.
LOGOUT: elimina el usuario y cierra la sesión.
Actions
login: comprueba las credenciales del usuario.
logout: cierre de sesión.

Los datos del usuario contienen sus preferencias y lugares favoritos.

Personalización por usuario
Cada usuario posee una lista diferente de lugares favoritos.

Por ejemplo:
Franco favoritos son:

Santiago
Valparaíso
Concepción

Juan tiene como favoritos:

Temuco
Arica

La vista de favoritos obtiene esta información desde Vuex, por lo que el contenido cambia dependiendo del usuario.

Persistencia de sesión
La información básica del usuario autenticado se almacena en localStorage.
Esto permite conservar la sesión cuando la aplicación se vuelve a cargar.
Al cerrar sesión, la información almacenada en localStorage se elimina.

Tecnologías utilizadas
Vue.js 3
Vue Router 4
Vuex 4
JavaScript ES6+
Bootstrap 5
CSS
SASS
Fetch API
Async/Await
Vite
localStorage
API utilizada

La aplicación utiliza Open-Meteo API:

https://api.open-meteo.com/v1/forecast

La API proporciona información sobre:

Temperatura actual.
Humedad.
Velocidad del viento.
Pronóstico diario.
Códigos climáticos.

Estructura del proyecto
src/
├── assets/
│   └── main.css
│
├── components/
│   ├── HelloWorld.vue
│   ├── icons/
│   ├── TheWelcome.vue
│   └── WelcomeItem.vue
│
├── data/
│   ├── cities.js
│   └── users.js
│
├── router/
│   └── index.js
│
├── services/
│   └── apiClient.js
│
├── store/
│   └── index.js
│
├── views/
│   ├── HomeView.vue
│   ├── DetalleLugar.vue
│   ├── LoginView.vue
│   └── FavoritosView.vue
│
├── App.vue
└── main.js

Cómo ejecutar el proyecto
1. Instalar las dependencias
npm install
2. Ejecutar el proyecto
npm run dev
3. Abrir la aplicación

Repositorio GitHub

https://github.com/FrancoGiaverini/weather-frontend-m7.git