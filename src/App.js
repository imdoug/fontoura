import "./App.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import logo from "./assets/logo.svg";
import left from "./assets/left.svg";
import right from "./assets/right.svg";

function App() {
  return (
    <>
      <div className="App">
        <aside className="logo-left">
          <img className="left" src={left} alt="left side logo"></img>
        </aside>
        <main >
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: 335, width: "100%", marginLeft: 35 }}
          ></img>
          <p style={{ color: "#283B91", fontSize: 12, marginBottom: 0 }}>
            We'll be here soon
          </p>
          <p
            style={{
              color: "#283B91",
              opacity: "50%",
              fontSize: 12,
              marginTop: 0,
              marginBottom: 40,
            }}
          >
            Estaremos aqui em breve
          </p>
          <a className="btn">
            <BsWhatsapp /> WhatsApp
          </a>
          <p>
            <a
              style={{ textDecoration: "none", color: "#1ED760", fontSize: 12 }}
              href="mailto:hello@fontoura.us?subject=Website Contact&body=Message"
            >
              hello@fontoura.us
            </a>
          </p>
        </main>
        <aside className="logo-right">
          <img className="right" src={right} alt="right side logo"></img>
        </aside>
      </div>
      <footer
        className="logo-right"
        style={{ fontSize: 12, textAlign: "center" }}
      >
        <a
          className="insta"
          href='https"//www.instagram.com/kellyfontouraparalegal'
        >
          <BsInstagram />
        </a>
        <p style={{ color: "#283B91", opacity: "70%" }}>
          <MdCopyright /> 2022 All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;
