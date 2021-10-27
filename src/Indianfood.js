import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlanbrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/indianfood/empty.jpg";
import cpt from "./pics/indianfood/cpt.jpg";
import cptnb from "./pics/indianfood/nbcpt.jpg";
import nb from "./pics/indianfood/nb.jpg";
import rc from "./pics/indianfood/rc.jpg";
import rccpt from "./pics/indianfood/rccpt.jpg";
import rcnb from "./pics/indianfood/nbrc.jpg";
import all from "./pics/indianfood/full.jpg";
import IndianfoodImage from "./components/IndianfoodImage";

const Indianfood = () => {
  var [cptdone, setcpt] = useState(0);
  var [nbdone, setnb] = useState(0);
  var [rcdone, setrc] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showcpt, setshowcpt] = useState(true);
  var [shownb, setshownb] = useState(true);
  var [showrc, setshowrc] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case cpt:
        setcpt(1);
        setshowcpt(false);
        break;
      case nb:
        setnb(1);
        setshownb(false);
        break;
      case rc:
        setrc(1);
        setshowrc(false);
        break;
    }
  }
  function changePic(food) {
    if (cptdone === 0 && nbdone === 0 && rcdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (cptdone === 1 && nbdone === 0 && rcdone === 0) {
      switch (food) {
        case nb:
          setImage(cptnb);
          break;
        case rc:
          setImage(rccpt);
          break;
      }
      checkFood(food);
    } else if (cptdone === 0 && nbdone === 1 && rcdone === 0) {
      switch (food) {
        case cpt:
          setImage(cptnb);
          break;
        case rc:
          setImage(rcnb);
          break;
      }
      checkFood(food);
    } else if (cptdone === 0 && nbdone === 0 && rcdone === 1) {
      switch (food) {
        case cpt:
          setImage(rccpt);
          break;
        case nb:
          setImage(rcnb);
          break;
      }
      checkFood(food);
    } else if (
      (cptdone === 1 && nbdone === 1 && rcdone === 0) ||
      (cptdone === 1 && nbdone === 0 && rcdone === 1) ||
      (cptdone === 0 && nbdone === 1 && rcdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragcpt(ev) {
    ev.dataTransfer.setData("text", "cpt");
  }
  function dragnb(ev) {
    ev.dataTransfer.setData("text", "nb");
  }
  function dragrc(ev) {
    ev.dataTransfer.setData("text", "rc");
  }

  function dropcpt(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "cpt") {
      changePic(cpt);
    }
  }
  function dropnb(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "nb") {
      changePic(nb);
    }
  }
  function droprc(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "rc") {
      changePic(rc);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div>
        <IndianfoodImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropcpt={dropcpt}
          dropnb={dropnb}
          droprc={droprc}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showcpt ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragcpt(event)}
            style={{ backgroundColor: "sandybrown" }}
          ></div>
        ) : null}
        {shownb ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragnb(event)}
            style={{ backgroundColor: "saddlebrown" }}
          ></div>
        ) : null}
        {showrc ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragrc(event)}
            style={{ backgroundColor: "peachpuff" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Indianfood;
