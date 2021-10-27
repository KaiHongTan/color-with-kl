import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../App";
import imageMapResize from "image-map-resizer";
import popover from "../App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export default class MalayartsImage extends Component {
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
            <h2>Bunga Telur</h2>
            <div>
              Used as a tool in Malay pairing during Malay wedding to represent
              fertility blessings for couple.{" "}
            </div>
            <div>
              In general, is a floral herb tied to an egg and trapped on a
              yellow sticky rice on the bride's left and right.
            </div>
            <div>
              <p />
              <p>
                蛋花在马来婚礼期间用作马来配对的工具，为新婚夫妇献上生育祝福。通常会把一粒鸡蛋系在一朵花上，接着将黄糯米裹起来，放在新娘旁的左右侧。
              </p>
              <p>
                蛋花在馬來婚禮期間用作馬來配對的工具，為新婚夫婦獻上生育祝福。通常會把一粒雞蛋系在一朵花上，接著將黃糯米裹起來，放在新娘旁的左右側。
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
            <h2>Silat</h2>
            <div>
              Also known as Seni Persilatan Melayu (art of Malay Silat), a
              combinative art of self-defence; large based on Islamic
              spirituality rooted in the Malay Archipelago.
            </div>
            <div>
              In 2019, Silat had inscribed on the Representative List of the
              Intangible Cultural Heritage of Humanity from UNESCO.{" "}
            </div>
            <div>
              <p />
              <p>
                马来武术也被成为马来剑术，是个结合了自我防卫的艺术，其源自于马来群岛的伊斯兰教。在2019年，马来武术已被联合国教科文组织列入人类非物质文化遗产。
              </p>
              <p>
                馬來武術也被成為馬來劍術，是個結合了自我防衛的藝術，其源自於馬來群島的伊斯蘭教。在2019年，馬來武術已被聯合國教科文組織列入人類非物質文化遺產。
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
            <h2>Wayang Kulit</h2>
            <div>
              A traditional form of puppet-shadow play perform by the dalang
              (shadow artist).
            </div>
            <div>
              It is made by carved leather figures that reflect between the lamp
              and the screen to offer shadows to life. This shows the
              combination of ritual, lesson and entertainment.{" "}
            </div>
            <div>
              <p />
              <p>
                皮影戏是一种具有仪式，教育和娱乐由影子艺术家所呈现的木偶皮影戏。它是使用皮革刻出来的模型，在画面和灯之间反映出会动的影子。
              </p>
              <p>
                皮影戲是一種具有儀式，教育和娛樂由影子藝術家所呈現的木偶皮影戲。它是使用皮革刻出來的模型，在畫面和燈之間反映出會動的影子。{" "}
              </p>
            </div>
          </ReactTooltip>
        )}

        <map name="map">
          <div data-tip data-for="ktp">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropbt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="613,810,536,614,505,618,480,636,468,636,457,618,443,619,433,611,429,596,430,587,419,573,401,568,396,558,401,537,412,523,413,487,397,481,389,469,393,451,385,437,378,432,380,420,388,409,396,409,398,386,416,364,433,359,434,344,421,340,412,325,415,313,417,301,407,293,405,284,413,271,424,270,426,255,435,236,452,223,475,224,500,234,523,228,525,248,538,260,536,274,548,287,557,302,583,304,592,313,608,323,626,339,645,339,648,353,649,388,664,420,693,428,671,430,644,457,655,474,667,489,673,512,665,545,640,564,629,582,629,697,629,793,624,806,602,685"
              shape="poly"
            />
          </div>
          <div data-tip data-for="nl">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropslt(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="783,932,726,993,678,1027,652,1020,647,1010,667,990,687,970,692,949,700,927,722,892,737,866,735,830,741,782,732,785,736,711,726,717,715,703,680,711,642,688,636,639,635,574,662,550,668,535,672,515,668,494,654,475,644,461,659,438,675,429,690,430,713,434,737,465,731,499,747,474,743,455,732,443,704,428,698,418,670,414,649,419,636,427,626,416,629,406,643,399,652,386,673,385,712,387,729,386,757,388,784,396,794,414,803,442,808,513,825,551,841,591,840,623,836,632,855,646,853,657,866,669,882,693,895,711,914,768,899,781,903,795,890,799,885,810,868,814,854,800,847,830,836,858,833,867,941,921,952,920,962,925,960,956,941,968,900,984,878,981,854,976,807,949"
              shape="poly"
            ></area>
          </div>
          <div data-tip data-for="rj">
            <area
              target=""
              alt=""
              onDrop={(event) => this.props.dropwk(event)}
              onDragOver={(event) => this.props.allowDrop(event)}
              title=""
              coords="776,78,779,60,795,41,824,31,849,44,868,55,875,77,871,116,856,143,826,173,810,182,854,204,894,210,933,212,946,208,969,218,979,217,993,228,1008,236,1020,245,1042,263,1048,274,1028,296,989,314,988,330,977,335,966,353,965,366,955,382,977,699,960,603,951,526,945,407,900,409,938,445,938,464,928,479,919,511,914,528,910,556,891,563,874,554,885,691,876,675,863,559,825,550,807,509,804,450,797,414,783,396,721,381,742,358,758,327,776,320,781,303,732,321,714,332,690,320,649,294,627,303,619,283,607,233,595,191,607,187,628,205,639,224,675,183,688,168,686,145,683,129,691,118,709,116,727,93,741,99,760,97"
              shape="poly"
            ></area>
          </div>
        </map>
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

MalayartsImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object,
  containerClass: PropTypes.string,
  hover: PropTypes.number,
};

MalayartsImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0,
  containerClass: "MalayartsImage",
  hover: 0,
};
