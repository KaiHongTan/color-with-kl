import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bwkl from "../pics/bwkl.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header container-fluid">
        <Container>
          <img className="center" src={bwkl} style={{ width: "100px" }}></img>
          <Container className="margin">
            <h2 className="center">Colour With KL</h2>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Header;
