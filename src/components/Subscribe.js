import React, { Component } from 'react';
import { Power1, TimelineMax, Elastic } from 'gsap';

import Input from './Input';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: false,
      email: '',
      formReady: false,
    };
    this.subscribeClick = this.subscribeClick.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    this.subscribeAnimation();
  }

  emailChange({ value }) {
    this.setState({
      email: value,
    });

    if (value.length > 4) {
      this.setState({
        formReady: true,
      });
    }
  }

  register() {}

  subscribeClick() {
    if (!this.state.buttonActive) {
      this.setState(
        {
          buttonActive: true,
        },
        () => {
          this.subscribeInputAnimationIn();
        }
      );
    } else {
      this.subscribeInputAnimationOut();
      setTimeout(() => {
        this.setState({
          buttonActive: false,
        });
      }, 500);
    }
  }

  subscribeAnimation() {
    const tl = new TimelineMax({
      repeat: 0,
      onComplete: this.props.onComplete,
    });
    tl.from('.subscribe-container', 1.3, {
      ease: Power1.easeOut,
      rotationY: 720,
      opacity: 0,
    });
  }

  subscribeInputAnimationIn() {
    const tl = new TimelineMax({
      repeat: 0,
    });
    tl.from('.subscribe-input', 0.9, {
      ease: Elastic.easeOut.config(1, 0.5),
      top: -5,
      opacity: 0,
    });
  }

  subscribeInputAnimationOut() {
    const tl = new TimelineMax({
      repeat: 0,
    });
    tl.to('.subscribe-input', 0.5, {
      ease: Power1.easeOut,
      top: 100,
      opacity: 0,
    });
  }

  render() {
    return (
      <div className="subscribe-container">
        {this.state.buttonActive && (
          <div className="subscribe-input">
            <Input
              type="text"
              name="email"
              className="subscribe_input"
              placeholder="your email"
              pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'}
              value={this.state.email}
              onChange={this.emailChange}
            />
            <button disabled={!this.state.formReady} onClick={this.register}>
              SUBSCRIBE
            </button>
          </div>
        )}

        <button
          className={
            'button-subscribe ' +
            (this.state.buttonActive ? 'button-active' : '')
          }
          onClick={this.subscribeClick}
        >
          get notified
        </button>
      </div>
    );
  }
}

export default Subscribe;
