/* eslint-disable */

import React, {Component} from 'react';

export default class HP extends Component {
  // HP.propTypes = {
  //   showModal: React.PropTypes.string.isRequired
  // }
  handleHPAnswer(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="thumbnail back-two text-center col-lg-8 col-md-8">
        {this.props.showModal}
        <h3>Horse Power</h3>
        <p>Section with cool horsepower reference</p>
        <div className="btn-group">
          <button className="btn btn-default" onClick={this.handleHPAnswer} value=">150">Just get me point A to B</button>
          <button className="btn btn-default" onClick={this.handleHPAnswer} value="150-250">I wouldnt mind a little fun</button>
          <button className="btn btn-default" onClick={this.handleHPAnswer} value="250+">POWER!!!</button>
        </div>
      </div>
    );
  }
}
