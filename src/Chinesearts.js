import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlafdrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/chineseart/empty.jpg";
import cpc from "./pics/chineseart/cpc.jpg";
import cpcld from "./pics/chineseart/ldcpc.jpg";
import fd from "./pics/chineseart/fd.jpg";
import fdcpc from "./pics/chineseart/fdcpc.jpg";
import fdld from "./pics/chineseart/fdld.jpg";
import ld from "./pics/chineseart/ld.jpg";
import all from "./pics/chineseart/full.jpg";
import ChineseartsImage from "./components/ChineseartsImage";

const Chinesearts = () => {
  var [cpcdone, setcpc] = useState(0);
  var [fddone, setfd] = useState(0);
  var [lddone, setld] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showcpc, setshowcpc] = useState(true);
  var [showfd, setshowfd] = useState(true);
  var [showld, setshowld] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fod) {
    switch (fod) {
      case cpc:
        setcpc(1);
        setshowcpc(false);
        break;
      case fd:
        setfd(1);
        setshowfd(false);
        break;
      case ld:
        setld(1);
        setshowld(false);
        break;
    }
  }
  function changePic(food) {
    if (cpcdone === 0 && fddone === 0 && lddone === 0) {
      setImage(food);
      checkFood(food);
    } else if (cpcdone === 1 && fddone === 0 && lddone === 0) {
      switch (food) {
        case fd:
          setImage(fdcpc);
          break;
        case ld:
          setImage(cpcld);
          break;
      }
      checkFood(food);
    } else if (cpcdone === 0 && fddone === 1 && lddone === 0) {
      switch (food) {
        case cpc:
          setImage(fdcpc);
          break;
        case ld:
          setImage(fdld);
          break;
      }
      checkFood(food);
    } else if (cpcdone === 0 && fddone === 0 && lddone === 1) {
      switch (food) {
        case cpc:
          setImage(cpcld);
          break;
        case fd:
          setImage(fdld);
          break;
      }
      checkFood(food);
    } else if (
      (cpcdone === 1 && fddone === 1 && lddone === 0) ||
      (cpcdone === 1 && fddone === 0 && lddone === 1) ||
      (cpcdone === 0 && fddone === 1 && lddone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragcpc(ev) {
    ev.dataTransfer.setData("text", "cpc");
  }
  function dragfd(ev) {
    ev.dataTransfer.setData("text", "fd");
  }
  function dragld(ev) {
    ev.dataTransfer.setData("text", "ld");
  }

  function dropcpc(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "cpc") {
      changePic(cpc);
    }
  }
  function dropfd(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "fd") {
      changePic(fd);
    }
  }
  function dropld(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "ld") {
      changePic(ld);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div>
        <ChineseartsImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropcpc={dropcpc}
          dropfd={dropfd}
          dropld={dropld}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showcpc ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragcpc(event)}
            style={{ backgroundColor: "maroon" }}
          ></div>
        ) : null}
        {showfd ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragfd(event)}
            style={{ backgroundColor: "saddlebrown" }}
          ></div>
        ) : null}
        {showld ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragld(event)}
            style={{ backgroundColor: "orange" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Chinesearts;
