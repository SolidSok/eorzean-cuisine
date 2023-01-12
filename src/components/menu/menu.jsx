import React from 'react';
import './menu.css';
import MenuCard from './menuCard/menuCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import menuImages from './menuImages';

export default function Menu() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const images = menuImages;

  const getFood = async () => {
    await axios
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
          id="appetizers"
          images={images
            .filter(img => img.type === 'appetizer')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'breakfast')}
          name="Breakfast"
          id="breakfast"
          images={images
            .filter(img => img.type === 'breakfast')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'noodles')}
          name="Noodles"
          id="noodles"
          images={images
            .filter(img => img.type === 'noodles')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'soups')}
          name="Soups"
          id="soups"
          images={images
            .filter(img => img.type === 'soups')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'meats')}
          name="Meats"
          id="meats"
          images={images
            .filter(img => img.type === 'meats')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />{' '}
        <MenuCard
          food={food.filter(food => food.type === 'sandwich')}
          name="Sandwiches"
          id="sandwiches"
          images={images
            .filter(img => img.type === 'sandwiches')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'dessert')}
          name="Desserts"
          id="desserts"
          images={images
            .filter(img => img.type === 'desserts')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'drink')}
          name="Drinks"
          id="drinks"
          images={images
            .filter(img => img.type === 'drinks')
            .map(img => {
              return (
                <img
                  className="menu-image"
                  alt={img.alt}
                  src={img.url}
                  key={img.alt}
                />
              );
            })}
        />
      </div>
    )
  );
}
