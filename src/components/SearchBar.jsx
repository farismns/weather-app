function SearchBar({ theme, location, setLocation, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const inputClasses =
    theme === "dark"
      ? "w-full rounded-[1.5rem] border border-slate-700 bg-slate-950/90 px-5 py-4 text-white shadow-lg shadow-slate-950/20 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
      : "w-full rounded-[1.5rem] border border-slate-200 bg-slate-100 px-5 py-4 text-slate-900 shadow-lg shadow-slate-950/10 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full gap-4 sm:grid-cols-[1fr_auto]"
    >
      <input
        type="text"
        placeholder="Masukkan nama kota..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={inputClasses}
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-[1.5rem] bg-sky-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
      >
        Cari
      </button>
    </form>
  );
}

export default SearchBar;
