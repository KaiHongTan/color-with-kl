import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlacrrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/chinesefood/empty.jpg";
import bkt from "./pics/chinesefood/bkt.jpg";
import bktcr from "./pics/chinesefood/bktcr.jpg";
import cr from "./pics/chinesefood/cr.jpg";
import ys from "./pics/chinesefood/ys.jpg";
import bktys from "./pics/chinesefood/bktys.jpg";
import yscr from "./pics/chinesefood/yscr.jpg";
import all from "./pics/chinesefood/full.jpg";
import ChinesefoodImage from "./components/ChinesefoodImage";

const Chinesefood = () => {
  var [bktdone, setbkt] = useState(0);
  var [crdone, setcr] = useState(0);
  var [ysdone, setys] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showbkt, setshowbkt] = useState(true);
  var [showcr, setshowcr] = useState(true);
  var [showys, setshowys] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case bkt:
        setbkt(1);
        setshowbkt(false);
        break;
      case cr:
        setcr(1);
        setshowcr(false);
        break;
      case ys:
        setys(1);
        setshowys(false);
        break;
    }
  }
  function changePic(food) {
    if (bktdone === 0 && crdone === 0 && ysdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (bktdone === 1 && crdone === 0 && ysdone === 0) {
      switch (food) {
        case cr:
          setImage(bktcr);
          break;
        case ys:
          setImage(bktys);
          break;
      }
      checkFood(food);
    } else if (bktdone === 0 && crdone === 1 && ysdone === 0) {
      switch (food) {
        case bkt:
          setImage(bktcr);
          break;
        case ys:
          setImage(yscr);
          break;
      }
      checkFood(food);
    } else if (bktdone === 0 && crdone === 0 && ysdone === 1) {
      switch (food) {
        case bkt:
          setImage(bktys);
          break;
        case cr:
          setImage(yscr);
          break;
      }
      checkFood(food);
    } else if (
      (bktdone === 1 && crdone === 1 && ysdone === 0) ||
      (bktdone === 1 && crdone === 0 && ysdone === 1) ||
      (bktdone === 0 && crdone === 1 && ysdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragbkt(ev) {
    ev.dataTransfer.setData("text", "bkt");
  }
  function dragcr(ev) {
    ev.dataTransfer.setData("text", "cr");
  }
  function dragys(ev) {
    ev.dataTransfer.setData("text", "ys");
  }

  function dropbkt(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "bkt") {
      changePic(bkt);
    }
  }
  function dropcr(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "cr") {
      changePic(cr);
    }
  }
  function dropys(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "ys") {
      changePic(ys);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div className="preload">
        <img src={emptypic} />
        <img src={bkt} />
        <img src={cr} />
        <img src={ys} />
        <img src={bktcr} />
        <img src={yscr} />
        <img src={bktys} />
        <img src={all} />
      </div>
      <div>
        <ChinesefoodImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropbkt={dropbkt}
          dropcr={dropcr}
          dropys={dropys}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showbkt ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragbkt(event)}
            style={{ backgroundColor: "sienna" }}
          ></div>
        ) : null}
        {showcr ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragcr(event)}
            style={{ backgroundColor: "palegoldenrod" }}
          ></div>
        ) : null}
        {showys ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragys(event)}
            style={{ backgroundColor: "crimson" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Chinesefood;
