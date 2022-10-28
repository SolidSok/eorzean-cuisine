import React from 'react';

export default function TableGame() {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Used like so
  const deck = [
    'A-d',
    'K-d',
    'Q-d',
    'J-d',
    '10-d',
    '9-d',
    '8-d',
    '7-d',
    '6-d',
    '5-d',
    '4-d',
    '3-d',
    '2-d',
    'A-c',
    'K-c',
    'Q-c',
    'J-c',
    '10-c',
    '9-c',
    '8-c',
    '7-c',
    '6-c',
    '5-c',
    '4-c',
    '3-c',
    '2-c',
    'A-h',
    'K-h',
    'Q-h',
    'J-h',
    '10-h',
    '9-h',
    '8-h',
    '7-h',
    '6-h',
    '5-h',
    '4-h',
    '3-h',
    '2-h',
    'A-s',
    'K-s',
    'Q-s',
    'J-s',
    '10-s',
    '9-s',
    '8-s',
    '7-s',
    '6-s',
    '5-s',
    '4-s',
    '3-s',
    '2-s',
  ];
  let playerHand = [];
  let dealerHand = [];
  let newDeck = deck.concat();
}
