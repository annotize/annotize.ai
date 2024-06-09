export function Footer() {
  return (
    <footer
      className="flex items-center p-4"
      style={{
        background: "var(--foreground-color)",
        color: "var(--background-color)",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl text-center">
        &copy; 2024 Annotize.ai
      </div>
    </footer>
  );
}
