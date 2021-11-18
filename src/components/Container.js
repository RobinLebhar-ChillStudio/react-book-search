export function Container({ children, backgroundImage }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
}
