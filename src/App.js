import React, { useState, FunctionComponent } from "react";
import Kualalumpur from "./Kualalumpur";
import Shopping from "./Shopping";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Row, Col, Stack, Accordion } from "react-bootstrap";
import Malayfood from "./Malayfood";
import Malayarts from "./Malayarts";
import Malaycostume from "./Malaycostume";
import Chinesearts from "./Chinesearts";
import Chinesecostume from "./Chinesecostume";
import Indianfood from "./Indianfood";
import Indiancostume from "./Indiancostume";
import Indianarts from "./Indianarts";
import Chinesefood from "./Chinesefood";
import ScriptTag from "react-script-tag";

const App = () => {
  var [showmenu, setshowmenu] = useState(true);
  var [showkl, setshowkl] = useState(true);
  var [showshopping, setshowshopping] = useState(false);
  var [showmalayfood, setshowmalayfood] = useState(false);
  var [showmalayarts, setshowmalayarts] = useState(false);
  var [showmalaycostume, setshowmalaycostume] = useState(false);
  var [showchinesearts, setshowchinesearts] = useState(false);
  var [showchinesefood, setshowchinesefood] = useState(false);
  var [showchinesecostume, setshowchinesecostume] = useState(false);
  var [showindianfood, setshowindianfood] = useState(false);
  var [showindianarts, setshowindianarts] = useState(false);
  var [showindiancostume, setshowindiancostume] = useState(false);

  const isLoaded = () => {
    if (window.innerWidth < 601) {
      setshowmenu(false);
    }
  };

  const toggleMenu = () => {
    setshowmenu(!showmenu);
  };

  const disableAll = () => {
    setshowkl(false);
    setshowshopping(false);
    setshowmalayfood(false);
    setshowmalayarts(false);
    setshowmalaycostume(false);
    setshowchinesearts(false);
    setshowchinesefood(false);
    setshowchinesecostume(false);
    setshowindianfood(false);
    setshowindianarts(false);
    setshowindiancostume(false);
  };

  const openkl = () => {
    disableAll();
    setshowkl(true);
  };
  const openshopping = () => {
    disableAll();
    setshowshopping(true);
  };
  const openmalayfood = () => {
    disableAll();
    setshowmalayfood(true);
  };
  const openmalayarts = () => {
    disableAll();
    setshowmalayarts(true);
  };
  const openmalaycostume = () => {
    disableAll();
    setshowmalaycostume(true);
  };
  const openchinesefood = () => {
    disableAll();
    setshowchinesefood(true);
  };
  const openchinesearts = () => {
    disableAll();
    setshowchinesearts(true);
  };
  const openchinesecostume = () => {
    disableAll();
    setshowchinesecostume(true);
  };
  const openindianfood = () => {
    disableAll();
    setshowindianfood(true);
  };
  const openindianarts = () => {
    disableAll();
    setshowindianarts(true);
  };
  const openindiancostume = () => {
    disableAll();
    setshowindiancostume(true);
  };

  return (
    <div draggable="false">
      <div className="mainbody margin" draggable="false">
        <Header />
        <div draggable="false">
          <a
            className="sidetxt center"
            href="https://bewithkualalumpur.com"
            draggable="false"
          >
            Return to main site
          </a>
        </div>
      </div>
      <Stack gap={5} draggable="false">
        <div className="container" draggable="false">
          <Row>
            <Col sm={4}>
              <div className="mobnav" onClick={toggleMenu}>
                <div className="sidetxt center mobnav" draggable="false">
                  <br />
                  <div className="">
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className={showmenu ? null : "closed"}>
                <Stack gap={2}>
                  <div onClick={openkl}>
                    <div
                      className={
                        showkl
                          ? "container-fluid border sidebtn active"
                          : "container-fluid border sidebtn"
                      }
                    >
                      <div className="sidetxt">Kuala Lumpur</div>
                    </div>
                  </div>
                  <div onClick={openshopping}>
                    <div
                      className={
                        showshopping
                          ? "container-fluid border sidebtn active"
                          : "container-fluid border sidebtn"
                      }
                    >
                      <div className="sidetxt">Shopping @ Bukit Bintang</div>
                    </div>
                  </div>
                  <div className="container-fluid border sidegrp">
                    <div className="sidetxt">Culture - Malay</div>
                    <Stack gap={1}>
                      <div onClick={openmalayfood}>
                        <div
                          className={
                            showmalayfood
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Food</div>
                        </div>
                      </div>

                      <div onClick={openmalayarts}>
                        <div
                          className={
                            showmalayarts
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Arts</div>
                        </div>
                      </div>

                      <div onClick={openmalaycostume}>
                        <div
                          className={
                            showmalaycostume
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Traditional Costumes</div>
                        </div>
                      </div>

                      <div></div>
                    </Stack>
                  </div>
                  <div className="container-fluid border sidegrp">
                    <div className="sidetxt">Culture - Chinese</div>
                    <Stack gap={1}>
                      <div onClick={openchinesefood}>
                        <div
                          className={
                            showchinesefood
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Food</div>
                        </div>
                      </div>

                      <div onClick={openchinesearts}>
                        <div
                          className={
                            showchinesearts
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Arts</div>
                        </div>
                      </div>

                      <div onClick={openchinesecostume}>
                        <div
                          className={
                            showchinesecostume
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Traditional Costumes</div>
                        </div>
                      </div>
                      <div></div>
                    </Stack>
                  </div>
                  <div className="container-fluid border sidegrp">
                    <div className="sidetxt">Culture - Indian</div>
                    <Stack gap={1}>
                      <div onClick={openindianfood}>
                        <div
                          className={
                            showindianfood
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Food</div>
                        </div>
                      </div>

                      <div onClick={openindianarts}>
                        <div
                          className={
                            showindianarts
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Arts</div>
                        </div>
                      </div>

                      <div onClick={openindiancostume}>
                        <div
                          className={
                            showindiancostume
                              ? "container-fluid border sidebtn active"
                              : "container-fluid border sidebtn"
                          }
                        >
                          <div className="sidetxt">Traditional Costumes</div>
                        </div>
                      </div>
                      <div></div>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </Col>
            <Col
              sm={8}
              className="container-fluid border mainwindow"
              draggable="false"
            >
              {showkl ? <Kualalumpur draggable="false" /> : null}
              {showshopping ? <Shopping draggable="false" /> : null}
              {showmalayfood ? <Malayfood draggable="false" /> : null}
              {showmalayarts ? <Malayarts draggable="false" /> : null}
              {showmalaycostume ? <Malaycostume draggable="false" /> : null}
              {showchinesefood ? <Chinesefood draggable="false" /> : null}
              {showchinesearts ? <Chinesearts draggable="false" /> : null}
              {showchinesecostume ? <Chinesecostume draggable="false" /> : null}
              {showindianfood ? <Indianfood draggable="false" /> : null}
              {showindianarts ? <Indianarts draggable="false" /> : null}
              {showindiancostume ? <Indiancostume draggable="false" /> : null}

              <div
                className="container-fluid border center sidetxt"
                draggable="false"
              >
                <strong>Instructions:</strong>
                <p />
                <div>1. Select an image to colour and learn about.</div>
                <div>
                  <p />
                  2. Colour the entire image by drag-and-dropping the colour
                  palettes onto each item/element in the image and find the
                  correct combinations.
                </div>
                <div>
                  <p />
                  3. After an image is fully coloured, hover over (or tap on
                  mobile) each item/element in the image to learn more about it.
                </div>
                <div>
                  <p />
                  4. Rinse and repeat!
                </div>
                <div>
                  <p />
                  5. Enjoy!
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="">
          <div className="border mainwindow">
            <div className="footer footercenter">
              Made with ❤️ in Kuala Lumpur, Malaysia
            </div>
            <div className="footercenter footer">
              © 2021{" "}
              <a href="https://bewithkualalumpur.com">Be with Kuala Lumpur</a>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default App;
