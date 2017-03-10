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
      searchBool: false,
      carModelList: {},
      showModal: 'displayNone',
      MPG: 0,
      HP: 0,
      miles: 200000,
      year: 2017
    };

    this.handleGetCarMakes = this.handleGetCarMakes.bind(this);
    this.renderCarList = this.renderCarList.bind(this);
    this.updateStateFromChildren = this.updateStateFromChildren.bind(this);
  }

  componentWillMount() {
    // this.setState({carModelList: carModels.Trims});
  }

  renderCarList() {
    if (this.state.carModelList.Trims) {
      return this.state.carModelList.Trims.map((car, index) => {
        return (
          <div className='carCardContainer container col-lg-4 col-md-4 col-sm-4' key={index}>
            <div className="row">
              <div className='carCard thumbnail col-lg-8 col-md-8 col-sm-8'>
                <div>{car.model_make_id}</div>
                <div>{car.model_name}</div>
                <div>PS:{car.model_engine_power_ps}</div>
                <div>LKM city/hwy:{car.model_lkm_city}/{car.model_lkm_hwy}</div>
              </div>
            </div>
          </div>
        );
      });
    }
    else if(this.state.searchBool) {
      return <p>Sorry, your search returned no results</p>
    }
  }

  handleGetCarMakes() {
    const a = this.state;
    axios.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&year=${a.year}&sold_in_us=1&min_lkm_hwy=${a.MPG}&min_power=${a.HP}`)
      .then(response => {
        let responseNoToken = response.data.slice(2, -2);
        let parsedResponseNoToken = JSON.parse(responseNoToken);
        this.setState({carModelList: []});
        console.log('parsedResponseNoToken', parsedResponseNoToken);
        if(parsedResponseNoToken.Trims.length > 0) {
          this.setState({carModelList: parsedResponseNoToken});
        }
        else if (parsedResponseNoToken.Trims.length === 0) {
          this.setState({searchBool: true});
        }
      })
      .catch(err => {
        console.warn('err in handleGetCarMakes', err);
      });
  }

  updateStateFromChildren(key, value) {
    this.setState({[key]: value});
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>CarPicker</h1>
          <button onClick={this.handleGetCarMakes}>Request Car List</button>
        </div>
        <MPG updateStateFromChildren={this.updateStateFromChildren} MPG={this.state.MPG}/>
        <p>this.state.MPG in hello{this.state.MPG}</p>
        <HP updateStateFromChildren={this.updateStateFromChildren} HP={this.state.HP}/>
          <p>this.state.HP in hello{this.state.HP}</p>
        <Miles updateStateFromChildren={this.updateStateFromChildren} Miles={this.state.Miles}/>
          <p>this.state.Miles in hello{this.state.Miles}</p>
        <div className="col-lg-12 col-md-12">
          {this.renderCarList()}
        </div>
      </div>
    );
  }
}
