import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import RefreshButton from "./components/RefreshButton";

import { getWeather } from "./services/weatherApi";

const INITIAL_LOCATION = "Jakarta";

function App() {
  const [location, setLocation] = useState(INITIAL_LOCATION);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("weather-app-theme");

      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    } catch {
      // ignore
    }

    return "dark";
  });

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (err) {
      console.error(err);

      setError(err?.message || "Failed to fetch weather data.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const loadInitialWeather = async () => {
      try {
        const data = await getWeather(INITIAL_LOCATION);

        if (!cancelled) {
          setWeather(data);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError(err?.message || "Failed to fetch weather data.");
          setWeather(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadInitialWeather();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSearch = () => {
    if (!location.trim()) return;

    fetchWeather(location);
  };

  const handleRefresh = () => {
    fetchWeather(location);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    try {
      localStorage.setItem("weather-app-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    let cancelled = false;

    const loadWeather = async () => {
      try {
        const data = await getWeather(INITIAL_LOCATION);

        if (!cancelled) {
          setWeather(data);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError(err?.message || "Failed to fetch weather data.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadWeather();

    return () => {
      cancelled = true;
    };
  }, []);

  const rootClasses =
    theme === "dark"
      ? "min-h-screen bg-slate-950 text-slate-100"
      : "min-h-screen bg-sky-50 text-slate-950";

  const heroClasses =
    theme === "dark"
      ? "rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/5 backdrop-blur-xl transition-colors duration-300"
      : "rounded-[2rem] border border-slate-200/10 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5 backdrop-blur-xl transition-colors duration-300";

  const subtitleClasses =
    theme === "dark"
      ? "text-sm uppercase tracking-[0.3em] text-sky-300/80"
      : "text-sm uppercase tracking-[0.3em] text-sky-500/80";

  const headingClasses =
    theme === "dark"
      ? "mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
      : "mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl";

  const paragraphClasses =
    theme === "dark"
      ? "mt-4 max-w-2xl text-slate-300"
      : "mt-4 max-w-2xl text-slate-600";

  const toggleButtonClasses =
    theme === "dark"
      ? "inline-flex items-center gap-2 rounded-[1.5rem] border border-slate-700/80 bg-slate-800/90 px-5 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/10 transition hover:bg-slate-700"
      : "inline-flex items-center gap-2 rounded-[1.5rem] border border-slate-200/80 bg-slate-100/90 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/5 transition hover:bg-slate-200";

  return (
    <div className={rootClasses}>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_35%)] opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.24),_transparent_40%)] opacity-60" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className={heroClasses}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className={subtitleClasses}>Weather Dashboard</p>
                <h1 className={headingClasses}>Weather App</h1>
                <p className={paragraphClasses}>
                  Browse the latest weather details for your city in a clean,
                  modern interface.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <RefreshButton onRefresh={handleRefresh} theme={theme} />
                <button onClick={toggleTheme} className={toggleButtonClasses}>
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>

            <div className="mt-8">
              <SearchBar
                theme={theme}
                location={location}
                setLocation={setLocation}
                onSearch={handleSearch}
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            {loading && <Loading theme={theme} />}

            {!loading && error && (
              <ErrorMessage theme={theme} message={error} />
            )}

            {!loading && !error && weather && (
              <>
                <CurrentWeather theme={theme} weather={weather} />
                <HourlyForecast
                  theme={theme}
                  hours={weather?.days?.[0]?.hours?.slice(0, 24)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
