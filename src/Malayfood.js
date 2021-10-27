import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlanlrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/malayfood/empty.jpg";
import ktp from "./pics/malayfood/ktp.jpg";
import ktpnl from "./pics/malayfood/ktpnl.jpg";
import nl from "./pics/malayfood/nl.jpg";
import rj from "./pics/malayfood/rj.jpg";
import rjktp from "./pics/malayfood/rjktp.jpg";
import rjnl from "./pics/malayfood/rjnl.jpg";
import all from "./pics/malayfood/full.jpg";
import MalayfoodImage from "./components/MalayfoodImage";

const Malayfood = () => {
  var [ktpdone, setktp] = useState(0);
  var [nldone, setnl] = useState(0);
  var [rjdone, setrj] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showktp, setshowktp] = useState(true);
  var [shownl, setshownl] = useState(true);
  var [showrj, setshowrj] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case ktp:
        setktp(1);
        setshowktp(false);
        break;
      case nl:
        setnl(1);
        setshownl(false);
        break;
      case rj:
        setrj(1);
        setshowrj(false);
        break;
    }
  }
  function changePic(food) {
    if (ktpdone === 0 && nldone === 0 && rjdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (ktpdone === 1 && nldone === 0 && rjdone === 0) {
      switch (food) {
        case nl:
          setImage(ktpnl);
          break;
        case rj:
          setImage(rjktp);
          break;
      }
      checkFood(food);
    } else if (ktpdone === 0 && nldone === 1 && rjdone === 0) {
      switch (food) {
        case ktp:
          setImage(ktpnl);
          break;
        case rj:
          setImage(rjnl);
          break;
      }
      checkFood(food);
    } else if (ktpdone === 0 && nldone === 0 && rjdone === 1) {
      switch (food) {
        case ktp:
          setImage(rjktp);
          break;
        case nl:
          setImage(rjnl);
          break;
      }
      checkFood(food);
    } else if (
      (ktpdone === 1 && nldone === 1 && rjdone === 0) ||
      (ktpdone === 1 && nldone === 0 && rjdone === 1) ||
      (ktpdone === 0 && nldone === 1 && rjdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragktp(ev) {
    ev.dataTransfer.setData("text", "ktp");
  }
  function dragnl(ev) {
    ev.dataTransfer.setData("text", "nl");
  }
  function dragrj(ev) {
    ev.dataTransfer.setData("text", "rj");
  }

  function dropktp(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "ktp") {
      changePic(ktp);
    }
  }
  function dropnl(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "nl") {
      changePic(nl);
    }
  }
  function droprj(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "rj") {
      changePic(rj);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div>
        <MalayfoodImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropktp={dropktp}
          dropnl={dropnl}
          droprj={droprj}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showktp ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragktp(event)}
            style={{ backgroundColor: "wheat" }}
          ></div>
        ) : null}
        {shownl ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragnl(event)}
            style={{ backgroundColor: "seagreen" }}
          ></div>
        ) : null}
        {showrj ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragrj(event)}
            style={{ backgroundColor: "gold" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Malayfood;
