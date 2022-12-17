import React from 'react';

export default function LocationCard({ locationSample }) {
  return (
    <div>
      {locationSample.map(l => {
        return (
          <div key={l.id} className="sample">
            {l.name}
            <br />
            {l.description}
          </div>
        );
      })}
    </div>
  );
}
