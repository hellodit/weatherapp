const request = require("request");

const forecast = (lat, long, callback) => {
	const access_key = "20e25db211b545e23f0419d47236e321";
	const url =
		"http://api.weatherstack.com/current?access_key=" +
		access_key +
		"&query=" +
		encodeURIComponent(lat) +
		"," +
		encodeURIComponent(long);

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather service!", undefined);
		}
		if (body.error) {
			callback("Unable to search location!", undefined);
		} else {
			callback(
				undefined,
				"Temperature " +
					body.current.temperature +
					" and wind speed " +
					body.current.wind_speed
			);
		}
	});
};

module.exports = forecast;
