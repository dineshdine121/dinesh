
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

const AddItemForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name };
    dispatch(addItem(newItem));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
