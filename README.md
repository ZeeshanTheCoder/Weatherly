# Weather App

![License](https://img.shields.io/badge/license-MIT-green)  
![Author](https://img.shields.io/badge/author-ZeeshanTheCoder-blue)

---

## Overview

This is a lightweight **Weather App** built with vanilla JavaScript that allows users to search weather data for different locations using OpenWeatherMap APIs. The app supports geolocation, search, and displays current weather, hourly and 5-day forecasts, and air quality data.

---

## Live Preview Link

https://ZeeshanTheCoder.github.io/Weatherly

---

## Features

- **Search weather** by city/location with live suggestions
- **Current location weather** using browser geolocation
- Detailed **current weather** display including temperature, humidity, pressure, visibility, sunrise/sunset, and air quality index
- **24-hour hourly forecast** with temperature and wind details
- **5-day weather forecast**
- Mobile-responsive design with toggleable search on small screens
- Clear error handling and loading states

---

## Technologies Used

- Vanilla JavaScript (ES6 Modules)
- OpenWeatherMap API for weather, forecast, geocoding, and air pollution data
- HTML5 and CSS3 (assumed, based on usage)
- No external frameworks or libraries (currently)

---

## Project Structure

```

├── index.html      # (Assumed) Main HTML file linking scripts and styles
/assets
  /css
    ├── styles.css      # (Assumed) CSS for styling the app
  /font
    /material-symbol          # Used for material icons
  /images
    /weather_icons          # Weather icons and other assets
  /js
    ├── app.js          # Main app logic, rendering weather data
    ├── api.js          # API URL generators and fetch functions
    ├── module.js       # Utility functions for date, time, conversions, and AQI texts
    ├── route.js        # Simple client-side routing and navigation
```

---

## Setup & Usage

1. Clone the repository:

```bash
git clone https://github.com/ZeeshanTheCoder/weather-app.git
cd weather-app
```

2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it in your `api.js` (or environment variable as per your setup).

3. Open `index.html` in a modern browser (or serve it via a local server):

```bash
# Using VSCode Live Server or
python -m http.server  # or any other local server
```

4. Use the search box to find weather for any location or allow access to your current location.

---

## Future Plans

- **React / Next.js Migration:**
  Refactor the app into React components or Next.js framework for better state management, SEO, and routing.

- **Mobile App with Flutter:**
  Build a mobile app to provide the same weather functionalities.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes and feature requests.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## Author

**ZeeshanTheCoder**  
Email: [ZeeshanTheCoder@gmail.com](mailto:ZeeshanTheCoder@gmail.com)  
GitHub: [ZeeshanTheCoder](https://github.com/ZeeshanTheCoder)

---

## Acknowledgments

- OpenWeatherMap for free weather API
- Material Icons for weather and UI icons
