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
      carModelList: [],
      showModal: 'displayNone',
      carEquipment: []
    };

    this.handleGetCarMakes = this.handleGetCarMakes.bind(this);
    this.renderCarList = this.renderCarList.bind(this);
    this.renderCarEquipment = this.renderCarEquipment.bind(this);
  }

  componentWillMount() {
    this.setState({carModelList: carModels});
  }

  renderCarList() {
    if (this.state.carModelList) {
      return this.state.carModelList.makes.map((car, index) => {
        return (
          <div key={index}>
            <div>
              {car.name}
            </div>
          </div>
        );
      });
    }
  }

  renderCarEquipment() {
    if (this.state.carEquipment) {
      return this.state.carEquipment.engines.map((engine, index) => {
        return (
          <div key={index}>
            <div>{engine.id}</div>
            <div>{engine.horsepower}</div>
          </div>
        );
      });
    }
  }

  handleGetCarMakes() {
    // axios.get(`http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&state=new&api_key=${secrets}`)
    axios.get(`http://api.edmunds.com/api/vehicle/v2/styles/101353967/engines?fmt=json&api_key=${secrets}`)
      .then(response => {
        console.log('response', response);
        this.setState({carEquipment: response.data });
      })
      .catch(err => {
        console.warn('err in getCarMakes', err);
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
        <MPG carModelList={this.state.carModelList}/>
        <HP carModelList={this.state.carModelList}/>
        <Miles carModelList={this.state.carModelList}/>
        <div className="col-lg-12 col-md-12">
          {this.renderCarList()}
        </div>
      </div>
    );
  }
}
