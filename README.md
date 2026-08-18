# Weather Frontend Final

## Descripción

Weather Frontend Final es una aplicación web desarrollada con Vue.js que permite consultar información climática de distintas ciudades de Chile.

La aplicación funciona como una SPA (Single Page Application), utilizando Vue Router para la navegación entre vistas y Vuex para gestionar el estado global de la aplicación.

Esta versión corresponde a la versión final del proyecto y reúne las funcionalidades desarrolladas durante los módulos anteriores, incorporando consumo de una API real, autenticación de usuarios, favoritos personalizados, pronóstico, estadísticas semanales y alertas climáticas.

## Repositorio

Repositorio público de GitHub:

https://github.com/FrancoGiaverini/weather-frontend-final.git

## Funcionalidades principales

* Visualización de 10 ciudades de Chile.
* Consulta del clima actual mediante una API externa.
* Búsqueda de ciudades mediante `v-model`.
* Vista detalle de cada ciudad.
* Pronóstico de 7 días.
* Estadísticas climáticas semanales.
* Temperatura mínima de la semana.
* Temperatura máxima de la semana.
* Temperatura promedio.
* Conteo de días soleados.
* Conteo de días con lluvia.
* Generación de alertas climáticas mediante reglas simples.
* Mensaje de carga mientras se consultan los datos.
* Manejo básico de errores al consultar la API.
* Inicio de sesión de usuarios.
* Validación de credenciales.
* Mensaje de error cuando las credenciales son incorrectas.
* Estado global mediante Vuex.
* Visualización del usuario autenticado.
* Cierre de sesión.
* Lugares favoritos personalizados según cada usuario.
* Ruta protegida para acceder a favoritos.
* Persistencia de sesión mediante `localStorage`.
* Navegación interna mediante Vue Router.
* Diseño responsivo utilizando Bootstrap.

## Usuarios de prueba

La aplicación utiliza usuarios simulados definidos en `src/data/users.js`.

### Usuario 1

Correo:

`franco@email.com`

Contraseña:

`123456`

Favoritos:

* Santiago
* Valparaíso
* Concepción

### Usuario 2

Correo:

`juan@email.com`

Contraseña:

`123456`

Favoritos:

* Temuco
* Arica

Los favoritos están asociados a las preferencias de cada usuario.

## Vistas y rutas

### Home

Ruta:

`/`

Muestra el listado de ciudades, información climática actual y permite buscar una ciudad.

### Detalle de lugar

Ruta:

`/lugar/:id`

Muestra información ampliada de la ciudad seleccionada:

* Temperatura actual.
* Humedad.
* Velocidad del viento.
* Pronóstico de 7 días.
* Estadísticas semanales.
* Alertas climáticas.

### Login

Ruta:

`/login`

Permite ingresar las credenciales de un usuario.

Si las credenciales son correctas, el usuario se almacena en Vuex y se inicia la sesión.

Si las credenciales son incorrectas, se muestra un mensaje de error.

### Favoritos

Ruta:

`/favoritos`

Muestra los lugares favoritos correspondientes al usuario autenticado.

Esta ruta está protegida mediante Vue Router. Si un usuario no está autenticado e intenta acceder a `/favoritos`, es redirigido automáticamente a `/login`.

## Vue Router

Vue Router se utiliza para realizar la navegación interna de la aplicación sin recargar la página.

Rutas principales:

* `/` → Home.
* `/lugar/:id` → Detalle de lugar.
* `/login` → Inicio de sesión.
* `/favoritos` → Lugares favoritos.

La ruta `/favoritos` utiliza un guard de navegación para comprobar si existe una sesión activa.

## Vuex

Vuex se utiliza para centralizar el estado global de la aplicación.

El store administra:

* Usuario autenticado.
* Estado de autenticación.
* Lista de ciudades.
* Información climática de las ciudades.
* Estado de carga.
* Mensajes de error.

### Estado principal

* `usuario`: información del usuario autenticado.
* `isAuthenticated`: indica si existe una sesión activa.
* `cities`: lista de ciudades disponibles.
* `climas`: información climática obtenida desde la API.
* `cargando`: indica si existen consultas a la API en proceso.
* `error`: almacena mensajes de error relacionados con la consulta de datos.

### Mutations

* `LOGIN`: guarda el usuario e inicia la sesión.
* `LOGOUT`: elimina el usuario y cierra la sesión.
* `SET_CLIMA`: almacena los datos climáticos de una ciudad.
* `SET_CARGANDO`: actualiza el estado de carga.
* `SET_ERROR`: actualiza el mensaje de error.

### Actions

* `login`: comprueba las credenciales del usuario.
* `logout`: cierra la sesión.
* `cargarClimas`: consulta la API y almacena los datos climáticos en Vuex.

## Consumo de API

La aplicación utiliza Open-Meteo API para obtener información climática en tiempo real.

Endpoint:

https://api.open-meteo.com/v1/forecast

Los datos obtenidos incluyen:

* Temperatura actual.
* Humedad.
* Velocidad del viento.
* Temperaturas mínimas y máximas.
* Pronóstico diario.
* Códigos climáticos.

Los datos se obtienen mediante el servicio ubicado en:

`src/services/apiClient.js`

La aplicación utiliza `fetch` y programación asíncrona con `async/await`.

## Estadísticas climáticas

La vista de detalle calcula estadísticas a partir de los datos obtenidos desde la API.

Se muestran:

* Temperatura mínima de la semana.
* Temperatura máxima de la semana.
* Temperatura promedio.
* Cantidad de días soleados.
* Cantidad de días con lluvia.

Las estadísticas se calculan dinámicamente a partir del pronóstico obtenido desde Open-Meteo.

## Alertas climáticas

La aplicación genera alertas mediante reglas simples.

Actualmente contempla:

* **Alerta de calor:** cuando la temperatura promedio semanal supera los 30 °C.
* **Semana lluviosa:** cuando existen al menos 3 días con lluvia.
* **Sin alertas climáticas:** cuando ninguna de las condiciones anteriores se cumple.

Las alertas se generan dinámicamente utilizando los datos obtenidos desde la API.

## Persistencia de sesión

La información básica del usuario autenticado se almacena en `localStorage`.

Esto permite conservar la sesión cuando la aplicación se vuelve a cargar.

Al cerrar sesión:

* Se elimina el usuario de Vuex.
* Se elimina la información almacenada en `localStorage`.
* El usuario es redirigido a `/login`.

## Personalización por usuario

Cada usuario posee sus propias preferencias y lugares favoritos.

Por ejemplo:

**Franco**

* Santiago
* Valparaíso
* Concepción

**Juan**

* Temuco
* Arica

La vista de favoritos obtiene la información correspondiente al usuario autenticado.

## Manejo de estados

La aplicación contempla estados básicos para mejorar la experiencia de usuario:

### Carga

Mientras se consultan los datos climáticos se muestra:

`Cargando datos del clima...`

### Error

Si ocurre un problema al consultar la API se muestra un mensaje indicando que no fue posible cargar los datos del clima.

### Búsqueda sin resultados

Si la búsqueda no encuentra ninguna ciudad, se muestra un mensaje indicando que no se encontró el lugar.

## Tecnologías utilizadas

* Vue.js 3
* Vue Router 4
* Vuex 4
* JavaScript ES6+
* Bootstrap 5
* CSS
* SASS
* Fetch API
* Async/Await
* Vite
* localStorage

## Estructura del proyecto

```text
src/
├── assets/
│   └── main.css
│
├── components/
│   ├── LugarCard.vue
│   ├── PronosticoCard.vue
│   └── ...
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
```

## Requisitos

Para ejecutar el proyecto localmente se necesita:

* Node.js
* npm
* Git
* Un navegador web moderno

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/FrancoGiaverini/weather-frontend-final.git
```

Ingresar a la carpeta:

```bash
cd weather-frontend-final
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir en el navegador la dirección indicada por Vite, normalmente:

```text
http://localhost:5173/
```

## Variables de entorno

El proyecto utiliza Open-Meteo, por lo que no requiere una API Key para realizar las consultas utilizadas por la aplicación.

No es necesario crear un archivo `.env` para ejecutar el proyecto.

## Flujo principal de la aplicación

```text
Home
  ↓
Seleccionar ciudad
  ↓
Detalle de ciudad
  ↓
Clima actual + Pronóstico
  ↓
Estadísticas + Alertas
```

El usuario también puede:

```text
Login
  ↓
Home
  ↓
Favoritos
  ↓
Cerrar sesión
```

## Proyecto de portafolio

Este proyecto corresponde a la versión final de la aplicación de clima desarrollada durante el proceso de aprendizaje de Front-End.

Integra:

* Desarrollo de interfaces con Vue.js.
* Componentización.
* SPA.
* Vue Router.
* Vuex.
* Consumo de API externa.
* Programación asíncrona.
* Manejo de estados.
* Autenticación básica.
* Rutas protegidas.
* Persistencia mediante localStorage.
* Cálculo de estadísticas.
* Generación de alertas.
* Diseño responsivo.

## Autor

Franco Giaverini

© 2026
