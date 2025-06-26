/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright ZeeshanTheCoder 2025 All rights reserved
 * @author ZeeshanTheCoder <ZeeshanTheCoder@gmail.com>
 */

const api_key = "4168b18a0f70c4f8dfc76fe3f10b6222";

/**
 * @param {string} URL API Url
 * @param {Function} callback callback
 */


export const fetchData = (URL, callback) => {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    
    /**
     * @param {string} query Search query e.g. "Karachi"
     */
    
    geo(query){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}
