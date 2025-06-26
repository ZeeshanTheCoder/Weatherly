/**
 * @license MIT
 * @fileoverview Manage all routes
 * @copyright ZeeshanTheCoder 2025 All rights reserved
 * @author ZeeshanTheCoder <ZeeshanTheCoder@gmail.com>
 */

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?lat=24.8546842&lon=67.0207055"; // Karachi

const currentLocation = () => {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;

      updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },
    (err) => {
      window.location.hash = defaultLocation;
    }
  );
};

/**
 *
 * @param {string} query Searched query
 */

const searchedLocation = (query) => updateWeather(...query.split("&"));

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = () => {
  const requestURL = window.location.hash.slice(1);

  // If route is just 'ZeeshanTheCoder.github.io/Weatherly', redirect to '/weather?lat=24.8546842&lon=67.0207055'
  if (requestURL === "ZeeshanTheCoder.github.io/Weatherly") {
  // if (requestURL === "") {
    window.location.hash = "/weather?lat=24.8546842&lon=67.0207055";
    return;
  }

  const [route, query] = requestURL.includes
    ? requestURL.split("?")
    : [requestURL];

  routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", () => {
      // if(window.location.hash) {
      //     window.location.hash = "#/current-location"
      // } else {
      //     checkHash()
      // }

  if (window.location.hash) {
    // Agar hash exist karta hai, to wahi route process karo
    checkHash();
  } else {
    // Agar hash nahi hai, to default location set karo
    window.location.hash = "#/weather?lat=24.8546842&lon=67.0207055";
  }
});
