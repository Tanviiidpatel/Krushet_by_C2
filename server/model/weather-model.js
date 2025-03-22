const weatherParams = {
	latitude: [22, 22.6547],
	longitude: [79, 88.4467],
	daily: ["sunshine_duration", "rain_sum", "temperature_2m_max", "uv_index_max", "sunrise", "wind_speed_10m_max", "temperature_2m_min", 
        "sunset", "uv_index_clear_sky_max", "wind_gusts_10m_max", "daylight_duration"],
	hourly: ["temperature_2m", "relative_humidity_2m", "visibility", "rain", "showers", "snowfall", "precipitation", "dew_point_2m", 
        "wind_speed_10m", "wind_direction_10m", "soil_temperature_0cm", "soil_moisture_0_to_1cm"],
	current: ["temperature_2m", "wind_speed_10m", "relative_humidity_2m", "rain", "wind_direction_10m", "wind_gusts_10m", "showers", 
        "is_day", "snowfall", "weather_code"],
	minutely_15: ["temperature_2m", "wind_speed_80m", "visibility", "relative_humidity_2m", "is_day", "wind_speed_10m", "wind_gusts_10m",
         "wind_direction_80m", "precipitation"],
	timezone: "auto",
	forecast_minutely_15: 4,
	past_minutely_15: 4
};

export default weatherParams;