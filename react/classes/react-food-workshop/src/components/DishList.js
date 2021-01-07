import React from 'react';
function DishList({ filteredArray }) {
  return (
    <ul className='grid'>
      {filteredArray.map((dish) => (
        <li key={dish.id} className='card'>
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <span>${dish.price}</span>
        </li>
      ))}
    </ul>
  );
}

export default DishList;
