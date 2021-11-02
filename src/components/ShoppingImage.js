import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class ShoppingImage extends Component {
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
            <h2>Pavillion</h2>
            <div>
              Pavillion Mall, Malaysia's shopping paradise, is situated in the
              heart of Bukit Bintang and offers award-winning experiences.{" "}
            </div>
            <div>
              With over 700 stores, ten levels, and eight themed zones. It is
              divided into 3 major sections such as the retail mall, office
              block, and two residential towers.{" "}
            </div>
            <div>
              <p />
              <p>
                柏威年广场是马来西亚的购物天堂，位于武吉免登（Bukit
                Bintang）的中心地带，提供各种曾获得奖项与荣誉的体验。这商场拥有
                700
                多家商店、10个楼层和8个主题区域。它被分为3个主要部分，即零售商场、办公大楼和两座住宅楼。
              </p>
              <p>
                柏威年廣場是馬來西亞的購物天堂，位於武吉免登（Bukit
                Bintang）的中心地帶，提供各種曾獲得獎項與榮譽的體驗。這商場擁有
                700
                多家商店、10個樓層和8個主題區域。它被分為3個主要部分，即零售商場、辦公大樓和兩座住宅樓。
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
            <h2>Sephora @ Fahrenheit 88</h2>
            <div>
              It is the largest beauty background that has just been recently
              open on January 2020 with an exciting brand portfolio & new
              services.
            </div>
            <div>
              It aims to provide the beauty community with an astounding
              omnichannel approach.
            </div>
            <div>
              <p />
              <p>
                于 2020 年 1 月在飞轮海88广场（Fahrenheit
                88）开放的丝芙兰是拥有着最大美容背景的购物商场，它的宗旨是为美容界提供令人惊叹的全渠道方法其中包含令人兴奋的品牌组合和新服务。
              </p>
              <p>
                於 2020 年 1 月在飛輪海88廣場（Fahrenheit
                88）開放的絲芙蘭是擁有著最大美容背景的購物商場，它的宗旨是為美容界提供令人驚嘆的全渠道方法其中包含令人興奮的品牌組合和新服務。
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
              onDrop={(event) => this.props.droppavillion(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="150,837,148,454,178,452,176,347,377,338,416,386,710,382,703,329,841,321,798,390,789,423,787,438,792,837,676,834,658,845,638,845,636,817,505,808,503,833,496,841,440,854,415,857,384,855,353,851,336,845,323,836"
              shape="poly"
            />
          </div>
          <div data-tip data-for="matrade" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropsephora(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="791,844,794,737,791,695,791,623,789,541,788,483,787,439,796,405,797,395,833,336,946,163,979,143,1264,141,1284,149,1330,181,1329,530,1316,712,1315,892,1293,900,1276,881,1155,876,1151,763,952,760,950,863,937,867,854,862,852,852,805,852"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

ShoppingImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

ShoppingImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "ShoppingImage",
  hover: 0,
};
