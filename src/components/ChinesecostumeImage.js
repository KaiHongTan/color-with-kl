import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class ChinesecostumeImage extends Component {
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
            <h2>Cheongsam</h2>
            <div>
              Qipao, also known as a body-hugging dress, is a type of dress with
              a high-necked, close-fitting design and a slit partway up the
              side.
            </div>
            <div>
              Original modernized by Chinese socialites and upper-class women.{" "}
            </div>
            <div>
              <p />
              旗袍，又称贴身裙，是一种高领、贴身、侧面开衩的连衣裙。最初由中国社会名流和上流社会女性改造而成。
              <p />
              旗袍，又稱貼身裙，是一種高領、貼身、側面開衩的連衣裙。最初由中國社會名流和上流社會女性改造而成。
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
            <h2>Tang Suit</h2>
            <div>
              Tangzhuang, also known as male Tang Suit, is a type of Chinese
              jacket worn by men from the end of the Qing Dynasty around 1644 to
              1911.
            </div>
            <div>
              <p />
              唐装，又称男唐装，是清末1644年至1911年间男子所穿的一种中国上衣。
              <p />
              唐裝，又稱男唐裝，是清末1644年至1911年間男子所穿的一種中國上衣。
            </div>
          </ReactTooltip>
        )}

        <map name="map">
          <div data-tip data-for="kltower">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropcs(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="472,939,467,816,457,697,457,641,461,581,456,548,461,488,484,360,479,306,468,253,434,232,440,210,456,203,516,186,519,173,530,159,566,160,584,160,594,182,654,203,676,228,668,242,644,247,636,287,629,359,639,402,657,465,661,516,657,582,654,647,648,725,638,934,509,946"
              shape="poly"
            />
          </div>
          <div data-tip data-for="matrade">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropts(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="813,907,793,523,787,497,747,504,745,465,742,341,751,243,764,206,796,197,833,186,840,154,883,148,913,157,918,177,957,190,994,204,1032,401,1040,489,988,493,980,515,981,581,981,713,973,928,928,937,918,923,891,600,878,904,861,926,824,916"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

ChinesecostumeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

ChinesecostumeImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "ChinesecostumeImage",
  hover: 0,
};
