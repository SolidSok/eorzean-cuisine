import React from 'react';
import './menu.css';
import MenuCard from './menuCard/menuCard';
import mockData from '../../mockData';

export default function Menu() {
  // sample array for dev testing, will replace with data from API//
  // const food = [
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'appetizer',
  //     region: 'region',
  //     id: 1,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'appetizer',
  //     region: 'region',
  //     id: 2,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'appetizer',
  //     region: 'region',
  //     id: 3,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'breakfast',
  //     region: 'region',
  //     id: 4,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'breakfast',
  //     region: 'region',
  //     id: 5,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'entree',
  //     region: 'region',
  //     id: 6,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'entree',
  //     region: 'region',
  //     id: 7,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'dessert',
  //     region: 'region',
  //     id: 8,
  //   },
  //   {
  //     name: 'food',
  //     description:
  //       '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earumlibero quo ipsam dolore repudiandae illum labore porro maioreseius debitis, quaerat quae dolorum repellendus quos. Hiccumincidunt excepturi expedita.',
  //     type: 'dessert',
  //     region: 'region',
  //     id: 9,
  //   },
  // ];
  // // create different arrays from API data to fill each food section//
  // const appetizers = food.filter(food => food.type === 'appetizer');
  // const breakfast = food.filter(food => food.type === 'breakfast');
  // const entrees = food.filter(food => food.type === 'entree');
  // const desserts = food.filter(food => food.type === 'dessert');

  const appetizers = mockData.filter(food => food.type === 'appetizer');
  const breakfast = mockData.filter(food => food.type === 'breakfast');
  const entrees = mockData.filter(food => food.type === 'entree');
  const desserts = mockData.filter(food => food.type === 'dessert');
  return (
    //great example of reusable components below //
    <div className="menu sample">
      <MenuCard food={appetizers} name="Appetizers" />

      <MenuCard food={breakfast} name="Breakfast" />

      <MenuCard food={entrees} name="Entrees" />

      <MenuCard food={desserts} name="Desserts" />
    </div>
  );
}
