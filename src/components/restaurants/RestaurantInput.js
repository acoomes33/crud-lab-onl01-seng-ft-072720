import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    //this.props.addRestaurant(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/>
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
