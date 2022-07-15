export default function UnderConstructionMessage({ title, message }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light">
      <h2 className="text-primary">{title}</h2>
      <p className="text-primary">{message}</p>
      <div class="text-center">
        <img src={require("../cog.png")} class="rounded" alt="cogwheel" />
      </div>
    </div>
  );
}
