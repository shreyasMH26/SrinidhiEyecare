import { motion } from "framer-motion";
import photochromic from "../../assets/photochromic lens.jpg";
import LensSlider from "../../components/LensSlider";

function Photochromic() {
  return (
    <div className="lensPage">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌞 Photochromic Lens
      </motion.h1>

      <motion.img
        src={photochromic}
        alt="Photochromic Lens"
        className="lensImage"
        whileHover={{ scale: 1.08 }}
      />

      <motion.div
        className="lensInfo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>What is Photochromic Lens?</h2>

        <p>
          These lenses automatically darken in sunlight and become clear indoors.
        </p>

        <h3>Benefits</h3>

        <div className="benefits">
          <div className="benefitCard">☀ Auto Darkening</div>
          <div className="benefitCard">🕶 UV Protection</div>
          <div className="benefitCard">🏠 Clear Indoors</div>
          <div className="benefitCard">✨ No Need For Sunglasses</div>
        </div>
      </motion.div>

      <LensSlider />

    </div>
  );
}

export default Photochromic;