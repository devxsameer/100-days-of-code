# 📅 Days 65–68 — #100DaysOfCode

**Theme:** From data to design — building **Zephyr**, a modern weather app 🌤️

---

## 🔹 Quick Summary

Over four days, I built **Zephyr**, a responsive weather app powered by **Open-Meteo APIs** and **WeatherAPI.com**. It provides **real-time weather**, a **5-day forecast**, sunrise/sunset times, wind/humidity/UV highlights, and a clean hero section with background states. Built entirely with **vanilla JavaScript**, **Webpack**, and **date-fns**, with modular ES modules, error states, and unit toggling.

- Live: [`https://devxsameer.github.io/zephyr/`](https://devxsameer.github.io/zephyr/)
- Repo: [`https://github.com/devxsameer/zephyr`](https://github.com/devxsameer/zephyr)

---

## 🛠 What I Did Each Day

- **Day 65:** Project setup — npm + Webpack configs (dev/prod), Babel, ESLint/Prettier/Husky. Base HTML/CSS skeleton, hero section layout, and modular structure.
- **Day 66:** Integrated **Open-Meteo Geocoding API** for city search with suggestions. Built search UI, loaders, and error handling. Added Lucide icons.
- **Day 67:** Connected to **WeatherAPI.com** for real-time weather and **Open-Meteo Forecast API** for multi-day forecasts. Normalized API responses, built `UI.js`, `hero.js`, `forecast.js`, and `current.js` components.
- **Day 68:** Polished features — toggle Celsius/°F, added sunrise/sunset cards, and empty/error states. Responsive styling, README, and deployment to GitHub Pages.

---

## ✨ Key Features Shipped

- 🌍 City search with autocomplete (Open-Meteo Geocoding)
- ☀️ Real-time weather (WeatherAPI.com)
- 📅 6-day forecast (Open-Meteo Forecast)
- 🌡️ Unit toggle: Celsius ↔ Fahrenheit
- 🌅 Sunrise & sunset times with icons
- 💨 Highlights: wind, humidity, UV index, cloud cover with feedback messages
- 🎨 Responsive UI with hero background (day/night) and modern cards
- 🧹 ESLint + Prettier + Husky pre-commit hooks

---

## 📚 What I Learned

- Combining multiple **public APIs** into a unified, normalized data model
- Building modular UI with **Vanilla JS + ES Modules** (no framework)
- Managing **async workflows** with loaders, error states, and skeletons
- Configuring a modern build system with **Webpack 5 + Babel**
- Writing clean, reusable CSS and handling responsive states
- Practical use of **date-fns** for time formatting and local timezones
- Improving documentation and project presentation (README, screenshots)

---

## 🚀 Outcomes

- Deployed **Zephyr** live on GitHub Pages
- Learned API integration patterns and error-tolerant UI design
- Completed my second major portfolio-ready project
- A polished, real-world weather app with solid code quality

---

Made with ☕, persistence, and curiosity by **devxsameer** ✨
