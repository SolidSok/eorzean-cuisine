import React from 'react';
import './menu.css';
import MenuCard from './menuCard/menuCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Menu() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const appetizerImages = (
    <div>
      {' '}
      <img
        className="menu-image"
        alt="appetizer1"
        src="data:image/jpeg;base64,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"
      />
      <img
        className="menu-image"
        alt="appetizer2"
        src="https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/d8/d884ed3be4940265eda6cb17417c943544c76eaa.png?n6.28"
      />
      <img
        className="menu-image"
        alt="appetizer3"
        src="data:image/jpeg;base64,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"
      />
    </div>
  );
  const noodleImages = (
    <div>
      <img
        className="menu-image"
        alt="noodle1"
        src="data:image/jpeg;base64,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"
      />
    </div>
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
          images={appetizerImages}
        />
        <MenuCard
          food={food.filter(food => food.type === 'noodles')}
          name="Noodles"
          images={noodleImages}
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
    )
  );
}
