export function Alert({ message }) {
  return (
    <div
      role="alert"
      className="container__alert"
    >
      <span>{message}</span>
    </div>
  );
}
