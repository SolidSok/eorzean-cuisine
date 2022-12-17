import React from 'react';

export default function MenuItemCard({ food }) {
  return (
    <div>
      {food.map(food => {
        return (
          <div key={food.id} className="menu-item">
            <p> {food.name}</p>
            <p>{food.type}</p>
            <p> {food.description}</p>
            <p> {food.region}</p>
          </div>
        );
      })}
    </div>
  );
}
