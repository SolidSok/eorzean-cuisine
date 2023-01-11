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
          images={images
            .filter(img => img.type === 'appetizer')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'breakfast')}
          name="Breakfast"
          images={images
            .filter(img => img.type === 'breakfast')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'noodles')}
          name="Noodles"
          images={images
            .filter(img => img.type === 'noodles')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'soups')}
          name="Soups"
          images={images
            .filter(img => img.type === 'soups')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'meats')}
          name="Meats"
          images={images
            .filter(img => img.type === 'meats')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />{' '}
        <MenuCard
          food={food.filter(food => food.type === 'sandwich')}
          name="Sandwiches"
          images={images
            .filter(img => img.type === 'sandwiches')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'dessert')}
          name="Desserts"
          images={images
            .filter(img => img.type === 'desserts')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
        <MenuCard
          food={food.filter(food => food.type === 'drink')}
          name="Drinks"
          images={images
            .filter(img => img.type === 'drinks')
            .map(img => {
              return (
                <div>
                  <img className="menu-image" alt={img.alt} src={img.url} />
                </div>
              );
            })}
        />
      </div>
    )
  );
}
