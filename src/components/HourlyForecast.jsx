function HourlyForecast({ theme, hours }) {
  if (!hours?.length) return null;

  const sectionClasses =
    theme === "dark"
      ? "rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 ring-1 ring-white/5 backdrop-blur-xl transition-colors duration-300"
      : "rounded-[2rem] border border-slate-200/10 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5 backdrop-blur-xl transition-colors duration-300";

  const titleClasses =
    theme === "dark"
      ? "text-2xl font-semibold text-white"
      : "text-2xl font-semibold text-slate-950";

  const subtitleClasses =
    theme === "dark" ? "text-sm text-slate-400" : "text-sm text-slate-500";

  const cardClasses =
    theme === "dark"
      ? "rounded-3xl bg-slate-950/80 p-5 text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-slate-900/90"
      : "rounded-3xl bg-slate-100/80 p-5 text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:bg-slate-200";

  const datetimeClasses =
    theme === "dark"
      ? "text-sm uppercase tracking-[0.2em] text-slate-400"
      : "text-sm uppercase tracking-[0.2em] text-slate-500";

  const conditionClasses =
    theme === "dark"
      ? "mt-2 text-sm text-slate-300"
      : "mt-2 text-sm text-slate-600";

  return (
    <section className={sectionClasses}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className={titleClasses}>Forecast 24 Jam</h2>
        <p className={subtitleClasses}>Per jam untuk hari ini</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hours.map((hour) => (
          <div key={hour.datetime} className={cardClasses}>
            <p className={datetimeClasses}>{hour.datetime}</p>
            <p className="mt-4 text-3xl font-semibold">{hour.temp}°</p>
            <p className={conditionClasses}>{hour.conditions}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
