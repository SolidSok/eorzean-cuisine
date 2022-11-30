const mockData = [
  {
    id: '1',
    location: 'limsa',
    inn: 'inn',
    food: ['apple', 'banana', 'carrot', 'donut'],
    attractions: 'the sea',
  },
  {
    appetiziers: [
      {
        id: 1,
        name: "Knight's Bread",
        location: 'Ishgard',
        description:
          'A hard, leavened rye bread traditionally eaten by the knights of Ishgard',
      },
    ],
  },
  {
    breakfast: [
      {
        id: 2,
        name: 'Lo Noscean Toast',
        location: 'Limsa-Lominsa',
        description:
          'A slice of bread soaked in a mixture of buffalo milk and eggs, and then fried in creamy butter. A specialty at the Drowning Wench in Limsa Lominsa.',
      },
    ],
  },
  {
    soups_and_stews: [
      {
        id: 3,
        name: 'Raptor Stew',
        location: 'Gridania',
        description:
          'A tender piece of lean raptor shank stewed with mushrooms. A Carline Canopy specialty.',
      },
    ],
  },
  {
    meats: [
      {
        id: 4,
        name: "Meat Miq'abob",
        location: 'none',
        description:
          'A traditional Keeper of the Moon dish consisting of tender dodo meat and ripe ruby tomatoes on a stick, roasted to perfection.',
      },
      {
        id: 5,
        name: 'Shorlog',
        location: 'Azim Steppe',
        description:
          'Heavily spiced dzo meat charred to perfection over an open flame. Common fare amongst the nomadic steppe tribes.',
      },
    ],
  },
];

export default mockData;
