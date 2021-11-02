import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class MalayfoodImage extends Component {
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
            id="ktp"
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
            <h2>Ketupat</h2>
            <div>
              It is a Javanese rice cake packed inside a diamond shape made from
              woven young palm leaves known as staple food that can be eat alone
              or with side dishes.
            </div>
            <div>
              It can be widely seen during the Hari Raya Aidilifitri festival.{" "}
            </div>
            <div>
              <p />
              <p>
                马来粽是爪哇年糕之一，其外表是由编织的棱形棕榈叶制成。马来族居多处欢庆伊斯兰开斋节时,最具有代表性的食物。它可被单独食用或与配菜一起搭配。
              </p>
              <p>
                馬來粽是爪哇年糕之一，其外表是由編織的棱形棕櫚葉製成。馬來族居多處歡慶伊斯蘭開齋節時,最具有代表性的食物。它可被單獨食用或與配菜一起搭配。
              </p>
            </div>
          </ReactTooltip>
        )}
        {this.props.alldone && (
          <ReactTooltip
            id="nl"
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
            <h2>Nasi Lemak</h2>
            <div>
              It is known as national dish of Malaysia, one of Malay signature
              dishes.
            </div>
            <div>
              It consists main ingredients such as rice cooked in coconut milk
              and pandan leaves served with sauce of Malaysian sambal,
              anchovies, cucumber, and various side dishes.
            </div>
            <div>
              <p />
              <p>
                椰浆饭被誉为马来西亚的国民美食, 马来经典菜肴之一。
                其主要食材包括椰浆饭
                (由椰奶和香兰叶蒸煮)、马来西亚叁巴酱、炸小凤尾鱼、黄瓜、鸡蛋和各种配菜。
              </p>
              <p>
                椰漿飯被譽為馬來西亞的國民美食,
                馬來經典菜餚之一。其主要食材包括椰漿飯
                (由椰奶和香蘭葉蒸煮)、馬來西亞叁巴醬、炸小鳳尾魚、黃瓜、雞蛋和各種配菜。
              </p>
            </div>
          </ReactTooltip>
        )}
        {this.props.alldone && (
          <ReactTooltip
            id="rj"
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
            <h2>Roti Jala</h2>
            <div>
              Roti Jala is famous for Malay as tea time snack served with curry
              sauce with a look like lace doily that are normally seen at
              weddings or festivals that could be the substitute of rice.{" "}
            </div>
            <div>
              <p />
              <p>
                网面薄煎饼是马来族著名的茶点之一。其外观犹如蕾丝花边一般,
                最常见的吃法则是佐咖喱酱。这道茶点普遍出现在婚礼或节日上，可代替米饭作为主食。
              </p>
              <p>
                網面薄煎餅是馬來族著名的茶點之一。其外觀猶如蕾絲花邊一般,
                最常見的吃法則是佐咖哩醬。這道茶點普遍出現在婚禮或節日上，可代替米飯作為主食。
              </p>
            </div>
          </ReactTooltip>
        )}

        <map name="map" dragging={false}>
          <div data-tip data-for="ktp">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropktp(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="935,115,951,145,938,180,938,228,1017,230,1038,236,1048,249,1059,273,1072,316,1073,340,1072,357,1062,380,1036,401,992,418,996,426,1016,432,1034,441,1057,456,1100,489,1124,515,1124,544,1112,566,1099,584,1134,612,1126,631,1119,651,1120,682,1091,697,1048,726,1008,744,989,749,963,730,944,713,930,688,932,666,942,631,952,607,932,573,941,545,952,516,964,491,951,424,945,428,954,475,930,524,917,550,918,586,918,626,909,652,900,665,877,675,856,680,838,675,814,669,788,671,774,654,772,635,776,604,778,577,786,547,793,524,801,508,824,508,854,511,853,496,848,478,848,463,863,442,876,431,847,428,818,413,800,398,778,361,767,328,765,300,764,272,765,240,786,232,819,230,853,231,847,224,847,177,861,157"
              shape="poly"
            />
          </div>
          <div data-tip data-for="nl">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropnl(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="776,564,695,555,651,558,594,559,555,565,482,587,472,570,476,546,445,516,431,509,378,514,326,533,321,528,323,493,290,465,242,442,263,409,287,377,314,345,328,316,365,252,396,193,391,168,382,142,380,111,388,79,402,53,422,38,445,35,461,42,471,57,480,71,483,107,475,136,482,165,508,239,528,282,548,246,546,221,536,201,534,173,537,147,546,125,560,105,574,91,593,86,613,93,627,105,633,125,636,156,634,173,629,187,626,197,657,277,685,349,706,388,749,463,783,521,784,540"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="rj">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.droprj(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="424,507,359,519,356,547,365,575,393,660,421,824,448,840,482,857,502,877,527,891,558,897,591,913,628,922,659,948,687,972,727,987,757,986,794,986,834,999,868,1008,887,1001,910,981,945,955,992,930,1027,905,1078,883,1115,866,1153,842,1160,818,1163,798,1180,770,1217,729,1242,679,1254,657,1264,604,1264,547,1277,501,1286,449,1197,405,1073,368,995,419,1035,441,1101,488,1127,519,1126,545,1104,585,1134,610,1121,652,1121,683,1092,698,1068,717,1036,737,1003,748,990,753,957,728,937,699,929,686,931,664,953,605,934,576,943,530,964,495,946,499,918,558,920,590,920,622,911,655,893,672,853,685,814,672,787,675,774,655,773,625,776,588,778,567,798,513,823,508,854,509,844,467,876,430,829,424,796,400,768,352,694,366,769,502,784,527,772,567,742,562,677,555,602,562,530,572,476,586,472,541,447,520"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

MalayfoodImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

MalayfoodImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "MalayfoodImage",
  hover: 0,
};
