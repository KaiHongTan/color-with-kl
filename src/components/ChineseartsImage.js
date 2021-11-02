import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class ChineseartsImage extends Component {
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
            <h2>Chinese Paper Cutting</h2>
            <div>
              Invented by Cai Lun of the Eastern Han Dynasty and becomes the
              common art culture for chinese.
            </div>
            <div>
              It usually cut into shapes and words for blessings and represent
              wealth and good health.{" "}
            </div>
            <div>
              <p />
              <p>
                中国剪纸是华人的共同艺术文化由东汉时期的蔡伦发明。此造型通常剪成形状或剪成字以表示祝福也象征荣华富贵与身康体健。{" "}
              </p>
              <p>
                中國剪紙是華人的共同藝術文化由東漢時期的蔡倫發明。此造型通常剪成形狀或剪成字以表示祝福也像徵榮華富貴與身康體健。
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
            <h2>24 Festive Drums</h2>
            <div>
              Concept of 24 festive drums was created by two talented, legendary
              Malaysians as a chinese cultural heritage art with specific
              dressing/ costumes and color coding of red, black, and yellow that
              symbolise auspicious, passion, perseverance.{" "}
            </div>
            <div>
              Representing the 4 seasons that also divides into 6 secondary
              seasons that conclude to 24 seasons.{" "}
            </div>
            <div>
              <p />
              二十四节令鼓是中华文化遗产艺术，其概念是由两位才华横溢的马来西亚传奇人物所创造。
              二十四节令鼓表演者拥有规定的服装比如红，黑和黄，象征着吉祥，热情以及毅力的意思。
            </div>
            <div>
              二十四节令鼓之所以会被命名为二十四节令鼓是因为其代表着4
              个季节，每个季节再衍生出6个次要季节，最终总共会得到24个季节。
              <p />
              <div>
                二十四節令鼓是中華文化遺產藝術，其概念是由兩位才華橫溢的馬來西亞傳奇人物所創造。二十四節令鼓表演者擁有規定的服裝比如紅，黑和黃，象徵著吉祥，熱情以及毅力的意思。
              </div>
              <div>
                二十四節令鼓之所以會被命名為二十四節令鼓是因為其代表著4
                個季節，每個季節再衍生出6個次要季節，最終總共會得到24個季節。
              </div>
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
            <h2>Lion Dance</h2>
            <div>
              Lion dance in Malaysia has envolved being Chinese cultural art by
              gradually move towards as a formed of gravity- defying extreme
              sports.
            </div>
            <div>
              It most often perform during Lunar New Year. Two artistics looking
              lion that dance around, on-top of around 4-8 feet tall metal pole.{" "}
            </div>
            <div>
              <p />
              舞狮在马来西亚已逐渐成为一项以对抗重力的极限运动兼表演，最常在农历新年期间表演。当他们在表演时，两只舞狮会在4-8英尺高的金属管上舞狮。
            </div>
            <div>
              <p />
              舞獅在馬來西亞已逐漸成為一項以對抗重力的極限運動兼表演，最常在農曆新年期間表演。當他們在表演時，兩隻舞獅會在4-8英尺高的金屬管上舞獅。
            </div>
          </ReactTooltip>
        )}

        <map name="map" dragging={false} tap={false} draggable="false">
          <div data-tip data-for="ktp" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropcpc(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="239,126,239,148,260,152,279,172,289,200,278,238,255,251,243,259,242,313,179,316,176,259,143,238,127,203,131,177,157,152,185,143,183,129,207,125,211,113,218,127"
              shape="poly"
            />
          </div>
          <div data-tip data-for="ktp" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropcpc(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="1180,129,1176,116,1202,112,1206,99,1211,116,1232,112,1230,132,1264,148,1281,172,1281,205,1260,236,1237,241,1236,301,1174,301,1171,242,1146,229,1125,209,1120,178,1133,157,1157,138"
              shape="poly"
            />
          </div>
          <div data-tip data-for="ktp" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropcpc(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="773,801,771,785,796,781,799,775,803,781,826,784,826,799,858,810,875,832,877,855,873,877,861,899,830,913,830,971,769,972,769,916,741,898,724,883,717,859,724,826,745,805,764,800,732,820"
              shape="poly"
            />
          </div>
          <div data-tip data-for="nl" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropfd(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="690,961,662,920,654,896,547,887,523,865,510,834,495,813,492,796,351,789,322,757,314,733,296,697,296,673,312,570,293,563,302,544,321,524,335,516,359,511,370,511,462,512,487,511,531,515,565,524,596,544,634,506,672,503,733,502,770,501,795,502,807,522,790,568,785,600,808,608,821,601,832,575,837,598,857,609,887,596,896,576,890,562,892,542,904,524,924,516,941,506,938,526,933,554,932,584,929,600,941,614,962,607,980,605,994,613,1007,613,1025,609,1037,591,1046,582,1051,604,1044,623,1028,641,1032,659,1067,669,1086,678,1103,654,1109,629,1114,587,1112,556,1109,535,1114,514,1129,501,1145,502,1177,505,1194,526,1204,543,1185,553,1194,577,1198,614,1198,663,1198,691,1186,717,1176,750,1154,776,1092,784,1084,810,1077,838,1061,865,1045,879,946,888,938,899,934,910,925,943,910,967,893,972,817,983,743,976,708,973"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="rj" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropld(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="370,506,363,423,357,373,364,329,375,289,380,241,401,224,403,213,425,186,421,157,438,158,464,145,491,140,524,144,536,164,552,182,567,187,580,219,570,233,570,252,576,267,573,289,548,287,534,312,528,330,512,336,544,353,566,357,546,385,544,401,559,433,575,488,584,523,579,532,556,523,527,521,504,516,460,517,377,517"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="rj" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropld(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="788,592,796,567,806,555,813,527,797,513,807,490,816,471,820,456,808,438,791,422,782,404,770,369,765,359,746,355,738,415,724,425,708,419,703,385,713,349,681,344,670,320,681,301,677,279,673,246,682,206,694,177,708,163,731,152,732,138,757,117,775,120,807,112,801,129,817,131,830,139,858,166,881,191,883,213,908,222,931,247,956,284,976,332,990,362,1009,386,1043,413,1076,442,1091,455,1113,481,1179,436,1188,447,1160,467,1138,493,1118,513,1111,611,1107,647,1086,679,1037,664,1027,648,1046,634,1059,620,1050,595,1045,588,1031,606,1012,623,993,616,971,611,942,615,932,604,937,573,938,549,946,526,951,501,933,490,923,488,920,478,914,511,899,534,894,567,897,590,906,605,883,605,853,609,838,591,833,586,815,610,793,605"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

ChineseartsImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

ChineseartsImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "ChineseartsImage",
  hover: 0,
};
