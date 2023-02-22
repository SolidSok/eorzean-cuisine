import './locations.css';

import LocationCard from './LocationCard';
export default function Locations() {
  const locationSample = [
    {
      name: 'Limsa Lominsa',
      description: 'lorem ipsum',
      id: 1,
      leaderImage:
        'https://via.placeholder.com/200x150?text=Location+Figurehead',
    },
    {
      name: "Ul'dah",
      description: 'description',
      id: 2,
      leaderImage:
        'https://via.placeholder.com/200x150?text=Location+Figurehead',
    },
    {
      name: 'Gridania',
      description: 'description',
      id: 3,
      leaderImage:
        'https://via.placeholder.com/200x150?text=Location+Figurehead',
    },
    {
      name: 'Ishgard',
      description: 'description',
      id: 4,
      leaderImage:
        'https://via.placeholder.com/200x150?text=Location+Figurehead',
    },
    { name: 'Kugane', description: 'description', id: 5 },
  ];
  return (
    <div className="location">
      <div className="location-header">
        <h1 className="title header">The Lands of Eorzea</h1>
        <p className="header info">
          The World of Final Fantasy 14 is filled with many different
          environments and cultures. These lands span across, not just the
          continent of Eorzea, but also space and time.
        </p>
      </div>

      <LocationCard key={locationSample} locationSample={locationSample} />
    </div>
  );
}
