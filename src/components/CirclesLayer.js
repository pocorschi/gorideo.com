import React, { Component } from 'react';

import ConcentricCircle from './ConcentricCircle';

class CirclesLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
      initialAnimation: false,
      initialCircleNumber: 4,
    };
  }

  componentDidMount() {
    this.setState({
      initialAnimation: true,
    });
    setTimeout(() => {
      this.setState({
        initialAnimation: false,
      });
      this.addCircles();
      setTimeout(() => {
        this.removeCircle();
      }, 4000);
    }, 5000);
  }

  generateInitialCircle(index) {
    return (
      <ConcentricCircle
        key={'circle_init_' + (index + 1)}
        delay={index * 400}
        style={this.randomPosition()}
        initialCircleNumber={this.state.initialCircleNumber}
        onComplete={this.props.onComplete}
        id={'circle_init_' + (index + 1)}
      />
    );
  }

  fillArrayWithNumbers(n) {
    var arr = Array.apply(null, Array(n));
    return arr.map(function (x, i) {
      return i;
    });
  }

  initialAnimation() {
    return (
      <div>
        {this.fillArrayWithNumbers(
          this.state.initialCircleNumber
        ).map((el, index) => {
          return this.generateInitialCircle(index);
        })}
      </div>
    );
  }

  addCircles() {
    this.setState({
      circles: this.state.circles.concat('new_circle'),
    });

    setTimeout(() => {
      this.addCircles();
    }, 5000);
  }

  removeCircle() {
    const tempArray = this.state.circles;
    tempArray.shift();
    this.setState({
      circles: tempArray,
    });
    setTimeout(() => {
      this.removeCircle();
    }, 5000);
  }

  randomPosition() {
    return {
      top: this.randomTop() + '%',
      left: this.randomLeft() + '%',
    };
  }

  randomTop() {
    const value = Math.floor(Math.random() * 40) + 5;
    return value;
  }

  randomLeft() {
    return Math.floor(Math.random() * 70) + 5;
  }

  render() {
    return (
      <div className="circles-layer">
        {this.state.initialAnimation && this.initialAnimation()}
        {this.state.circles.map(circle => {
          const id = 'circle_' + (Math.floor(Math.random() * 100000) + 1);
          return (
            <ConcentricCircle
              key={id}
              delay={0}
              style={this.randomPosition()}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}

export default CirclesLayer;
