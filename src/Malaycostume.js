import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlabmrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/malaycostume/empty.jpg";
import bk from "./pics/malaycostume/bk.jpg";
import bm from "./pics/malaycostume/bm.jpg";
import all from "./pics/malaycostume/full.jpg";
import MalaycostumeImage from "./components/MalaycostumeImage";

const Malaycostume = () => {
  var [bkdone, setbk] = useState(0);
  var [bmdone, setbm] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showbk, setshowbk] = useState(true);
  var [showbm, setshowbm] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case bk:
        setbk(1);
        setshowbk(false);
        break;
      case bm:
        setbm(1);
        setshowbm(false);
        break;
    }
  }
  function changePic(food) {
    if (bkdone === 0 && bmdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (
      (bkdone === 1 && bmdone === 0) ||
      (bkdone === 0 && bmdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragbk(ev) {
    ev.dataTransfer.setData("text", "bk");
  }
  function dragbm(ev) {
    ev.dataTransfer.setData("text", "bm");
  }

  function dropbk(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "bk") {
      changePic(bk);
    }
  }
  function dropbm(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "bm") {
      changePic(bm);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div>
        <MalaycostumeImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropbk={dropbk}
          dropbm={dropbm}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showbk ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragbk(event)}
            style={{ backgroundColor: "firebrick" }}
          ></div>
        ) : null}
        {showbm ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragbm(event)}
            style={{ backgroundColor: "plum" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Malaycostume;
