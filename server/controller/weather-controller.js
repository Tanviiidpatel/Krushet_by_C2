import { fetchWeatherApi  } from 'openmeteo';
import weatherParams from '../model/weather-model.js';

const weatherController = async (req, res) => {
	try {
		const url = "https://api.open-meteo.com/v1/forecast";
		const responses = await fetchWeatherApi(url, weatherParams);

		// Process first location
		const response = responses[0];

		const currentWeather = {
			temperature: response.current().variables(0)?.value(),
			windSpeed: response.current().variables(1)?.value(),
			humidity: response.current().variables(2)?.value(),
			rain: response.current().variables(3)?.value(),
			weatherCode: response.current().variables(9)?.value(),
		};

		res.json({
			message: "Weather data fetched successfully",
			data: currentWeather
		});
	} catch (error) {
		console.error("Error fetching weather data:", error);
		res.status(500).json({ message: "Internal Server Error", error: error.message });
	}
};

export default weatherController;