import React from 'react';
import './menu.css';
import MenuCard from './menuCard/menuCard';
import mockData from '../../mockData';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Menu() {
  const [food, setFood] = useState([]);

  const getFood = () => {
    axios
      .get('https://eorzean-cuisine.herokuapp.com/food')
      .then(res => {
        setFood(res.data);
        console.log(res.data, 'axios');
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFood();
  }, []);
  console.log(food, 'food');

  return (
    //great example of reusable components below //
    <div className="menu sample">
      <MenuCard
        food={food.filter(food => food.type === 'appetizer')}
        name="Appetizers"
      />
      <MenuCard
        food={food.filter(food => food.type === 'noodles')}
        name="Noodles"
      />
      <MenuCard
        food={food.filter(food => food.type === 'breakfast')}
        name="Breakfast"
      />
      <MenuCard
        food={food.filter(food => food.type === 'soups')}
        name="Soups"
      />
      <MenuCard
        food={food.filter(food => food.type === 'meats')}
        name="Meats"
      />{' '}
      <MenuCard
        food={food.filter(food => food.type === 'sandwich')}
        name="Sandwiches"
      />
      <MenuCard
        food={food.filter(food => food.type === 'dessert')}
        name="Desserts"
      />
      <MenuCard
        food={food.filter(food => food.type === 'drink')}
        name="Drinks"
      />
    </div>
  );
}
