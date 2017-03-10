/* eslint-disable */

import React, {Component} from 'react';

export default class HP extends Component {
  constructor(props) {
    super(props);
    this.state= {
      HP: 0
    }
    this.handleHPAnswer = this.handleHPAnswer.bind(this);
  }
  handleHPAnswer(e) {
    this.setState({HP: e.target.value});
    this.props.updateStateFromChildren('HP', e.target.value);
  }
  render() {
    return (
      <div className="thumbnail back-two text-center col-lg-8 col-md-8">
        {this.props.showModal}
        <h3>Horse Power</h3>
        <p>Section with cool horsepower reference</p>
        <div className="sliderContainer">
          <input type="range" min="0" max="500" step="5"value={this.state.HP} onChange={this.handleHPAnswer}/>
        </div>
        {this.state.HP}
      </div>
    );
  }
}
