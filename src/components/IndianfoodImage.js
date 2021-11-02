import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class IndianfoodImage extends Component {
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
            <h2>Chapati</h2>
            <div>
              A flatbread made by native Indians from stone ground whole wheat
              flour, also known as Gehu Ka Atta.
            </div>
            <div>
              It can be widely seen and order in 'Mamak' (Indian Muslim) stalls.{" "}
            </div>
            <div>
              <p />
              印度薄餅是一道以全麦面粉制成的大饼，也称为 Gehu Ka
              Atta。它在“Mamak”（印度穆斯林）餐饮摊位餐单里广泛被点餐。
              <p />
              印度薄餅是一道以全麥麵粉製成的大餅，也稱為 Gehu Ka
              Atta。它在“Mamak”（印度穆斯林）餐飲攤位餐單裡廣泛被點餐。
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
            <h2>Nasi Briyani</h2>
            <div>
              Briyani is a mixed rice dish originated from Indian Muslims
              communities.{" "}
            </div>
            <div>
              It is made with Indian spices and rice, and the meat is usually
              chicken, lamb, or fish, with the addition of eggs or vegetables.
            </div>
            <div>
              <p />
              印度香饭源自于在印度穆斯林社区美食。它是由印度香料和大米，肉类
              (鸡肉、羊肉或鱼)、鸡蛋和蔬菜烹饪而成的混合饭食。
              <p />
              印度香飯源自於在印度穆斯林社區美食。它是由印度香料和大米，肉類
              (雞肉、羊肉或魚)、雞蛋和蔬菜烹飪而成的混合飯食。
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
            <h2>Roti Canai</h2>
            <div>
              An Indian-influenced flatbread dish, being one of Malaysia's top
              breakfast options.
            </div>
            <div>
              One special features is the hand flipping method during the making
              process. Its usually served with Dal (lentil) curry and curry
              sauce.{" "}
            </div>
            <div>
              <p />
              印度煎饼是一道受印度饮食影响的面饼，而它也是马来西亚人早餐的首选之一。
              其特点是在烹饪中后飞抛拉伸制成，通常搭配扁豆咖喱和咖喱汁享用。{" "}
              <p />
              印度煎餅是一道受印度飲食影響的麵餅，而它也是馬來西亞人早餐的首選之一。其特點是在烹飪中後飛拋拉伸製成，通常搭配扁豆咖哩和咖哩汁享用。
            </div>
          </ReactTooltip>
        )}

        <map name="map" dragging={false} tap={false} draggable="false">
          <div data-tip data-for="ktp" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropcpt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="575,816,616,867,664,904,724,932,799,953,876,948,962,916,1015,879,1045,839,1079,769,1086,703,1076,630,1041,563,989,512,936,478,914,464,897,451,882,446,850,448,813,446,742,452,705,464,661,487,629,506,608,529,580,558,563,578,549,596,547,625,540,669,540,717,554,773,568,802"
              shape="poly"
            />
          </div>
          <div data-tip data-for="nl" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.dropnb(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="933,479,985,469,1050,452,1121,416,1163,373,1181,336,1189,288,1171,251,1129,218,1043,183,937,171,861,167,770,176,706,195,647,225,619,252,614,295,663,332,687,355,700,376,719,428,722,446,740,456,780,446,830,443,855,450,881,443,901,453"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="rj" draggable="false">
            <area
              draggable="false"
              target=""
              alt=""
              onDrop={(event) => this.props.droprc(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="722,458,709,399,680,348,645,318,612,297,587,287,522,265,442,265,370,280,335,297,271,332,237,371,211,410,200,451,197,509,218,565,261,606,292,629,332,652,376,675,411,683,453,676,481,666,523,664,535,666,550,638,551,599,563,574,573,562,600,532,621,513,654,489"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

IndianfoodImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

IndianfoodImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "IndianfoodImage",
  hover: 0,
};
