import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class KlImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSrc: props.src,
      bottomOpacity: 0,
      bottomSrc: props.src,
    };
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
            <h2>KL Tower</h2>
            <div>
              KL TOWER is the seventh tallest telecommunication tower in the
              world and the tallest in Southeast Asia.{" "}
            </div>
            <div>
              Standing at 421m and located in the heart of Kuala Lumpur, the
              capital city of Malaysia, it offer a unique blend of Cultural,
              Adventure and Nature experience not found anywhere else in the
              world.
            </div>
            <div>
              <p />
              <p>
                吉隆玻塔是世界第七高的电信塔，也是东南亚最高的电信塔。它海拔
                421米，位于马来西亚首都吉隆坡的中心地带，有着世界上其他任何地方都找不到的文化、冒险和自然体验的独特融合。
              </p>
              <p>
                吉隆玻塔是世界第七高的電信塔，也是東南亞最高的電信塔。它海拔
                421米，位於馬來西亞首都吉隆坡的中心地帶，有著世界上其他任何地方都找不到的文化、冒險和自然體驗的獨特融合。
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
            <h2>Matrade Exhibition & Convention Centre (MECC)</h2>
            <div>
              MECC complex offers more than 106,000 gross sqm of floor space at
              MATRADE’s 24-storey architectural icon with a unique archway
              design through the building.
            </div>
            <div>
              One of the best venue for Meetings, Incentives, Conventions and
              Exhibitions with emphasis on Trade-Centric events.
            </div>
            <div>
              <p />
              <p>
                MECC 楼在MATRADE 的 24 层建筑标志的空间内提供超过 106,000
                平方米的总面积且拥有独特的建筑的拱门设计。此地强调以贸易活动为中心，会议、奖励、会议和展览最好的场地之一。
              </p>
              <p>
                MECC 樓在MATRADE 的 24 層建築標誌的空間內提供超過 106,000
                平方米的總面積且擁有獨特的建築的拱門設計。此地強調以貿易活動為中心，會議、獎勵、會議和展覽最好的場地之一。
              </p>
            </div>
          </ReactTooltip>
        )}
        {this.props.alldone && (
          <ReactTooltip
            id="mitec"
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
            <h2>Malaysia International Trade & Exhibition Centre (MITEC)</h2>
            <div>
              Malaysia largest exhibition centre, was created to meet the
              growing demands of the MICE industry. Positioned as an economic
              catalyst and Gateway to Southeast Asia.
            </div>
            <div>
              In 2020, MITEC has been awarded the Green Building Index (GBI)
              certification by the GBI Accreditation Panel.
            </div>
            <div>
              <p />
              <p>
                马来西亚国际贸易展览中心
                (MITEC)是马来西亚最大的展览中心，以满足MICE领域的增长需求为宗旨。
                MITEC被定位为经济催化剂和通往东南亚的必经之路。
                2020年，MITEC获得GBI认证小组颁发的绿色建筑指数（GBI）认证。
              </p>
              <p>
                馬來西亞國際貿易展覽中心
                (MITEC)是馬來西亞最大的展覽中心，以滿足MICE領域的增長需求爲宗旨。MITEC被定位爲經濟催化劑和通往東南亞的必經之路。2020年，MITEC獲得GBI認證小組頒發的綠色建築指數（GBI）認證。
              </p>
            </div>
          </ReactTooltip>
        )}
        {this.props.alldone && (
          <ReactTooltip
            id="tt"
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
            <h2>Petronas Twin Tower</h2>
            <div>
              Petronas Twin Towers are the landmark of the city and is the
              tallest twin towers in the world that soaring to a height of 451.9
              metres.{" "}
            </div>
            <div>
              Located at the bottom of the Twin Towers is Suria KLCC, which is a
              mall offering a wide variety of brands for shopping and dining, as
              well as entertainment centre.
            </div>
            <div>
              <p />
              <p>
                吉隆坡双峰塔是这座城市的地标，是世界上最高的双子塔，高达 451.9
                米。位于双峰塔底部的是阳光广场（Suria
                KLCC），一个提供各种品牌的购物、餐饮以及娱乐的购物中心。
              </p>
              <p>
                吉隆坡雙峰塔是這座城市的地標，是世界上最高的雙子塔，高達 451.9
                米。位於雙峰塔底部的是陽光廣場（Suria
                KLCC），一個提供各種品牌的購物、餐飲以及娛樂的購物中心。
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
              onDrop={(event) => this.props.dropklt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="264,893,272,447,257,432,237,390,258,353,272,345,271,324,284,316,284,159,292,161,294,319,304,325,303,345,326,365,336,389,317,431,304,449,312,848,286,862,276,884"
              shape="poly"
            />
          </div>
          <div data-tip data-for="matrade" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropmatrade(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="317,1009,312,848,358,856,365,574,409,571,409,558,429,558,454,537,499,526,537,517,586,513,622,516,659,523,690,530,723,543,742,558,761,558,760,573,785,576,803,576,808,773,763,786,726,806,715,821,715,839,726,853,733,865,728,893,740,908,742,932,763,940,768,958,743,978,731,986,731,1034,728,1043,503,1042,393,1025"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="mitec" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropmitec(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="731,861,715,835,722,811,742,799,761,790,810,773,876,758,964,749,1044,743,1093,743,1155,749,1204,757,1231,765,1254,774,1286,792,1274,815,1279,846,1287,862,1265,889,1088,936,1081,949,908,1006,852,998,780,1001,763,995,749,939,743,917,732,890"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="tt" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.droptt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="724,540,723,404,731,389,729,303,737,240,742,207,746,168,752,139,763,130,761,107,769,106,773,56,775,105,784,107,784,128,793,135,792,159,799,186,807,207,807,240,815,251,817,272,819,296,826,316,822,348,824,381,825,401,830,413,831,520,908,520,903,408,913,308,919,246,932,191,938,162,942,130,951,110,961,60,974,109,978,134,989,166,994,208,1001,250,1008,305,1007,399,1015,428,1009,743,906,753,905,587,830,586,829,768,810,773,806,577,763,574,761,559,742,558"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

KlImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

KlImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "KlImage",
  hover: 0,
};
