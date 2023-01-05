import React from 'react';
import './menu.css';
import MenuCard from './menuCard/menuCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Menu() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const breakfastImage = (
    <img href="https://images.squarespace-cdn.com/content/v1/5bf4a3a07e3c3abf46ab8bdd/1570568873820-W2CT27ALLVTIF0JMREU0/00100lPORTRAIT_00100_BURST20191007182121684_COVER.jpg?format=1000w" />
  );

  const getFood = async () => {
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
    setLoading(true);
    getFood();
    setLoading(false);
  }, []);

  return (
    //great example of reusable components below //
    loading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="menu">
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
          image={breakfastImage}
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
    )
  );
}
