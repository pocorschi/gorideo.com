import React, { Component } from 'react';
import { Power1, TimelineMax } from 'gsap';

class ConcentricCircle extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.circleAnimation();
    }, this.props.delay);
  }

  circleAnimation() {
    const id = '#' + this.props.id;
    const tl = new TimelineMax({
      repeat: 0,
      onComplete: this.props.onComplete,
      onCompleteParams: [id, this.props.initialCircleNumber],
    });
    tl.to(id, 2, {
      ease: Power1.easeIn,
      scale: 0.7,
      opacity: 1,
    });
    tl.to(id, 1, {
      ease: Power1.easeOut,
      scale: 1.1,
      opacity: 0,
    });
  }

  render() {
    const style = this.props.style;
    const id = this.props.id;

    return (
      <div style={style} id={id} className="concentric-circle__container">
        <div className="concentric-circle__1">
          <div className="concentric-circle__2">
            <div className="concentric-circle__3" />
          </div>
        </div>
      </div>
    );
  }
}

export default ConcentricCircle;
