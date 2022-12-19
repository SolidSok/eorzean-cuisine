import React from 'react';
import SampleImage from '../sampleImage';
import './menuCard.css';

export default function MenuCard({ food, name }) {
  return (
    <div className="menu">
      <h1>
        <span>{name}</span>
      </h1>
      <SampleImage />
      {food.map(food => {
        return (
          <div
            // key={food.id}
            className="menu-item">
            <b>
              <p>
                <span>{food.name}</span>{' '}
              </p>
            </b>
            <ul>
              <li>
                {' '}
                <p> {food.description}</p>
              </li>
              <li>
                {' '}
                <p>Originates from: {food.location}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
