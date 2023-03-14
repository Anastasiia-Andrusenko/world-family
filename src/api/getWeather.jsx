

const APIkey = 'dada1f37ac1948d0aa8144651231403';

const baseURL = 'http://api.weatherapi.com/v1';

export const getWeather = async (cityName) => {
  return await fetch(`${baseURL}/current.json?key=${APIkey}&q=${cityName}`).then(response => response.json());
}