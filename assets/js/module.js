/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright ZeeshanTheCoder 2025 All rights reserved
 * @author ZeeshanTheCoder <ZeeshanTheCoder@gmail.com>
 */

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

 /**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone TimeZone shift from UTC in seconds
 * @param {string} Date Date String. formate: "Sunday 10, Jan"
 */

export const getDate = (dateUnix, timezone) => {
    const date = new Date((dateUnix + timezone) * 1000 );

    const weekDay = weekDayNames[date.getUTCDay()];
    const month = monthNames[date.getUTCMonth()];

    return `${weekDay} ${date.getUTCDate()}, ${month}`
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds 
 * @param {number} timezone TimeZone shift from UTC in seconds
 * @param {string} Time Time String. formate: "HH:MM AM/PM"
 * @returns 
 */

export const getTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000 );
    const hours = date.getUTCHours();
    const minutes = date.getMinutes();
    const period = hours >= 12? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds 
 * @param {number} timezone TimeZone shift from UTC in seconds
 * @param {string} Time Time String. formate: "HH AM/PM"
 * @returns 
 */

export const getHours = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000 );
    const hours = date.getUTCHours();
    const period = hours >= 12? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`
}

/**
 * 
 * @param {number} mps Meter Per Seconds
 * @param {number} kmh Kilomerter per hours
 * @returns 
 */

export const mps_to_kmh = (mps) => {
    const kmh = mps * 3600;
    return kmh / 1000;
}

export const aqiTexts = {
    1 : {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2 : {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3 : {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4 : {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5 : {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    },
}