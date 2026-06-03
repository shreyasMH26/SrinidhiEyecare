import { motion } from "framer-motion";
import singlevision from "../../assets/single vision lens.jpg";
import LensSlider from "../../components/LensSlider";

function SingleVision() {
  return (
    <div className="lensPage">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🔍 Single Vision Lens
      </motion.h1>

      <motion.img
        src={singlevision}
        alt="Single Vision Lens"
        className="lensImage"
        whileHover={{ scale: 1.08 }}
      />

      <motion.div
        className="lensInfo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>What is Single Vision Lens?</h2>

        <p>
          Single Vision lenses provide one prescription power across the entire lens.
        </p>

        <h3>Benefits</h3>

        <div className="benefits">
          <div className="benefitCard">👁 Sharp Vision</div>
          <div className="benefitCard">📚 Reading Support</div>
          <div className="benefitCard">🚗 Distance Viewing</div>
          <div className="benefitCard">✨ Easy To Adapt</div>
        </div>
      </motion.div>

      <LensSlider />

    </div>
  );
}

export default SingleVision;



