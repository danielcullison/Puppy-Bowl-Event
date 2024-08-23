import React from "react";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";

const Players = () => {
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading players: {error.message}</p>;
  }

  return (
    <div className="players">
      {data.data.players.map((player) => (
        <div key={player.id} className="player-card">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
          <div className="player-details">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
