function Navbar() {

  return (

    <nav className="navbar">

      <div className="logoBox">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div
        className="menuIcon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>


      <ul className={menuOpen ? "navLinks active" : "navLinks"}>

        <div
          className="menuIcon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>


        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Doctors</li>
        <li>Contact</li>

      </ul>

      <button>
        Our Profile
      </button>

      <style>{`

        .navbar{

          position:fixed;

          top:20px;
          left:50%;

          transform:translateX(-50%);

          width:92%;

          padding:18px 35px;

          display:flex;
          justify-content:space-between;
          align-items:center;

          border-radius:25px;

          background:rgba(255,255,255,0.12);

          backdrop-filter:blur(15px);

          box-shadow:0 8px 32px rgba(0,0,0,0.15);

          z-index:1000;
        }

        .logo{

          color:white;

          font-size:28px;

          font-weight:bold;

          letter-spacing:1px;
        }

        ul{

          display:flex;

          gap:35px;

          list-style:none;

          color:white;

          font-size:18px;
        }

        li{

          cursor:pointer;

          transition:0.3s;
        }

        li:hover{

          color:#00d4ff;

          transform:translateY(-2px);
        }

        button{

          padding:12px 28px;

          border:none;

          border-radius:40px;

          background:white;

          color:#001f3f;

          font-size:16px;

          font-weight:bold;

          cursor:pointer;

          transition:0.3s;
        }

        button:hover{

          transform:scale(1.08);
        }

        @media(max-width:900px){

          ul{
            display:none;
          }

          .logo{
            font-size:22px;
          }

        }

      `}</style>

    </nav>

  )
}

export default Navbar