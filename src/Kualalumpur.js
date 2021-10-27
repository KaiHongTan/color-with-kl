import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import KlImage from './components/KlImage';
import { Col, Container, Popover, Row , Overlamatraderigger, Tooltip} from 'react-bootstrap';
import emptypic from "./pics/kl/empty.jpg"
import klt from "./pics/kl/klt.jpg"
import kltmatrade from "./pics/kl/kltmatrade.jpg"
import kltmatrademitec from "./pics/kl/kltmatrademitec.jpg"
import kltmatradett from "./pics/kl/kltmatradett.jpg"
import kltmitec from "./pics/kl/kltmitec.jpg"
import kltmitectt from "./pics/kl/kltmitectt.jpg"
import klttt from "./pics/kl/klttt.jpg"
import matrade from "./pics/kl/matrade.jpg"
import matradett from "./pics/kl/matradett.jpg"
import mitec from "./pics/kl/mitec.jpg"
import mitecmatrade from "./pics/kl/mitecmatrade.jpg"
import mitecmatradett from "./pics/kl/mitecmatradett.jpg"
import mitectt from "./pics/kl/mitectt.jpg"
import tt from "./pics/kl/tt.jpg"
import all from "./pics/kl/full.jpg"


const Kualalumpur = () => {
  var [kltdone, setklt] = useState(0);
  var [matradedone, setmatrade] = useState(0);
  var [mitecdone, setmitec] = useState(0);
  var [ttdone, settt] = useState(0);
  var [image, setImage] = useState(emptypic);
  var [showklt, setshowklt] = useState(true);
  var [showmatrade, setshowmatrade] = useState(true);
  var [showmitec, setshowmitec] = useState(true);
  var [showtt, setshowtt] = useState(true);
  var [alldone, setalldone] = useState(false);
  function checkFood(fd){
    switch(fd){
      case klt:
        setklt(1);
        setshowklt(false);
        break;
      case matrade:
        setmatrade(1);
        setshowmatrade(false);
        break;
      case mitec:
        setmitec(1);
        setshowmitec(false);
        break;
      case tt:
        settt(1);
        setshowtt(false);
        break;
    }
  }
  function changePic(food){
    if ((kltdone===0 && matradedone===0 && mitecdone===0 && ttdone===0)){
        setImage(food);
        checkFood(food);
    }
    else if ((kltdone===1 && matradedone===0 && mitecdone===0 && ttdone===0)){
      switch(food){
        case matrade:
          setImage(kltmatrade);
          break;
        case mitec:
          setImage(kltmitec);
          break;
        case tt:
          setImage(klttt);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===0 && matradedone===1 && mitecdone===0 && ttdone===0)){
      switch(food){
        case klt:
          setImage(kltmatrade);
          break;
        case mitec:
          setImage(mitecmatrade);
          break;
        case tt:
          setImage(mitectt);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===0 && matradedone===0 && mitecdone===1 && ttdone===0)){
      switch(food){
        case klt:
          setImage(kltmitec);
          break;
        case matrade:
          setImage(mitecmatrade);
          break;
        case tt:
          setImage(mitectt);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===0 && matradedone===0 && mitecdone===0 && ttdone===1)){
      switch(food){
        case klt:
          setImage(klttt);
          break;
        case matrade:
          setImage(matradett);
          break;
        case mitec:
          setImage(mitectt);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===1 && matradedone===1 && mitecdone===0 && ttdone===0)){
      switch(food){
        case mitec:
          setImage(kltmatrademitec);
          break;
        case tt:
          setImage(kltmatradett);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===1 && matradedone===0 && mitecdone===1 && ttdone===0)){
      switch(food){
        case matrade:
          setImage(kltmatrademitec);
          break;
        case tt:
          setImage(kltmitectt);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===1 && matradedone===0 && mitecdone===0 && ttdone===1)){
      switch(food){
        case mitec:
          setImage(kltmitectt);
          break;
        case matrade:
          setImage(kltmatradett);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===0 && matradedone===1 && mitecdone===1 && ttdone===0)){
      switch(food){
        case klt:
          setImage(kltmatrademitec);
          break;
        case tt:
          setImage(mitecmatradett);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===0 && matradedone===1 && mitecdone===0 && ttdone===1)){
      switch(food){
        case klt:
          setImage(kltmatradett);
          break;
        case mitec:
          setImage(mitecmatradett);
          break;
      }
      checkFood(food);
    }
    else if ((kltdone===0 && matradedone===0 && mitecdone===1 && ttdone===1)){
      switch(food){
        case klt:
          setImage(kltmitectt);
          break;
        case matrade:
          setImage(mitecmatradett);
          break;
      }
      checkFood(food);
    }
    else if (((kltdone===1 && matradedone===1 && mitecdone===1 && ttdone===0))||
    ((kltdone===0 && matradedone===1 && mitecdone===1 && ttdone===1))||
    ((kltdone===1 && matradedone===0 && mitecdone===1 && ttdone===1))||
    ((kltdone===1 && matradedone===1 && mitecdone===0 && ttdone===1))){
      setImage(all);
      checkFood(food);
      setalldone(true);
    }
  };

  function dragklt(ev){
    ev.dataTransfer.setData("text", "klt")
  }
  function dragmatrade(ev){
    ev.dataTransfer.setData("text", "matrade")
  }
  function dragmitec(ev){
    ev.dataTransfer.setData("text", "mitec")
  }
  function dragtt(ev){
    ev.dataTransfer.setData("text", "tt")
  }

  function dropklt(ev){
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "klt"){
      changePic(klt)
    }
  }
  function dropmatrade(ev){
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "matrade"){
      changePic(matrade)
    }
  }
  function dropmitec(ev){
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "mitec"){
      changePic(mitec)
    }
  }
  function droptt(ev){
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    if (data === "tt"){
      changePic(tt)
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }


  return (
    <div className="App2">

      <div>
      
          <KlImage
              src={image}
              duration={500}
              timingFunction={"linear"}
              dropklt={dropklt}
              dropmatrade={dropmatrade}
              dropmitec={dropmitec}
              droptt={droptt}
              allowDrop={allowDrop}
              alldone={alldone}
              setalldone={setalldone}
          />

        </div>
        <div className="palettes">
                {showklt ? <div className="color-swatch" draggable="true" onDragStart={(event)=>dragklt(event)} style={{backgroundColor: 'darkgray'}}></div> :null}
                {showmatrade ? <div className="color-swatch"  draggable="true" onDragStart={(event)=>dragmatrade(event)} style={{backgroundColor: 'steelblue'}}></div> :null}
                {showmitec ? <div className="color-swatch"  draggable="true" onDragStart={(event)=>dragmitec(event)} style={{backgroundColor: 'lightsteelblue'}}></div>: null}
                {showtt ? <div className="color-swatch"  draggable="true" onDragStart={(event)=>dragtt(event)} style={{backgroundColor: 'thistle'}}></div>: null} 
        </div>

    </div>
  )
}

export default Kualalumpur;
