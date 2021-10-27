import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class IndianartsImage extends Component {
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
            <h2>Henna</h2>
            <div>
              Henna is a plant dye made from the plant Lawsonia inermis, also
              known as the henna tree and the mignonette tree.
            </div>
            <div>
              It refers to a modern-day form of temporary body art caused by dye
              staining of the skin.
            </div>
            <div>
              <p />
              海娜指的是在由颜料染在皮肤上所呈现的暂时性现代人体艺术,
              其染料是由散沫花（也被称为甲花和木犀草)制作而成。
            </div>
            <div>
              <p />
              海娜指的是在由顏料染在皮膚上所呈現的暫時性現代人體藝術,
              其染料是由散沫花（也被稱為甲花和木犀草)製作而成
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
            <h2>Kolam</h2>
            <div>
              Typically drawn to announce auspiciousness and representing
              'all-is-well' in household.
            </div>
            <div>
              It is significant that Goddess Lakshmi is welcomed and also known
              as Muggu or Tharai Aalangaram as a traditional decorative art
              drawn by rice flour, stone powder, chalk or chalk powder with
              natural or synthetic colors.{" "}
            </div>
            <div>
              <p />
              印度米绘是一门代表拉克希米女神是被欢迎，也被称为穆古或塔莱阿兰加拉姆以通过米粉、石粉、天然或合成颜色粉笔绘制的传统装饰艺术;象征吉祥和家庭一切安好，万事如意。
            </div>
            <div>
              <p />
              印度米繪是一門代表拉克希米女神是被歡迎，也被稱為穆古或塔萊阿蘭加拉姆以通過米粉、石粉、天然或合成顏色粉筆繪製的傳統裝飾藝術;象徵吉祥和家庭一切安好，萬事如意。
            </div>
          </ReactTooltip>
        )}

        <map name="map">
          <div data-tip data-for="kltower">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.drophenna(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="241,459,315,480,348,486,368,498,395,512,432,526,466,535,508,544,536,548,558,497,546,461,569,443,572,413,579,399,602,389,623,386,633,345,647,348,670,356,691,373,711,384,736,404,755,415,770,429,783,447,797,484,804,496,824,484,861,463,904,446,898,472,890,502,885,529,886,558,861,570,820,584,802,591,760,595,717,595,702,585,656,552,627,539,621,548,601,540,590,529,577,539,565,559,581,561,607,570,642,580,680,594,694,608,691,619,674,618,583,590,601,600,656,624,694,641,725,650,749,666,753,683,741,687,717,685,613,642,764,730,768,742,755,750,744,756,727,750,661,719,577,670,572,675,642,716,665,736,698,758,734,785,722,795,707,796,694,792,667,782,597,743,581,731,549,721,473,699,459,708,459,721,485,742,520,781,534,809,531,828,526,845,487,818,464,796,431,767,401,739,385,724,363,711,331,677,303,635,284,598,234,576,228,549,228,507,232,473"
              shape="poly"
            />
          </div>
          <div data-tip data-for="matrade">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropkolam(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="388,507,365,479,390,470,419,460,453,468,404,391,383,303,392,270,470,191,496,180,530,186,594,199,684,163,743,97,805,162,891,199,1001,179,1095,270,1102,316,1083,391,1120,480,1184,538,1120,600,1085,684,1105,789,1020,882,892,875,803,917,743,977,685,913,594,877,575,736,568,731,544,894,485,898,463,874,382,791,395,735,440,777,519,845,535,833,535,809,516,777,481,740,461,724,462,707,472,701,500,707,542,720,582,734,624,759,691,791,718,799,736,784,659,733,629,710,577,678,578,670,642,708,686,733,726,750,752,756,770,743,765,727,608,641,737,691,755,684,751,666,719,649,649,623,594,595,676,615,694,618,696,604,675,589,570,558,587,531,607,543,625,548,628,540,687,573,708,591,742,597,797,591,833,578,869,567,887,558,885,527,906,446,805,497,785,448,770,423,740,408,708,382,666,357,636,346,624,377,621,385,601,387,575,402,572,416,572,439,552,457,552,484,558,499,540,548,454,532,421,525"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

IndianartsImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

IndianartsImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "IndianartsImage",
  hover: 0,
};
