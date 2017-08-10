const axios = require('axios');

const API_KEY = '8e3138dc0023138ad34c1f01c07c19e0';
const baseUrl = 'http://api.openweathermap.org/data/2.5/';

function prepRouteParams(quertyStringData) {
  return Object.keys(quertyStringData)
    .map(key => `${key}=${encodeURIComponent(quertyStringData[key])}`)
    .join('&');
}

function prepUrl(type, queryStringData) {
  return `${baseUrl + type}?${prepRouteParams(queryStringData)}`;
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    units: 'metric',
    cnt: 5,
    APPID: API_KEY,
  };
}

const func = (function weatherFunctions() {
  return {
    getCurrentWeather(city) {
      const queryStringData = getQueryStringData(city);
      const path = prepUrl('weather', queryStringData);

      return axios.get(path).then(e => e.data);
    },
    getForecast(city) {
      const queryStringData = getQueryStringData(city);
      const path = prepUrl('forecast/daily', queryStringData);

      return axios.get(path).then(e => e.data);
    },
  };
}());

module.exports = func;
