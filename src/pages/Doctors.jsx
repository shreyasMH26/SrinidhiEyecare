import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";

import { Link } from "react-router-dom";

function Doctors() {

  return (

    <div className="page">

      <Link to="/">
        <button className="backBtn">
          ← Back
        </button>
      </Link>

      <h1>Our Doctors</h1>

      <div className="doctorContainer">

        {/* CARD 1 */}

        <div className="doctorCard">

          <img
            src={doctor1}
            alt="Doctor"
            className="doctorImg"
          />

          <h2>Dr.name1</h2>

          <p>
            Eye Specialist & Cataract Surgeon
          </p>

        </div>

        {/* CARD 2 */}

        <div className="doctorCard">

          <img
            src={doctor2}
            alt="Doctor"
            className="doctorImg"
          />

          <h2>Dr. name2</h2>

          <p>
            Retina & Vision Care Specialist
          </p>

        </div>

      </div>

    </div>
  );
}

export default Doctors;