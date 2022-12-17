import './locations.css';

import LocationCard from './LocationCard';
export default function Locations() {
  const locationSample = [
    { name: 'Limsa Lominsa', description: 'lorem ipsum', id: 1 },
    { name: 'location', description: 'description', id: 2 },
    { name: 'location', description: 'description', id: 3 },
    { name: 'location', description: 'description', id: 4 },
    { name: 'location', description: 'description', id: 5 },
  ];
  return (
    <div className="locations">
      <h1 className="title">Locations</h1>
      <div className="content">
        {' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id corporis
        inventore minus autem, repellat eos nulla quis debitis? Modi asperiores
        consectetur voluptates, ullam ut dolorum fuga labore sapiente assumenda
        tenetur.
      </div>

      <LocationCard key={locationSample} locationSample={locationSample} />
    </div>
  );
}
