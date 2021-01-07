import React, { Component } from 'react';

class Filters extends Component {
  handleMinChange = (range) => {
    const lowerPrice = range.target.value;
    this.props.passMin(lowerPrice);
  };

  handleMaxChange = (range) => {
    const higherPrice = range.target.value;
    this.props.passMax(higherPrice);
  };

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Price</legend>
            <label>min Price</label>
            <input
              type='range'
              min='0'
              max='10'
              name='min'
              onChange={this.handleMinChange}
            />
            <label>max Price</label>
            <input
              type='range'
              min='0'
              max='10'
              name='max'
              onChange={this.handleMaxChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Filters;
