import image3 from "../img/image_3.png";
import Elipse from "../img/Ellipse.png";
import prfile from "../img/prfile.png";
import gift from "../img/gift.png";
import rect1 from "../img/rect.png";
import whirect from "../img/whirect.png";
import glass from "../img/glass.png";
import orangerect from "../img/orangerect.png";
import r from "../img/r.png";
import ReactPlayer from "react-player";
import globe from "../img/globe.png";
import flag from "../img/flag.png";
import peop from "../img/peop.png";
import cup from "../img/cup.png";
import per from "../img/per.png";
import maps from "../img/Maps.png";
import { useState } from "react";
import call from "../img/call.png";
import msg from "../img/msg.png";
import { Link } from "react-scroll";
const Mains = () => {
  function thankyou() {
    alert("Thankyou");
  }
  const [message, setMessage] = useState(76);

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <>
      <div className="row h ">
        <div className="col-3  ch d-flex justify-content-end align-items-center">
          <img
            style={{ paddingRight: "3rem", width: "10rem" }}
            src={image3}
            alt="logo"
          />
        </div>
        <div className="col-9">
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "4rem",
              fontSize: "1.5rem",
            }}
          >
            <li className="nav-item">
              {/* <a href="/" style={{ color: "black", textDecoration: "None" }}>
                Home
              </a> */}

              <Link
                activeClass="active"
                smooth
                spy
                to="h"
                style={{ color: "black", textDecoration: "None" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" style={{ color: "black", textDecoration: "None" }}>
                About
              </a> */}
              <Link
                activeClass="active"
                smooth
                spy
                to="section3"
                style={{ color: "black", textDecoration: "None" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" style={{ color: "black", textDecoration: "None" }}>
                Pages
              </a> */}
              <Link
                activeClass="active"
                smooth
                spy
                to="sec-7_1"
                style={{ color: "black", textDecoration: "None" }}
              >
                Pages
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" style={{ color: "black", textDecoration: "None" }}>
                Events
              </a> */}

              <Link
                activeClass="active"
                smooth
                spy
                to="sec-8"
                style={{ color: "black", textDecoration: "None" }}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" style={{ color: "black", textDecoration: "None" }}>
                Contact
              </a> */}

              <Link
                activeClass="active"
                smooth
                spy
                to="sec-10"
                style={{ color: "black", textDecoration: "None" }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button className="butt" onClick={thankyou}>
                {" "}
                Donate
              </button>
            </li>
          </ul>
        </div>
        <div className="col-12 bgImage section2">
          <div className="col-12 b1">
            <p className="e">
              <h1>
                <span>#EndViolence</span> For Every Woman
              </h1>
            </p>
            <p className="s">
              {" "}
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              {" "}
              <button
                className="b"
                sytle={{ width: "170px", height: "50px" }}
                onClick={thankyou}
              >
                {" "}
                Donate
              </button>
            </p>
          </div>
        </div>
        <div className="col-12  section3">
          <p className="Pg2">
            Welcome <span className="To">To</span> Ngoo
          </p>
          <p className="pg21">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row sec-4">
          <div className="col-4">
            <img className="profile" src={prfile} alt="g" />
            <img className="elisp" src={Elipse} alt="d" />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                textAlign: "center",
                paddingLeft: "110px",
                paddingTop: "15px",
              }}
            >
              become a Volunteer{" "}
            </p>
            <p
              style={{
                fontFamily: "Lora",
                textAlign: "center",
                paddingLeft: "110px",
                paddingTop: "5px",
                fontSize: "28px",
              }}
            >
              <b>Join Us Now</b>
            </p>
            <p
              style={{
                fontFamily: "Lora",
                textAlign: "center",
                paddingLeft: "150px",
                paddingTop: "5px",
                fontSize: "16px",
                width: "450px",
              }}
            >
              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium dolore.
            </p>
          </div>
          <div className="col-4">
            <img className="gift" src={gift} alt="g" />
            <img className="elisp2" src={Elipse} alt="d" />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                textAlign: "center",
                paddingRight: "25px",
                paddingTop: "15px",
              }}
            >
              View Our Cause
            </p>
            <p
              style={{
                fontFamily: "Lora",
                fontSize: "28px",
                textAlign: "center",
                paddingRight: "25px",
                paddingTop: "3px",
              }}
            >
              <b>Donate Now</b>
            </p>
            <p
              style={{
                fontFamily: "Lora",
                fontSize: "16px",
                textAlign: "center",
                paddingLeft: "60px",

                paddingTop: "3px",
                width: "370px",
              }}
            >
              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium dolore.
            </p>
          </div>

          <div className="col-4">
            <img className="gift1" src={gift} alt="g" />
            <img className="elisp3" src={Elipse} alt="d" />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                textAlign: "left",
                paddingTop: "15px",
              }}
            >
              View Our Events
            </p>
            <p
              style={{
                fontFamily: "Lora",
                fontSize: "28px",
                textAlign: "left",
                paddingTop: "1px",
              }}
            >
              <b>Get involved</b>
            </p>
            <p
              style={{
                fontFamily: "Lora",
                fontSize: "16px",
                textAlign: "left",
                paddingTop: "1px",
                paddingRight: "20px",
                width: "330px",
              }}
            >
              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium dolore.
            </p>
          </div>
        </div>
        <div className="row sec-5">
          <button className="cause" onClick={thankyou}>
            All Cause
          </button>
        </div>
        <div className="row  sec-6">
          <div className="col-6 s-1 ">
            <p
              className="urgent"
              style={{
                fontFamily: "Lora",

                fontweight: "700",
                lineheight: "69px",
                color: "#FF7000",
                fontSize: "50px",
              }}
            >
              Urgent <span style={{ color: "whitesmoke" }}>Cause</span>
            </p>
            <p>
              <img
                src={orangerect}
                alt="hkjb"
                style={{
                  height: "4px",
                  width: "120px",
                  position: "relative",
                  left: "-72px",
                  borderRadius: "20px",
                }}
              />
            </p>
            <p
              style={{
                fontFamily: "Lora",

                fontweight: "700",
                lineheight: "69px",
                color: "#FF7000",
                fontSize: "50px",
                width: "500px",
                position: "relative",
                left: "116px",
              }}
            >
              #School{" "}
              <span style={{ color: "whitesmoke" }}>
                for South Kampar's Students
              </span>
            </p>
            <p
              style={{
                color: "#666666",
                width: "490px",
                left: "110px",
                position: "relative",
              }}
            >
              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium dolore mque laudanti um,
              totam rem aperiam, eaque ipsa quae ab illo invent.
            </p>
            <div className="progres">
              <p
                className="progress-label"
                style={{
                  fontFamily: "Lora",
                  color: "#FF7000",
                  fontSize: "16px",
                }}
              >
                {" "}
                Donated
                <span
                  classNmae="prgress-no"
                  style={{
                    left: "200px",
                    color: "whitesmoke",
                    position: "relative",
                  }}
                >
                  {message}%
                </span>
              </p>
            </div>

            <progress
              id="file"
              value={message}
              max="100"
              style={{
                width: "400px",
                position: "relative",
                left: "65px",
                accentColor: "coral",
                color: "white",
              }}
            >
              {" "}
            </progress>

            <p
              style={{
                fontFamily: "Lora",

                fontweight: "700",
                color: "orange",
                fontSize: " 20px",
              }}
            >
              $18,500 <span style={{ color: "whitesmoke" }}>Raised of</span>{" "}
              $25,000 <span style={{ color: "whitesmoke" }}> Goal</span>
            </p>
          </div>
          <div
            className="col-6 s-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>
              <img
                src={glass}
                id="jjjg"
                style={{
                  height: "240px",
                  width: "314px",
                  borderradius: "20px",
                  zIndex: "5",
                }}
              />
            </p>

            <p>
              <button
                className="b-1"
                style={{ marginTop: "25px" }}
                onClick={thankyou}
              >
                {" "}
                Donate
              </button>
            </p>
          </div>
        </div>
        <div className="row sec-7_1">
          <p
            style={{
              fontFamily: "Lora",

              fontweight: "700",
              fontSize: "54px ",
              lineheight: "69px",
              textAlign: "center",
              color: "#333333",
              marginTop: "100px",
            }}
          >
            {" "}
            We <span style={{ color: "orange" }}>Need</span> Your Help
          </p>
          <p>
            <img
              src={orangerect}
              alt="hkjb"
              style={{
                height: "2px",
                width: "130px",
                position: "relative",
                alignContent: "center",
                borderRadius: "20px",
                left: "45%",
              }}
            />
          </p>
          <p style={{ textAlign: "center" }}>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row sec-7_2 ">
          <div className="col"></div>
          <div className="col">
            <img className="rect" src={r} alt="vtgt" />
            <div
              className="text"
              style={{ alignItems: "center", marginTop: "20px" }}
            >
              <p
                style={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                EDUCATION FOR SYRIAN CHILD
              </p>
              <p style={{ fontSize: "16px" }}>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
              </p>
            </div>
          </div>
          <div className="col">
            <img className="rect" src={r} alt="vtgt" />
            <div
              className="text"
              style={{ alignItems: "center", marginTop: "20px" }}
            >
              <p
                style={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  width: "250px",
                  marginTop: "20px",
                }}
              >
                HOME FOR KAMPAR'S CHILD
              </p>
              <p style={{ fontSize: "16px" }}>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
              </p>
            </div>
            <p>
              <button
                className="b-1"
                style={{
                  marginTop: "25px",
                  left: " 20%",
                  height: "70px",
                  width: "200px",
                }}
                onClick={thankyou}
              >
                {" "}
                Donate
              </button>
            </p>
          </div>

          <div className="col">
            <img className="rect" src={r} alt="vtgt" />
            <div
              className="text"
              style={{
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "Lora",
                  fontSize: "18px",
                }}
              >
                CLEAN WATER FOR SOUTH SUDAN'S
              </p>
              <p style={{ fontSize: "16px" }}>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
              </p>
            </div>
          </div>

          <div className="col"></div>
        </div>
        <div className="row sec-8 ">
          <div className="col-2"></div>
          <div className="col-10 sec-8-2">
            <p
              style={{
                fontFamily: "Lora",

                fontweight: "700",
                fontSize: "54px ",
                lineheight: "69px",
                textAlign: "center",
                color: "#333333",
                marginTop: "100px",
              }}
            >
              Why <span style={{ color: "orangered" }}>Choose </span>Us
            </p>
            <p style={{ fontSize: "16px" }}>
              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium dolore mque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut
              perspiciatis unde omnis iste natus error sit . Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborumTeritatis et quasi architecto.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo invent. Sed ut perspiciatis unde omnis iste natus
              error sit . Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="vedio ">
              <ReactPlayer
                class="vedio"
                url="./src/components/my_vedio.mp4"
                controls={true}
                onPlay={() => console.log("video is playing")}
                onPause={() => console.log("video is paused")}
                style={{ left: "25%", position: "relative", marginTop: "5px" }}
              />
            </div>
          </div>
        </div>
        <div className="row sec-9">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="i1">
              <img className="flag" src={flag} alt="frgr" />
            </div>
            <div className="t1">
              <div>
                {" "}
                <p className="m-0"> 12,280</p>
                <p className="m-0" style={{ fontSize: "18px", color: "white" }}>
                  Selected
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <div className="i1">
              <img className="flag" src={peop} alt="frgr" />
            </div>
            <div className="t1">
              <p style={{ margin: "0px" }}>1825</p>
              <p style={{ fontSize: "18px", color: "white", margin: "0px" }}>
                {" "}
                0ur Team
              </p>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center">
            <div className="i1">
              <img className="flag" src={cup} alt="frgr" />
            </div>
            <div className="t1">
              <p style={{ margin: "0px" }}> 37</p>
              <p style={{ fontSize: "18px", color: "white", margin: "0px" }}>
                {" "}
                Awards
              </p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="i1">
              <img className="flag" src={per} alt="frgr" />
            </div>
            <div className="t1">
              <p style={{ margin: "0px" }}> 256,861</p>
              <p style={{ fontSize: "18px", color: "white", margin: "0px" }}>
                {" "}
                Volunteer
              </p>
            </div>
          </div>
        </div>
        <div className="row sec-10 ">
          <p
            style={{
              fontFamily: "Lora",

              fontweight: "700",
              lineheight: "69px",
              textAlign: "center",
            }}
          >
            <h1>
              <b>Contact</b>
            </h1>
          </p>
          <p
            style={{
              fontweight: "700",
              lineheight: "69px",
              textAlign: "center",
            }}
          >
            Home / Contact
          </p>
        </div>
        <div className="row sec-11">
          <div className="col-2"></div>
          <div className="col-5 d-flex justify-content-center ">
            <p>
              <img
                src={maps}
                style={{ width: "600px", height: "350px", marginTop: "150px" }}
                alt="fwe"
              />
            </p>
          </div>
          <div className="col-5 ">
            <p
              style={{
                fontFamily: "Lora",
                color: "orange",
                fontSize: "25px",

                fontweight: "700",
                lineheight: "69px",
                marginTop: "150px",
              }}
            >
              <b>Contact Info</b>
            </p>
            <ul style={{ listStyleType: "none", display: "contents" }}>
              <li
                style={{
                  width: "343px",
                  display: "flex",
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                <div className="j">
                  <img className="j1" src={msg} alt="frgr" />
                </div>
                99 S.t Jomblo Park Pekanbaru 28292. Indonesia
              </li>
              <li
                style={{
                  width: "300px",
                  display: "flex",
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                <div className="j">
                  <img className="j1" src={call} alt="frgr" />
                </div>
                info@yoursite.com
              </li>
              <li
                style={{
                  width: "300px",
                  display: "flex",
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                <div className="j">
                  <img className="j1" src={call} alt="frgr" />
                </div>
                (0761) 654-123987
              </li>
            </ul>
          </div>
        </div>
        <div className="row sec-12">
          <div className="col-2"></div>
          <div className="col-5 y">
            <p
              style={{
                fontFamily: "Lora",

                fontweight: "700",
                fontSize: "44px ",
                lineheight: "69px",
                marginTop: "30px",

                color: "Black",
              }}
            >
              <b>
                {" "}
                Send a <span style={{ color: "orangered" }}>Message</span>{" "}
              </b>
            </p>
            <p style={{ width: "632px", fontSize: "12px" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo invent.
            </p>
            <div className="forms">
              <form>
                <ul
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexWrap: " wrap",
                  }}
                >
                  <li style={{ margin: "15px" }}>
                    <label for="fname">First name:</label>
                    <br></br>

                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      style={{ width: "250px", height: "50px" }}
                    />
                  </li>
                  <li style={{ margin: "15px" }}>
                    <label for="lname">Last name:</label>
                    <br></br>

                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      style={{ width: "250px", height: "50px" }}
                    />
                  </li>
                  <li style={{ margin: "15px" }}>
                    <label for="fname">Phone Number</label>
                    <br></br>

                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      style={{ width: "250px", height: "50px" }}
                    />
                  </li>
                  <li style={{ margin: "15px" }}>
                    <label for="lname">Subject </label>
                    <br></br>

                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      style={{ width: "250px", height: "50px" }}
                    />
                  </li>
                  <li style={{ margin: "15px" }}>
                    <label for="lname">Subject </label>
                    <br></br>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      style={{ width: "530px", height: "200px" }}
                    />{" "}
                  </li>
                </ul>
              </form>

              <p style={{ fontSize: "14px", marginTop: "50px" }}>
                <i>
                  Note: Consectetur adipisicing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </i>
              </p>
              <p>
                <button
                  className="b-1"
                  style={{ marginTop: "25px" }}
                  onClick={thankyou}
                >
                  {" "}
                  <span style={{ color: "whitesmoke" }}> Send Message</span>
                </button>
              </p>
            </div>
          </div>
          <div className="col-5 "></div>
        </div>
        <div className="row sec-13">
          <div className="col-9 d-flex justify-content-center align-items-center">
            <p
              style={{
                fontFamily: "Lora",
                color: "whitesmoke",
                fontSize: "25px",
              }}
            >
              Join your hand with us for a better life and beautiful future.
            </p>
          </div>
          <div className="col-3 d-flex justify-content-start align-items-center">
            <button className="buo" onClick={thankyou}>
              {" "}
              <span style={{ color: "whitesmoke" }}> Donate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mains;
