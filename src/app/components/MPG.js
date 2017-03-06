/* eslint-disable */

import React, {Component} from 'react';

export default class MPG extends Component {
  // MPG.propTypes = {
  //   showModal: React.PropTypes.string.isRequired
  // }
  handleMPGAnswer(e) {
    console.log(e.target.value);
    
  }
  render() {
    return (
      <div className="thumbnail back-two text-center col-lg-8 col-md-8">
        {this.props.showModal}
        <h3>Fuel Efficiency</h3>
        <p>Ok, heres the scoop. Life is a give and take, if you want sky high MPG, your going to have to sacrifice some horsepower</p>
        <div className="btn-group">
          <button className="btn btn-default" onClick={this.handleMPGAnswer} value=">20">I like spending money on Fuel</button>
          <button className="btn btn-default" onClick={this.handleMPGAnswer} value="20-30">I want the best of both worlds</button>
          <button className="btn btn-default" onClick={this.handleMPGAnswer} value="30+">I wanna be like captian planet!</button>
        </div>
      </div>
    );
  }


}
