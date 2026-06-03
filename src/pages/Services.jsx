import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Services() {

  const navigate = useNavigate();

  const handleBack = () => {

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (

    <div className="page">

      <button
        className="backBtn"
        onClick={handleBack}
      >
        ← Back
      </button>

      <h1>Our Services</h1>

      <div className="servicesContainer">

        {/* CARD 1 */}
        <div className="serviceCard">
          <h2>👁 Computerized Eye Testing</h2>

          <p>
            Advanced digital eye testing
            for accurate vision analysis.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="serviceCard">
          <h2>🔬 Cataract Surgery</h2>

          <p>
            Safe and modern cataract
            treatment with expert care.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="serviceCard">
          <h2>💎 LASIK Surgery</h2>

          <p>
            Remove glasses permanently
            using laser eye correction.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="serviceCard">
          <h2>👓 Contact Lens</h2>

          <p>
            Premium contact lens fitting
            and consultation services.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="serviceCard">
          <h2>🩺 Retina Checkup</h2>

          <p>
            Complete retina examination
            with modern equipment.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="serviceCard">
          <h2>🌟 Pediatric Eye Care</h2>

          <p>
            Specialized eye treatment
            for children and students.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Services;