import UnderConstructionMessage from "./UnderConstructionMessage";
import "./underconstructionpage.css";

export default function UnderconstructionPage() {
  return (
    <div className="d-flex flex-column" style={{ "min-height": "84vh" }}>
      <h1>Underconstruction Page</h1>

      <UnderConstructionMessage
        title="Awesomething is on the way"
        message="We are working on this feature and will launch soon"
      />
    </div>
  );
}
