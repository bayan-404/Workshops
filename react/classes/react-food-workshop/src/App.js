import React from 'react';
import Filters from './components/Filters';
import DishList from './components/DishList';
import CategoryFilter from './components/CategoryFilter';
import dishes from './data';

class App extends React.Component {
  state = {
    min: 0,
    max: 10,
    category: '',
  };
  getCategory = (category) => {
    this.setState({ category });
  };
  passMin = (min) => {
    this.setState((prevState) => {
      if (prevState.min !== min)
        return {
          min,
        };
    });
  };
  passMax = (max) =>
    this.setState((prevState) => {
      if (prevState.max !== max)
        return {
          max,
        };
    });

  render() {
    const filteredDishes = dishes
      .filter(
        (dish) => dish.price >= this.state.min && dish.price <= this.state.max
      )
      .filter((listItem) =>
        this.state.category === 'all'
          ? listItem
          : listItem.category === this.state.category
      );

    return (
      <main>
        <div>
          <section className='filters'>
            <h1>Burger Place</h1>
            <h2>Filters</h2>
            <Filters passMax={this.passMax} passMin={this.passMin} />
            <CategoryFilter getCategory={this.getCategory} />
          </section>
          <section className='dishes'>
            <h2>Dishes</h2>

            <DishList filteredArray={filteredDishes} />
          </section>
        </div>
      </main>
    );
  }
}

export default App;
