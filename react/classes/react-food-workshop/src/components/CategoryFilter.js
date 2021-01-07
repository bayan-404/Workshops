import React, { Component } from 'react';
const categories = [
  'all',
  'burger',
  'hot dog',
  'sandwich',
  'fries',
  'topping',
  'drink',
  'extra',
];

class CategoryFilter extends Component {
  setChoosenDishes = (e) => {
    // I want each one of the DishesCategory that equal to the CategoryChoosen
    const choosenDishes = e.target.value;
    this.props.getCategory(choosenDishes);
  };
  render() {
    return (
      <form>
        <fieldset>
          <legend>Category</legend>
          {categories.map((category) => (
            <div key={category}>
              <label>{category}</label>
              <input
                value={category}
                type='radio'
                onChange={this.setChoosenDishes}
              />
            </div>
          ))}
        </fieldset>
      </form>
    );
  }
}

export default CategoryFilter;
