import React from 'react';
import './locations.css';

export default function LocationCard({ locationSample }) {
  return (
    <div>
      {locationSample.map(l => {
        return (
          <div key={l.id} className="location-card">
            <h1>
              <span> {l.name}</span>
            </h1>
            <div className="location-details">
              {' '}
              <div className="location-description">
                {' '}
                {l.description}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  eveniet enim labore cum praesentium, quae maiores a! Maxime
                  incidunt fugit aperiam facere quam voluptatibus? Fuga magni
                  aut atque ipsum doloribus.
                </p>
              </div>
              <img
                src="https://via.placeholder.com/200x150?text=Location+Figurehead"
                alt="placeholder"
              />{' '}
              <div className="location-locales">
                Locales
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid explicabo facilis laborum, porro molestias magnam
                  deserunt. Ullam fugit assumenda, odit repellat ipsum ut
                  doloribus cupiditate, blanditiis saepe debitis aliquid
                  architecto.
                </p>
              </div>
              <div className="location-tribes">
                Tribes
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat dignissimos neque nostrum optio quae minima delectus
                  porro quibusdam, consequuntur temporibus odio explicabo
                  doloremque libero alias nihil, fugit voluptates aliquam cum?
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
