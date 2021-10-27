import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlasaririgger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/indiancostume/empty.jpg";
import kurta from "./pics/indiancostume/kurta.jpg";
import sari from "./pics/indiancostume/sari.jpg";
import all from "./pics/indiancostume/full.jpg";
import IndiancostumeImage from "./components/IndiancostumeImage";

const Indiancostume = () => {
  var [kurtadone, setkurta] = useState(0);
  var [saridone, setsari] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showkurta, setshowkurta] = useState(true);
  var [showsari, setshowsari] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case kurta:
        setkurta(1);
        setshowkurta(false);
        break;
      case sari:
        setsari(1);
        setshowsari(false);
        break;
    }
  }
  function changePic(food) {
    if (kurtadone === 0 && saridone === 0) {
      setImage(food);
      checkFood(food);
    } else if (
      (kurtadone === 1 && saridone === 0) ||
      (kurtadone === 0 && saridone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragkurta(ev) {
    ev.dataTransfer.setData("text", "kurta");
  }
  function dragsari(ev) {
    ev.dataTransfer.setData("text", "sari");
  }

  function dropkurta(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "kurta") {
      changePic(kurta);
    }
  }
  function dropsari(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "sari") {
      changePic(sari);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div className="preload">
        <img src={emptypic} />
        <img src={kurta} />
        <img src={sari} />
        <img src={all} />
      </div>
      <div>
        <IndiancostumeImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropkurta={dropkurta}
          dropsari={dropsari}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showkurta ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragkurta(event)}
            style={{ backgroundColor: "cadetblue" }}
          ></div>
        ) : null}
        {showsari ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragsari(event)}
            style={{ backgroundColor: "firebrick" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Indiancostume;
