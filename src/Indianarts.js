import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlakolamrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/indianart/empty.jpg";
import henna from "./pics/indianart/henna.jpg";
import kolam from "./pics/indianart/kolam.jpg";
import all from "./pics/indianart/full.jpg";
import IndianartsImage from "./components/IndianartsImage";

const Indianarts = () => {
  var [hennadone, sethenna] = useState(0);
  var [kolamdone, setkolam] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showhenna, setshowhenna] = useState(true);
  var [showkolam, setshowkolam] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case henna:
        sethenna(1);
        setshowhenna(false);
        break;
      case kolam:
        setkolam(1);
        setshowkolam(false);
        break;
    }
  }
  function changePic(food) {
    if (hennadone === 0 && kolamdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (
      (hennadone === 1 && kolamdone === 0) ||
      (hennadone === 0 && kolamdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function draghenna(ev) {
    ev.dataTransfer.setData("text", "henna");
  }
  function dragkolam(ev) {
    ev.dataTransfer.setData("text", "kolam");
  }

  function drophenna(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "henna") {
      changePic(henna);
    }
  }
  function dropkolam(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "kolam") {
      changePic(kolam);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div className="preload">
        <img src={emptypic} />
        <img src={henna} />
        <img src={kolam} />
        <img src={all} />
      </div>
      <div>
        <IndianartsImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          drophenna={drophenna}
          dropkolam={dropkolam}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showhenna ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => draghenna(event)}
            style={{ backgroundColor: "papayawhip" }}
          ></div>
        ) : null}
        {showkolam ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragkolam(event)}
            style={{ backgroundColor: "crimson" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Indianarts;
