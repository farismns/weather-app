function Loading({ theme }) {
  const containerClasses =
    theme === "dark"
      ? "flex min-h-[240px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 ring-1 ring-white/5 backdrop-blur-xl"
      : "flex min-h-[240px] items-center justify-center rounded-[2rem] border border-slate-200/10 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5 backdrop-blur-xl";

  const textClasses = theme === "dark" ? "text-slate-300" : "text-slate-700";

  const spinnerClasses =
    theme === "dark"
      ? "h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-sky-400"
      : "h-14 w-14 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <div className={spinnerClasses} />
        <p className={textClasses}>Loading weather data...</p>
      </div>
    </div>
  );
}

export default Loading;
