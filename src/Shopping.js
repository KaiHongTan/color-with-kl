import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlasephorarigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/malls/empty.jpg";
import pavillion from "./pics/malls/pavillion.jpg";
import sephora from "./pics/malls/sephora.jpg";
import all from "./pics/malls/full.jpg";
import ShoppingImage from "./components/ShoppingImage";

const Shopping = () => {
  var [pavilliondone, setpavillion] = useState(0);
  var [sephoradone, setsephora] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showpavillion, setshowpavillion] = useState(true);
  var [showsephora, setshowsephora] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case pavillion:
        setpavillion(1);
        setshowpavillion(false);
        break;
      case sephora:
        setsephora(1);
        setshowsephora(false);
        break;
    }
  }
  function changePic(food) {
    if (pavilliondone === 0 && sephoradone === 0) {
      setImage(food);
      checkFood(food);
    } else if (
      (pavilliondone === 1 && sephoradone === 0) ||
      (pavilliondone === 0 && sephoradone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragpavillion(ev) {
    ev.dataTransfer.setData("text", "pavillion");
  }
  function dragsephora(ev) {
    ev.dataTransfer.setData("text", "sephora");
  }

  function droppavillion(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "pavillion") {
      changePic(pavillion);
    }
  }
  function dropsephora(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "sephora") {
      changePic(sephora);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div className="preload">
        <img src={emptypic} />
        <img src={sephora} />
        <img src={pavillion} />
        <img src={all} />
      </div>
      <div>
        <ShoppingImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          droppavillion={droppavillion}
          dropsephora={dropsephora}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showpavillion ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragpavillion(event)}
            style={{ backgroundColor: "salmon" }}
          ></div>
        ) : null}
        {showsephora ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragsephora(event)}
            style={{ backgroundColor: "steelblue" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Shopping;
