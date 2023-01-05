import React from 'react';
import './locations.css';

export default function LocationCard({ locationSample }) {
  return (
    <div>
      {locationSample.map(l => {
        return (
          <div key={l.id} className="location-card">
            <h2> {l.name}</h2>
            <div className="location-details">
              {' '}
              <div className="location-description"> {l.description}</div>
              <div className="location-locales">Locales</div>
              <div className="location-tribes">Tribes</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
