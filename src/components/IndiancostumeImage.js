import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class IndiancostumeImage extends Component {
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
            <h2>Kurta-pyjama</h2>
            <div>
              Is made up of a top tunic known as the kurta and bottoms known as
              pyjama (or pyjama). The term kurta can be used to refer to both
              men's and women's clothing.{" "}
            </div>
            <div>
              The garment is said to have originated in the Indian subcontinent,
              and regional variations are common.
            </div>
            <div>
              <p />
              库尔塔睡衣是由称为 kurta 的上衣和称为pyjama的下装睡衣组成。 Kurta
              这词可用于指定代男装和女装。据说这种服装起源于印度次大陆，因此地区关系而形成服装差异是件常见的事。。
            </div>
            <div>
              <p />
              庫爾塔睡衣是由稱為 kurta 的上衣和稱為pyjama的下裝睡衣組成。 Kurta
              這詞可用於指定代男裝和女裝。據說這種服裝起源於印度次大陸，因此地區關係而形成服裝差異是件常見的事。
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
            <h2>Sari</h2>
            <div>
              A sari is a garment worn by women in South Asia that consists of
              an unstitched drape ranging that is wrapped around the waist, with
              one end draped over the shoulder, partially exposing the midriff.
            </div>
            <div>
              <p />
              纱丽是南亚女性所穿的一种服装，由未缝合的垂坠组成，环绕在腰部，一端披在肩上，部分腹部露出。
            </div>
            <div>
              <p />
              紗麗是南亞女性所穿的一種服裝，由未縫合的垂墜組成，環繞在腰部，一端披在肩上，部分腹部露出。
            </div>
          </ReactTooltip>
        )}

        <map name="map">
          <div data-tip data-for="kltower">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropkurta(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="871,178,808,210,801,218,787,266,780,313,778,392,773,493,773,507,813,509,817,636,838,695,847,720,867,935,914,934,922,838,919,737,917,689,955,685,948,883,1007,889,1015,830,1026,779,1036,693,1046,646,1048,616,1037,557,1027,493,1050,436,1063,402,1065,381,1062,309,1057,262,1050,229,1034,204,990,181,947,168,941,155,892,159,877,164"
              shape="poly"
            />
          </div>
          <div data-tip data-for="matrade">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropsari(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="564,162,585,236,606,345,617,450,639,495,663,576,690,661,725,741,760,802,795,875,807,913,770,932,678,972,573,983,525,969,509,949,505,916,517,895,509,884,486,890,481,899,463,908,453,914,450,925,434,928,412,932,392,934,363,931,351,925,343,889,342,867,364,799,371,723,379,628,375,585,364,543,355,504,352,461,354,422,366,366,383,340,405,312,398,266,387,214,384,183,389,157,408,159,412,174,441,181,481,182,510,160,538,148,550,157"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

IndiancostumeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

IndiancostumeImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "IndiancostumeImage",
  hover: 0,
};
