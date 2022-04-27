import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class CrossfadeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSrc: props.src,
      bottomOpacity: 0,
      bottomSrc: props.src,
    };
  }
  componentDidMount() {
    imageMapResize();
  }
  componentDidUpdate() {
    imageMapResize();
  }
  componentWillReceiveProps(newProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      // Reset the component everytime we receive new prop, to
      // cancel out any animation that's still going on
      this.setState({ bottomSrc: false, topSrc: true }, () =>
        this.setState(
          // Opacity less than 1 takes precendence in stacking order
          { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 0.99 },
          () => {
            // One of the few times setTimeout does wonders, this is for
            // getting fade out transition without css keyframe
            if (!this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
              () => this.setState({ bottomOpacity: 0 }),
              0
            );
          }
        )
      );
    }
  }
  render() {
    const { containerClass, duration, timingFunction, delay, style, alt } =
      this.props;
    const { topSrc, bottomOpacity, bottomSrc } = this.state;
    return (
      <div
        className={containerClass}
        style={{ ...defaultStyle, ...{ position: "relative" } }}
      >
        {topSrc && (
          <img
            style={{ ...defaultStyle, ...style, ...{ position: "absolute" } }}
            src={topSrc}
            alt={alt}
            useMap="#map"
          />
        )}
        {bottomSrc && (
          <img
            style={{
              ...defaultStyle,
              ...style,
              ...{
                opacity: bottomOpacity,
                transition: `opacity ${duration / 1000}s ${timingFunction} ${
                  delay / 1000
                }s`,
              },
            }}
            src={bottomSrc}
            useMap="#map"
          />
        )}
        {this.props.alldone && (
          <ReactTooltip
            id="sampleFood"
            effect="float"
            overridePosition={(
              { left, top },
              currentEvent,
              currentTarget,
              node
            ) => {
              const d = document.documentElement;
              left = Math.min(d.clientWidth - node.clientWidth, left);
              top = Math.min(d.clientHeight - node.clientHeight, top);
              left = Math.max(0, left);
              top = Math.max(0, top);
              return { top, left };
            }}
            aria-haspopup="true"
          >
            <h3>Sample Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at urna ut velit tincidunt placerat.{" "}
            </p>
            <p>
              Nullam cursus mauris orci, quis fermentum metus consectetur a. Ut
              suscipit volutpat porta.
            </p>
          </ReactTooltip>
        )}

        <map name="map">
          <div data-tip data-for="sampleFood">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropbkt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="216,424,160,423,120,439,82,469,77,502,87,541,120,573,148,569,184,617,202,633,232,671,260,698,296,716,314,726,352,773,390,798,431,821,484,838,545,851,560,818,591,788,634,750,665,731,693,716,731,696,769,684,820,668,872,653,917,650,963,650,1009,648,1030,647,1068,616,1093,571,1103,532,1085,492,1065,459,1042,436,999,413,951,390,922,377,882,365,816,349,757,337,681,331,612,331,517,332,451,340,385,350,301,380,263,393"
              shape="poly"
            />
          </div>
          <area
            target=""
            alt=""
            onDrop={(event) => this.props.dropyt(event)}
            onDragOver={(event) => this.props.allowDrop(event)}
            title=""
            coords="586,333,583,313,588,298,515,296,520,280,512,258,517,244,527,230,564,229,550,216,541,135,556,117,579,105,629,100,616,84,624,49,634,30,655,21,673,35,690,63,721,99,750,125,792,158,816,179,879,178,940,194,994,214,1027,237,1050,263,1060,290,1076,293,1085,313,1080,336,1099,356,1096,372,1083,389,1063,395,1062,420,1042,438,991,407,917,377,849,359,770,341,683,333"
            shape="poly"
          ></area>
          <area
            target=""
            alt=""
            onDrop={(event) => this.props.dropcr(event)}
            onDragOver={(event) => this.props.allowDrop(event)}
            title=""
            coords="1042,440,1076,410,1103,389,1147,364,1190,349,1243,331,1292,319,1303,309,1322,296,1335,288,1364,283,1379,296,1401,308,1422,316,1471,316,1535,319,1554,308,1577,318,1595,342,1605,359,1621,374,1666,398,1705,430,1740,472,1756,512,1764,556,1758,614,1733,668,1689,723,1639,759,1601,780,1572,797,1590,810,1588,826,1573,831,1555,830,1562,848,1550,861,1531,864,1504,858,1452,831,1440,833,1409,800,1376,765,1340,744,1381,660,1284,632,1284,604,1103,603,1096,657,1030,649,1075,611,1093,581,1103,542,1098,515,1085,486,1063,459"
            shape="poly"
          ></area>
          <area
            target=""
            alt=""
            onDrop={(event) => this.props.dropys(event)}
            onDragOver={(event) => this.props.allowDrop(event)}
            title=""
            coords="553,840,538,863,525,899,513,940,515,976,520,1006,546,1070,578,1111,614,1149,663,1187,729,1220,823,1253,951,1276,1060,1276,1178,1259,1312,1212,1389,1159,1445,1098,1481,1019,1488,940,1468,886,1440,838,1397,792,1373,767,1340,744,1381,660,1284,632,1280,609,1104,604,1096,660,1052,649,1004,647,935,652,877,660,839,663,764,686,711,706,657,738,617,767,583,793"
            shape="poly"
          ></area>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

CrossfadeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

CrossfadeImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "CrossfadeImage",
  hover: 0,
};
