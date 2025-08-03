import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 88 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik Pandya', score: 76 },
    { name: 'Shreyas Iyer', score: 67 },
    { name: 'Ravindra Jadeja', score: 72 },
    { name: 'R. Ashwin', score: 60 },
    { name: 'Shubman Gill', score: 89 },
    { name: 'Bumrah', score: 50 },
    { name: 'Siraj', score: 80 },
    { name: 'Ishan Kishan', score: 65 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
