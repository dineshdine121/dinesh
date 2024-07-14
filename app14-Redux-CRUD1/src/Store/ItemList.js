// components/ItemList.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/actions';
import UpdateItemForm from './UpdateItemForm';

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const [editItem, setEditItem] = useState(null);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      {editItem ? (
        <UpdateItemForm item={editItem} setEditItem={setEditItem} />
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => setEditItem(item)}>Edit</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
