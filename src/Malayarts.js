import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Popover,
  Row,
  Overlasltrigger,
  Tooltip,
} from "react-bootstrap";
import emptypic from "./pics/malayculture/empty.jpg";
import bt from "./pics/malayculture/bt.jpg";
import btwk from "./pics/malayculture/btwk.jpg";
import slt from "./pics/malayculture/slt.jpg";
import sltbt from "./pics/malayculture/sltbt.jpg";
import sltwk from "./pics/malayculture/sltwk.jpg";
import wk from "./pics/malayculture/wk.jpg";
import all from "./pics/malayculture/all.jpg";
import MalayartsImage from "./components/MalayartsImage";

const Malayarts = () => {
  var [btdone, setbt] = useState(0);
  var [sltdone, setslt] = useState(0);
  var [wkdone, setwk] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showbt, setshowbt] = useState(true);
  var [showslt, setshowslt] = useState(true);
  var [showwk, setshowwk] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd) {
    switch (fd) {
      case bt:
        setbt(1);
        setshowbt(false);
        break;
      case slt:
        setslt(1);
        setshowslt(false);
        break;
      case wk:
        setwk(1);
        setshowwk(false);
        break;
    }
  }
  function changePic(food) {
    if (btdone === 0 && sltdone === 0 && wkdone === 0) {
      setImage(food);
      checkFood(food);
    } else if (btdone === 1 && sltdone === 0 && wkdone === 0) {
      switch (food) {
        case slt:
          setImage(sltbt);
          break;
        case wk:
          setImage(btwk);
          break;
      }
      checkFood(food);
    } else if (btdone === 0 && sltdone === 1 && wkdone === 0) {
      switch (food) {
        case bt:
          setImage(sltbt);
          break;
        case wk:
          setImage(sltwk);
          break;
      }
      checkFood(food);
    } else if (btdone === 0 && sltdone === 0 && wkdone === 1) {
      switch (food) {
        case bt:
          setImage(btwk);
          break;
        case slt:
          setImage(sltwk);
          break;
      }
      checkFood(food);
    } else if (
      (btdone === 1 && sltdone === 1 && wkdone === 0) ||
      (btdone === 1 && sltdone === 0 && wkdone === 1) ||
      (btdone === 0 && sltdone === 1 && wkdone === 1)
    ) {
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  }

  function dragbt(ev) {
    ev.dataTransfer.setData("text", "bt");
  }
  function dragslt(ev) {
    ev.dataTransfer.setData("text", "slt");
  }
  function dragwk(ev) {
    ev.dataTransfer.setData("text", "wk");
  }

  function dropbt(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "bt") {
      changePic(bt);
    }
  }
  function dropslt(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "slt") {
      changePic(slt);
    }
  }
  function dropwk(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "wk") {
      changePic(wk);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div className="App2">
      <div className="preload">
        <img src={emptypic} />
        <img src={bt} />
        <img src={slt} />
        <img src={wk} />
        <img src={btwk} />
        <img src={sltbt} />
        <img src={sltwk} />
        <img src={all} />
      </div>
      <div>
        <MalayartsImage
          src={image}
          duration={500}
          timingFunction={"linear"}
          dropbt={dropbt}
          dropslt={dropslt}
          dropwk={dropwk}
          allowDrop={allowDrop}
          alldone={alldone}
          setalldone={setalldone}
        />
      </div>
      <div className="palettes">
        {showbt ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragbt(event)}
            style={{ backgroundColor: "salmon" }}
          ></div>
        ) : null}
        {showslt ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragslt(event)}
            style={{ backgroundColor: "black" }}
          ></div>
        ) : null}
        {showwk ? (
          <div
            className="color-swatch"
            draggable="true"
            onDragStart={(event) => dragwk(event)}
            style={{ backgroundColor: "gray" }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default Malayarts;
