import { motion } from "framer-motion";
import bluecutlens from "../../assets/blue cut lens.jpg";
import LensSlider from "../../components/LensSlider";
console.log(bluecutlens);


function BlueCut() {
  return (
    <div className="lensPage">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💻 Blue Cut Lens
      </motion.h1>

      <img
        src={bluecutlens}
        alt="Blue Cut Lens"
        style={{ width: "300px", height: "auto", display: "block", margin: "auto", borderRadius: "2px" }}
      />

      <motion.div
        className="lensInfo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>What is Blue Cut Lens?</h2>

        <p>
          Blue Cut lenses filter harmful blue light from mobiles,
          laptops, computers and TV screens.
        </p>

        <h3>Benefits</h3>

        <div className="benefits">
          <div className="benefitCard">
            👁 Reduces Eye Strain
          </div>

          <div className="benefitCard">
            😴 Better Sleep Quality
          </div>

          <div className="benefitCard">
            💻 Comfortable Screen Usage
          </div>

          <div className="benefitCard">
            🛡 Protects Eyes
          </div>
        </div>
      </motion.div>

      <LensSlider />

    </div>
  );
}

export default BlueCut;