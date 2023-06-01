import React from 'react';
import { useAppContext } from '../context/app-context';

function NewPlantForm() {
  const { addPlant } = useAppContext();
  const initialState = {
    name: '',
    image: '',
    price: '',
  };
  const [formData, setFormData] = React.useState(initialState);

  const onChangeHandler = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(plant => {
        addPlant(plant);
        setFormData(initialState);
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={onChangeHandler}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          step="0.01"
          onChange={onChangeHandler}
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
