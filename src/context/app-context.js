import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({
  plants: [],
  addPlant: plant => {},
  searchText: '',
  onSearch: e => {},
});

export const AppProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(rs => rs.json())
      .then(data => setPlants(data));
  }, []);

  const addPlant = plant => {
    setPlants(prev => [...prev, plant]);
  };

  const onSearch = e => {
    setSearchText(e.target.value);
  };

  const filteredPlants = plants.filter(plant => {
    if (searchText === '') return true;

    return plant.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <AppContext.Provider
      value={{ plants: filteredPlants, addPlant, searchText, onSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
