/* eslint-disable */

import React, {Component} from 'react';
import Slider from './Slider';

export default class MPG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MPG: 0
    }
    this.handleMPGChange = this.handleMPGChange.bind(this);
  }

  handleMPGChange(e) {
    this.setState({MPG: e.target.value});
    this.props.updateStateFromChildren('MPG', e.target.value);
  }



  render() {
    return (
      <div className="thumbnail back-two text-center col-lg-8 col-md-8">
        <div className="sliderContainer">
          <h3>Miles Per Gallon</h3>
          <input type="range" min="0" max="50" value={this.state.MPG} onChange={this.handleMPGChange}/>
        </div>
        <p>MPG state in MPG: {this.state.MPG}</p>
        <p>MPG state from props parent hello: {this.props.MPG}</p>
      </div>
    );
  }


}
