// components/UpdateItemForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../redux/actions';

const UpdateItemForm = ({ item, setEditItem }) => {
  const [name, setName] = useState(item.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateItem({ ...item, name }));
    setEditItem(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItemForm;
