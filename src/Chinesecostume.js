import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlatsrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/chinesecostume/empty.jpg";
import cs from "./pics/chinesecostume/cs.jpg";
import ts from "./pics/chinesecostume/ts.jpg";
import all from "./pics/chinesecostume/all.jpg";
import ChinesecostumeImage from "./components/ChinesecostumeImage";

const Malaycostume = () => {
  var [csdone, setcs] = useState(0);
  var [tsdone, setts] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showcs, setshowcs] = useState(true);
  var [showts, setshowts] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case cs:
        setcs(1);
        setshowcs(false);
        break;
      case ts:
        setts(1);
        setshowts(false);
        break;
    }
  }
  function changePic(food) {
    if (csdone === 0 && tsdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (
      (csdone === 1 && tsdone === 0) ||
      (csdone === 0 && tsdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragcs(ev) {
    ev.dataTransfer.setData("text", "cs");
  }
  function dragts(ev) {
    ev.dataTransfer.setData("text", "ts");
  }

  function dropcs(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "cs") {
      changePic(cs);
    }
  }
  function dropts(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "ts") {
      changePic(ts);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div>
        <ChinesecostumeImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropcs={dropcs}
          dropts={dropts}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showcs ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragcs(event)}
            style={{ backgroundColor: "red" }}
          ></div>
        ) : null}
        {showts ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragts(event)}
            style={{ backgroundColor: "darkred" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Malaycostume;
