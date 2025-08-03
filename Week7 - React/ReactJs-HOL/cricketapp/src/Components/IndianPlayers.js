import React from 'react';

const IndianPlayers = () => {
  const allPlayers = [
    'Kohli', 'Rohit', 'Rahul', 'Hardik', 'Iyer', 'Jadeja',
    'Ashwin', 'Gill', 'Bumrah', 'Siraj', 'Kishan'
  ];

  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  const T20players = ['Kohli', 'Rohit', 'Gill'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Saha'];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
