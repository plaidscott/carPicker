/* eslint-disable */
import React, {Component} from 'react';
import axios from 'axios';

import secrets from '../../secretStuff';
import MPG from './components/MPG';
import HP from './components/HP';
import Miles from './components/Miles';

import carModels from './carModels';


export class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carModelList: {},
      showModal: 'displayNone',
      carEquipment: []
    };

    this.handleGetCarMakes = this.handleGetCarMakes.bind(this);
    this.renderCarList = this.renderCarList.bind(this);
    this.renderCarEquipment = this.renderCarEquipment.bind(this);
  }

  componentWillMount() {
    // this.setState({carModelList: carModels.Trims});
  }

  renderCarList() {
    if (this.state.carModelList.Trims) {
      return this.state.carModelList.Trims.map((car, index) => {
        return (
          <div className='carCard' key={index}>
            <div>
              <div>{car.model_make_id}</div>
              <div>{car.model_name}</div>
            </div>
          </div>
        );
      });
    }
  }

  renderCarEquipment() {
  }

  handleGetCarMakes() {
    axios({
      method: 'GET',
      url: `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&&year=2017&sold_in_us=1&min_lkm_hwy=50`})
      .then(response => {
        let responseNoToken = response.data.slice(2, -2);
        let parsedResponseNoToken = JSON.parse(responseNoToken);
        this.setState({carModelList: parsedResponseNoToken});
      })
      .catch(err => {
        console.warn('err in handleGetCarMakes', err);
      });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>CarPicker</h1>
          <button onClick={this.handleGetCarMakes}>Request Car List</button>
          {this.renderCarEquipment()}
        </div>
        <MPG/>
        <HP/>
        <Miles/>
        <div className="col-lg-12 col-md-12">
          {this.renderCarList()}
        </div>
      </div>
    );
  }
}
