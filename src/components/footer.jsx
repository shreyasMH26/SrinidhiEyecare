
function Footer() {

  return (

    <footer className="footer">

      <div className="footerContainer">

        {/* SECTION 1 */}

        <div className="footerSection">

          <h2>Srinidhi Eye Care</h2>

          <p>
            Advanced Eye Care &
            Modern Vision Solutions.
          </p>
          <div className="socialMedia">

            {/* FACEBOOK */}

            <a
              href="https://facebook.com/YOUR_FACEBOOK_ID"
              target="_blank"
              rel="noreferrer"
              className="socialBtn"

            >


              <i className="fab fa-facebook-f"></i>



              <span className="socialText">
                @SrinidhiEyeCare
              </span>


            </a>

            {/* INSTAGRAM */}

            <a
              href="https://instagram.com/harisht1402"
              target="_blank"
              rel="noreferrer"
              className="socialBtn"

            >


              <i className="fab fa-instagram"></i>



              <span className="socialText">
                @srinidhieyecare
              </span>


            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/918105403378"
              target="_blank"
              rel="noreferrer"
              className="socialBtn"

            >


              <i className="fab fa-whatsapp"></i>


              <span className="socialText">
                WhatsApp
              </span>


            </a>

          </div>


          <div className="socialMedia">

            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://instagram.com/harisht1402" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://wa.me/918105403378" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>

          </div>


        </div>

      </div>

      {/* SECTION 2 */}

      <div className="footerSection">

        <h3>📍 Address</h3>

        <p>
          Peerzad Street<br />
          near Chandrappa Hospital<br />
          Vidya Nagar<br />
          Gangavathi<br />
          Karnataka 583227.
        </p>
        <iframe src="https://www.google.com/maps?q=Srinidhi+Eye+Care+Gangavathi&output=embed"

          width="100%"
          height="200"
          style={{
            border: "0",
            borderRadius: "15px",
            marginTop: "15px"
          }}

          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>

      </div>

      {/* SECTION 3 */}

      <div className="footerSection">

        <h3>📞 Contact</h3>

        <p>+91 8105403378</p>

        <p>srinidhieyecare@gmail.com</p>

        <p>🕧Mon - Sat :
          Morning: 10:00 AM - 1:15 PM<br />
          Evening: 5:00 PM - 8:30 PM<br />
          Sunday: Closed
        </p>
        <div className="clinicStatus">

          {
            (() => {

              const now = new Date();

              const day = now.getDay(); // Sunday = 0

              const hour = now.getHours();

              const minute = now.getMinutes();

              const currentTime = hour + minute / 60;

              const isMorning =
                currentTime >= 10 &&
                currentTime <= 13.25;

              const isEvening =
                currentTime >= 17 &&
                currentTime <= 20.5;

              const isOpen =
                day !== 0 &&
                (isMorning || isEvening);

              return isOpen ? (


                <p className="openStatus">
                  🟢 Clinic is Open Now
                </p>


              ) : (


                <p className="closeStatus">
                  🔴 Clinic is Closed
                </p>


              );

            })()
          }



        </div>


      </div>


    </footer>
  );
}

export default Footer;
