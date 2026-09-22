# Weather App

A responsive weather application built with **React, Vite, and Tailwind CSS** that uses the **Visual Crossing Weather API** to display weather information based on the searched location.

## Features

* Search weather by location
* Display current weather conditions
* Display hourly forecast
* Responsive interface for desktop and mobile
* Loading and error states
* Weather data fetched from the Visual Crossing Weather API

## Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript
* Visual Crossing Weather API

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/farismns/weather-app.git
cd weather-app
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your Visual Crossing Weather API key.

### Run Development Server

```bash
npm run dev
```

The application will be available at the local URL shown in the terminal.

## Build for Production

To create a production build:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## Docker

The project also includes a `Dockerfile` for running the application with Docker.

Build the Docker image:

```bash
docker build --build-arg VITE_WEATHER_API_KEY="your_api_key_here" -t weather-app:1.0 .
```

Run the container:

```bash
docker run --name weather-app-container -p 8080:80 weather-app:1.0
```

Open:

```text
http://localhost:8080
```

## Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── vite.config.js
```

## API

Weather data is provided by the **Visual Crossing Weather API**.

## License

This project is for educational and portfolio purposes.
