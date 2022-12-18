import React from 'react';
import SampleImage from './sampleImage';

export default function MenuCard({ food, name }) {
  return (
    <div>
      <h1>{name}</h1>
      <SampleImage />
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
