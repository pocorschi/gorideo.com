import React, { Component } from 'react';

//css
import 'normalize.css/normalize.css';
import './styles/App.css';

import CirclesLayer from './components/CirclesLayer';
import Logo from './components/Logo';
import Subscribe from './components/Subscribe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoActive: false,
      subscribeActive: false,
    };
    this.onCompleteLogo = this.onCompleteLogo.bind(this);
    this.onCompleteInitialCircles = this.onCompleteInitialCircles.bind(this);
    this.onCompleteSubscribe = this.onCompleteSubscribe.bind(this);
  }

  onCompleteInitialCircles(id, initialCircleNumber) {
    if (parseInt(id.split('_')[2], 10) === initialCircleNumber) {
      this.setState({
        logoActive: true,
      });
    }
  }

  onCompleteLogo() {
    console.log('logo done');
    this.setState({
      subscribeActive: true,
    });
  }

  onCompleteSubscribe() {
    console.log('subscribe done');
  }

  render() {
    return (
      <div className="App">
        {/**

          **/}
        <CirclesLayer onComplete={this.onCompleteInitialCircles} />
        {this.state.logoActive && <Logo onComplete={this.onCompleteLogo} />}
        {this.state.subscribeActive && (
          <Subscribe onComplete={this.onCompleteSubscribe} />
        )}
      </div>
    );
  }
}

export default App;
