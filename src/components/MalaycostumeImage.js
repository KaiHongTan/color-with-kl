import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "../imageMapResizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class MalaycostumeImage extends Component {
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
  componentWillReceiveProps(newProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      // Reset the component everytime we receive new prop, to
      // cancel out any animation that's still going on
      this.setState({ bottomSrc: false, topSrc: false }, () =>
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
            id="kltower"
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
            <h2>Baju Kurung</h2>
            <div>
              Originated from the Malay peninsula, Baju Kurung is Women's
              traditional Malay costume.
            </div>
            <div>
              A full-length dress with a loose fit that consists of a blouse and
              a skirt (enclosed dress)
            </div>
            <div>
              <p />
              <p>
                古笼装源自于马来半岛,
                古笼装是女性的传统马来服饰。由上衣和裙子组成的宽松版型长裙（封闭式连衣裙）。
              </p>
              <p>
                古籠裝源自於馬來半島,古籠裝是女性的傳統馬來服飾。由上衣和裙子組成的寬鬆版型長裙（封閉式連衣裙）。
              </p>
            </div>
          </ReactTooltip>
        )}
        {this.props.alldone && (
          <ReactTooltip
            id="matrade"
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
            <h2>Baju Melayu</h2>
            <div>
              Originated from Malacca, Baju Melayu is known as Men's traditional
              Malay costume.{" "}
            </div>
            <div>
              It consists of a raised stiff collar known as cekak musang collar
              (fox's leash) and with trousers called seluar in malay with fabric
              that are usually cotton-made.
            </div>
            <div>
              <p />
              <p>
                马来衬衫源自于马六甲，马来衬衫被称为男性的传统马来服。它有一个被称为狐狸皮带的凸起硬领和裤子
                (马来语称为 seluar)，面料都偏于棉制。
              </p>
              <p>
                馬來襯衫源自於馬六甲，馬來襯衫被稱為男性的傳統馬來服。它有一個被稱為狐狸皮帶的凸起硬領和馬來語稱為
                seluar 的褲子，面料都偏於棉製。
              </p>
            </div>
          </ReactTooltip>
        )}

        <map name="map" dragging={false} tap={false} draggable="false">
          <div data-tip data-for="kltower" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropbk(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="521,931,517,746,514,672,498,568,495,507,467,484,485,367,479,350,479,269,484,225,507,209,538,204,538,191,563,178,587,174,614,182,684,210,691,242,703,321,700,480,667,487,657,551,666,586,668,666,667,695,686,751,691,823,698,903,617,917,610,942,574,951,536,944"
              shape="poly"
            />
          </div>
          <div data-tip data-for="matrade" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropbm(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="767,539,758,478,763,401,777,302,792,232,819,216,877,198,876,182,900,175,933,176,946,191,961,200,991,213,1031,235,1049,343,1061,391,1061,454,1054,543,1007,548,998,398,983,404,991,526,1002,702,996,757,987,768,970,934,932,938,914,880,909,834,910,763,897,765,895,829,884,896,875,931,851,938,829,933,821,889,816,842,820,787,819,759,810,750,801,716,800,684,814,544,815,516,815,487,826,429,809,430,802,499,796,531,770,543"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

MalaycostumeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

MalaycostumeImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "MalaycostumeImage",
  hover: 0,
};
