import "./underConstructionMessage.css";

export default function UnderConstructionMessage({ title, message }) {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light">
        <h2 className="text-primary">{title}</h2>
        <p className="text-primary">{message}</p>

        <div className="spinner">
          <div className="spinner-sector spinner-red bg-danger"></div>
          <div className="spinner-sector spinner-blue bg-success"></div>
          <div className="spinner-sector spinner-green bg-primary"></div>
        </div>
      </div>
    </>
  );
}
