import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    return(
      <ul>
        { this.props.restaurants.map(rest => <Restaurant />) }
      </ul>
    );
  }
};

export default Restaurants;