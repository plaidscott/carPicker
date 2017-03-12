/* eslint-disable */

import React, {Component, PropTypes} from 'react';

export default class Miles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Miles: 0
    }
    this.handleMilesAnswer = this.handleMilesAnswer.bind(this);
  }
  handleMilesAnswer(e) {
    this.setState({Miles: e.target.value});
    this.props.updateStateFromChildren("Miles", e.target.value);
  }
  render() {
    return (
      <div className="thumbnail back-two text-center col-lg-8 col-md-8">
        {this.props.showModal}
        <h3>Mileage</h3>
        <p>The higher the miles, the more opportunity for your handy self to shine and save money, but if you dont want to get your hands dirty, better of with a newer car</p>
        <div className="sliderContainer">
          <input type="range" min="0" max="500000" step="10000" value={this.state.Miles} onChange={this.handleMilesAnswer}/>
        </div>
        {this.state.Miles}
      </div>
    );
  }
}
