function RefreshButton({ onRefresh }) {
  return (
    <button
      onClick={onRefresh}
      className="inline-flex items-center justify-center rounded-[1.5rem] bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
    >
      <span className="mr-2 text-lg">🔄</span>
      Refresh
    </button>
  );
}

export default RefreshButton;
