import { Link } from "react-router-dom";

function FrameCollection() {
  return (
    <div className="page">

      <Link to="/">
        <button className="backBtn">
          ← Back
        </button>
      </Link>

      <h1 className="sectionTitle">
        🕶 Premium Frame Collection
      </h1>

      <p className="sectionSubtitle">
        Explore our stylish and premium eyewear brands.
      </p>

      <div className="servicesContainer">

        <Link to="/rayban">
          <button className="lensBtn">
            🕶 Ray-Ban
          </button>
        </Link>

        <Link to="/fastrack">
          <button className="lensBtn">
            ⚡ Fastrack
          </button>
        </Link>

        <Link to="/vogue">
          <button className="lensBtn">
            ✨ Vogue
          </button>
        </Link>

        <Link to="/vincentchase">
          <button className="lensBtn">
            👓 Vincent Chase
          </button>
        </Link>

      </div>

    </div>
  );
}

export default FrameCollection;