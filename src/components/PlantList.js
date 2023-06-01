import React from 'react';
import PlantCard from './PlantCard';
import { useAppContext } from '../context/app-context';

function PlantList() {
  const { plants } = useAppContext();

  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard key={plant.id} {...plant} />
      ))}
    </ul>
  );
}

export default PlantList;
