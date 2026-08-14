class ApiClient {
  constructor() {
    this.baseUrl = "https://api.open-meteo.com/v1/forecast";
  }

  async obtenerClima(lat, lon) {
    const respuesta = await fetch(
      `${this.baseUrl}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=7&timezone=auto`
    );

    if (!respuesta.ok) {
      throw new Error("No fue posible obtener los datos del clima.");
    }

    return await respuesta.json();
  }
}

export default ApiClient;