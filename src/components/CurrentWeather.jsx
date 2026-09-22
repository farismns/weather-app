function CurrentWeather({ theme, weather }) {
  const current = weather?.currentConditions;

  if (!current) return null;

  const stats = [
    { label: "Angin", value: `${current.windspeed} km/h`, icon: "💨" },
    { label: "Kelembapan", value: `${current.humidity}%`, icon: "💧" },
    { label: "Hujan", value: `${current.precipprob ?? 0}%`, icon: "🌧️" },
    { label: "Awan", value: `${current.cloudcover ?? "N/A"}%`, icon: "☁️" },
  ];

  const sectionClasses =
    theme === "dark"
      ? "rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 ring-1 ring-white/5 backdrop-blur-xl transition-colors duration-300"
      : "rounded-[2rem] border border-slate-200/10 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5 backdrop-blur-xl transition-colors duration-300";

  const labelClasses =
    theme === "dark"
      ? "text-sm uppercase tracking-[0.3em] text-sky-300/80"
      : "text-sm uppercase tracking-[0.3em] text-sky-500/80";

  const titleClasses =
    theme === "dark"
      ? "mt-3 text-3xl font-semibold text-white sm:text-4xl"
      : "mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl";

  const subtitleClasses =
    theme === "dark" ? "mt-2 text-slate-300" : "mt-2 text-slate-600";

  const statCardClasses =
    theme === "dark"
      ? "rounded-3xl bg-slate-950/80 p-5"
      : "rounded-3xl bg-slate-100/90 p-5";

  const statTextClasses =
    theme === "dark" ? "text-sm text-slate-400" : "text-sm text-slate-500";

  const statValueClasses =
    theme === "dark"
      ? "mt-3 flex items-center gap-2 text-xl font-semibold text-white"
      : "mt-3 flex items-center gap-2 text-xl font-semibold text-slate-950";

  const tempCardClasses =
    theme === "dark"
      ? "rounded-[1.75rem] bg-slate-950/90 px-8 py-6 text-center shadow-lg shadow-slate-950/20"
      : "rounded-[1.75rem] bg-slate-100/90 px-8 py-6 text-center shadow-lg shadow-slate-950/10";

  const tempTextClasses =
    theme === "dark"
      ? "text-6xl font-semibold text-white"
      : "text-6xl font-semibold text-slate-950";

  const feelsLikeClasses =
    theme === "dark"
      ? "mt-2 text-sm uppercase tracking-[0.25em] text-slate-400"
      : "mt-2 text-sm uppercase tracking-[0.25em] text-slate-500";

  return (
    <section className={sectionClasses}>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className={labelClasses}>Lokasi saat ini</p>
          <h2 className={titleClasses}>{weather.resolvedAddress}</h2>
          <p className={subtitleClasses}>{current.conditions}</p>
        </div>

        <div className={tempCardClasses}>
          <p className={tempTextClasses}>{current.temp}°</p>
          <p className={feelsLikeClasses}>
            Feels like {current.feelslike ?? current.temp}°
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className={statCardClasses}>
            <p className={statTextClasses}>{stat.label}</p>
            <p className={statValueClasses}>
              <span>{stat.icon}</span>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CurrentWeather;
