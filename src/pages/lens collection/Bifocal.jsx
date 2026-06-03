import { motion } from "framer-motion";
import bifocal from "../../assets/bifocal lens.jpg";
import LensSlider from "../../components/LensSlider";

function Bifocal() {
  return (
    <div className="lensPage">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👓 Bifocal Lens
      </motion.h1>

      <motion.img
        src={bifocal}
        alt="Bifocal Lens"
        className="lensImage"
        whileHover={{ scale: 1.08 }}
      />

      <motion.div
        className="lensInfo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>What is Bifocal Lens?</h2>

        <p>
          Bifocal lenses provide clear vision for both near and distant objects.
        </p>

        <h3>Benefits</h3>

        <div className="benefits">
          <div className="benefitCard">📖 Clear Near Vision</div>
          <div className="benefitCard">🚗 Clear Distance Vision</div>
          <div className="benefitCard">👓 Two Powers In One Lens</div>
          <div className="benefitCard">✨ Convenient Daily Use</div>
        </div>
      </motion.div>

      <LensSlider />

    </div>
  );
}

export default Bifocal;