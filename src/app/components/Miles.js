/* eslint-disable */

import React, {Component, PropTypes} from 'react';

export default class Miles extends Component {
  // Miles.propTypes = {
  //   showModal: React.PropTypes.string
  // }
  handleMilesAnswer(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="thumbnail back-two text-center col-lg-8 col-md-8">
        {this.props.showModal}
        <h3>Mileage</h3>
        <p>The higher the miles, the more opportunity for your handy self to shine and save money, but if you dont want to get your hands dirty, better of with a newer car</p>
        <div className="btn-group">
          <button className="btn btn-default" onClick={this.handleMilesAnswer} value="new">New is best</button>
          <button className="btn btn-default" onClick={this.handleMilesAnswer} value=">50k">Newer is good</button>
          <button className="btn btn-default" onClick={this.handleMilesAnswer} value="50k-120k">I'm a little handy, but not to much</button>
          <button className="btn btn-default" onClick={this.handleMilesAnswer} value="120k+">I'm a mechanic</button>
        </div>
      </div>
    );
  }
}
