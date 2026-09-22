function ErrorMessage({ theme, message }) {
  if (!message) return null;

  const cardClasses =
    theme === "dark"
      ? "rounded-[1.75rem] border border-rose-400/20 bg-rose-500/15 px-5 py-4 text-rose-100 shadow-sm shadow-rose-500/10"
      : "rounded-[1.75rem] border border-rose-400/10 bg-rose-500/10 px-5 py-4 text-rose-900 shadow-sm shadow-rose-500/10";

  const textClasses =
    theme === "dark"
      ? "mt-1 text-sm text-rose-100/90"
      : "mt-1 text-sm text-rose-900/90";

  return (
    <div className={cardClasses}>
      <p className="font-semibold">Oops!</p>
      <p className={textClasses}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
