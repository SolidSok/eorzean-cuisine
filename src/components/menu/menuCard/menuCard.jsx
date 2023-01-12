import React from 'react';
import './menuCard.css';

export default function MenuCard({ food, name, images, id }) {
  return (
    <div className="menu" id={id}>
      <h2 className="category-header">
        <span className="category">{name}</span>
      </h2>
      {images}

      <div className="menu-section">
        {' '}
        {food.map(food => {
          return (
            <div
              // key={food.id}
              className="food-item"
              key={food._id}>
              <b>
                <p className="food-name">
                  <span>{food.name}</span>{' '}
                </p>
              </b>{' '}
              <p className="food-description"> {food.description}</p>{' '}
              <p className="food-description">Popular in: {food.region}</p>
              <p className="price">Price: {food.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
