import React from 'react';
import './menu.css';
import MenuItemCard from './menuItemCard';
import SampleImage from './sampleImage';

export default function Menu() {
  // sample array for dev testing, will replace with data from API//
  const food = [
    {
      name: 'food',
      description: 'description',
      type: 'appetizer',
      region: 'region',
      id: 1,
    },
    {
      name: 'food',
      description: 'description',
      type: 'appetizer',
      region: 'region',
      id: 2,
    },
    {
      name: 'food',
      description: 'description',
      type: 'appetizer',
      region: 'region',
      id: 3,
    },
    {
      name: 'food',
      description: 'description',
      type: 'breakfast',
      region: 'region',
      id: 4,
    },
    {
      name: 'food',
      description: 'description',
      type: 'breakfast',
      region: 'region',
      id: 5,
    },
    {
      name: 'food',
      description: 'description',
      type: 'entree',
      region: 'region',
      id: 6,
    },
    {
      name: 'food',
      description: 'description',
      type: 'entree',
      region: 'region',
      id: 7,
    },
    {
      name: 'food',
      description: 'description',
      type: 'dessert',
      region: 'region',
      id: 8,
    },
    {
      name: 'food',
      description: 'description',
      type: 'dessert',
      region: 'region',
      id: 9,
    },
  ];
  // create different arrays from API data to fill each food section//
  const appetizers = food.filter(food => food.type === 'appetizer');
  const breakfast = food.filter(food => food.type === 'breakfast');
  const entrees = food.filter(food => food.type === 'entree');
  const desserts = food.filter(food => food.type === 'dessert');

  return (
    <div className="menu">
      <div className="sample">
        <h2>
          <b>Appetizers</b>
        </h2>
        <SampleImage />
        <MenuItemCard key={food.id} food={appetizers} />
      </div>

      <div className="sample">
        <h2>
          <b>Breakfast</b>
        </h2>
        <SampleImage />
        <MenuItemCard food={breakfast} key={food.id} />
      </div>

      <div className="sample">
        <h2>
          <b>Entrees</b>
        </h2>
        <SampleImage />
        <MenuItemCard food={entrees} key={food.id} />
      </div>

      <div className="sample">
        <h2>
          <b>Desserts</b>
        </h2>
        <SampleImage />
        <MenuItemCard food={desserts} key={food.id} />
      </div>
    </div>
  );
}
