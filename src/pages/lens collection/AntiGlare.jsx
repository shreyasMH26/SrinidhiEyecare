import { motion } from "framer-motion";
import antiglare from "../../assets/anti glare lens.jpg";
import LensSlider from "../../components/LensSlider";

function AntiGlare() {
  return (
    <div className="lensPage">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ✨ Anti-Glare Lens
      </motion.h1>

      <motion.img
        src={antiglare}
        alt="Anti Glare Lens"
        className="lensImage"
        whileHover={{ scale: 1.08 }}
      />

      <motion.div
        className="lensInfo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>What is Anti-Glare Lens?</h2>

        <p>
          Anti-Glare lenses reduce reflections and improve clarity for day and night vision.
        </p>

        <h3>Benefits</h3>

        <div className="benefits">
          <div className="benefitCard">💡 Reduces Reflections</div>
          <div className="benefitCard">👁 Improves Clarity</div>
          <div className="benefitCard">🌙 Better Night Vision</div>
          <div className="benefitCard">🛡 Reduces Eye Fatigue</div>
        </div>
      </motion.div>

      <LensSlider />

    </div>
  );
}

export default AntiGlare;