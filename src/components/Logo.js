import React, { Component } from 'react';
import { Power1, TimelineMax, Elastic } from 'gsap';

import logoBlank from '../assets/images/logo_blank.png';
import logoCircle1 from '../assets/images/logo_circle_1.png';
import logoCircle2 from '../assets/images/logo_circle_2.png';
import logoCircle3 from '../assets/images/logo_circle_3.png';

class Logo extends Component {
  componentDidMount() {
    this.logoAnimation();
  }

  isMob() {
    return window.innerWidth < 750;
  }

  logoAnimation() {
    const tl = new TimelineMax({
      repeat: 0,
      onComplete: this.props.onComplete,
    });
    tl.from('.logo-primary', 0.8, {
      ease: Power1.easeOut,
      left: -100,
      opacity: 0,
    });
    tl.staggerFrom(
      '.logo-circle',
      1,
      {
        ease: Power1.easeInOut,
        opacity: 0,
      },
      0.2
    );
    if (this.isMob()) {
      tl.to('.logo-container', 2.0, {
        ease: Elastic.easeOut.config(1, 0.5),
        scale: 0.5,
        y: -150,
      });
    } else {
      tl.to('.logo-container', 2.0, {
        ease: Elastic.easeOut.config(1, 0.5),
        scale: 0.5,
      });
    }
  }

  render() {
    return (
      <div className="logo-container">
        <img className="logo-primary" src={logoBlank} alt="" />
        <img className="logo-circle" src={logoCircle1} alt="" />
        <img className="logo-circle" src={logoCircle2} alt="" />
        <img className="logo-circle" src={logoCircle3} alt="" />
      </div>
    );
  }
}

export default Logo;
