import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class ChinesefoodImage extends Component {
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
            <h2>Bak Kut Teh</h2>
            <div>
              Is a popular pork dish with the main ingredients of pork rib, tofu
              puffs and button mushroom cooked in broth infused with complex
              herbs such as cinnamon, star anise etc.
            </div>
            <div>
              Taste may vary depending on the different area of Malaysia.{" "}
            </div>
            <div>
              <p />
              <p>
                肉骨茶是一道受华裔喜爱以猪肉为主的菜肴，排骨、豆腐卜和蘑菇为配料，汤底则以肉桂、八角等复合药材熬成。味道可因马来西亚不同地区而异。
              </p>
              <p>
                肉骨茶是一道受華裔喜愛以豬肉為主的菜餚，排骨、豆腐卜和蘑菇為配料，湯底則以肉桂、八角等複合藥材熬成。味道可因馬來西亞不同地區而異。
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
            <h2>Hainanese Chicken Rice</h2>
            <div>It was adapted from the Hainanese dish, Wenchang Chicken.</div>
            <div>
              A dish with poached chicken and fragrant seasoned rice, served
              with chilli sauce and cucumber garnishes.{" "}
            </div>
            <div>
              <p />
              <p>
                海南鸡饭是由海南名菜文昌鸡食谱改编而成。
                这道美食是以滑嫩的白斩鸡和香味四溢的油饭为主，青瓜作为配料，而特调酸辣椒酱则是此道菜的亮点。
              </p>
              <p>
                海南雞飯是由海南名菜文昌雞食譜改編而成。這道美食是以滑嫩的白斬雞和香味四溢的油飯為主，青瓜作為配料，而特調酸辣椒醬則是此道菜的亮點。
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
            <h2>Yee Sang/ Yu Sheng</h2>
            <div>
              Alternative names as Lou Sang with a a symbol of abundance and
              prosperity.
            </div>
            <div>
              It can be widely seen during the Chinese New Year with a plate of
              mixed shredded vegetables, sauces and condiments. Diners usually
              shout out auspicious wishes while tossing Yee Sang.
            </div>
            <div>
              <p />
              <p>
                鱼生又称为捞生, 有着象征着荣华富贵的意头。鱼生主要以生鱼片为主,
                再配上蔬菜丝、酸甜酱汁和调味粉。农历新年期间，众人拿起筷子将鱼生反复捞起边高喊吉祥祝语希望在新的一年讨个好意头。
              </p>
              <p>
                魚生又稱為撈生, 有著象徵著榮華富貴的意頭。魚生主要以生魚片為主,
                再配上蔬菜絲、酸甜醬汁和調味粉。農曆新年期間，眾人拿起筷子將魚生反复撈起邊高喊吉祥祝語希望在新的一年討個好意頭。
              </p>
            </div>
          </ReactTooltip>
        )}

        <map name="map">
          <div data-tip data-for="ktp">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropbkt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="417,659,328,635,287,613,253,581,240,562,193,536,169,512,153,488,133,469,115,443,90,447,68,419,58,382,60,363,78,351,118,331,163,326,228,292,293,273,377,259,451,254,452,233,396,228,395,194,404,180,422,163,417,102,430,89,464,78,483,75,474,67,482,40,489,24,506,16,520,24,534,54,628,134,660,135,749,156,794,182,817,207,822,219,834,230,842,245,836,260,846,272,847,289,832,301,820,305,822,321,806,334,805,342,828,362,848,394,848,435,829,470,808,493,794,502,760,501,722,502,662,510,623,520,577,534,548,550,553,545,501,573,460,606"
              shape="poly"
            />
          </div>
          <div data-tip data-for="nl">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropcr(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="807,340,852,299,900,278,960,257,997,246,1015,238,1026,228,1037,222,1063,222,1090,239,1121,243,1184,245,1198,241,1207,238,1227,251,1236,270,1244,281,1262,292,1306,320,1339,358,1362,396,1365,446,1353,489,1330,534,1301,563,1254,595,1214,616,1232,625,1230,637,1212,646,1207,660,1191,671,1169,665,1133,650,1124,643,1113,646,1102,633,1081,613,1062,596,1039,577,1069,511,989,485,994,469,852,462,848,508,798,502,825,479,845,450,857,420,853,392,840,372,822,353"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="rj">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropys(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="437,637,418,662,402,707,402,751,412,805,442,855,498,904,559,944,650,976,788,990,891,978,1013,939,1092,884,1129,832,1152,773,1147,709,1118,647,1081,608,1039,576,1067,511,998,493,993,466,911,469,857,466,852,501,849,508,801,504,743,504,698,508,656,515,606,527,554,546,516,565,480,590"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

ChinesefoodImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

ChinesefoodImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "ChinesefoodImage",
  hover: 0,
};
