import { Link } from "react-router-dom";

function Contact() {

  return (

    <div className="page">

      <Link to="/">

        <button className="backBtn">
          ← Back
        </button>

      </Link>

      <h1>Contact Us</h1>

      <p>
        Srinidhi Eye Care<br />
        Shivamogga, Karnataka
      </p>

    </div>
  );
}

export default Contact;