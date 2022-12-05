import React from 'react';

import './menu.css';
export default function Menu() {
  return (
    <div className="menu">
      <div className="sample">
        <p>
          <b>Appetizers</b>
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="sample">
        <p>
          <b>Breakfast</b>
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="sample">
        <p>
          <b>Lunch</b>
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="sample">
        <p>
          <b>Entrees</b>
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="sample">
        <p>
          <b>Desserts</b>
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
}
