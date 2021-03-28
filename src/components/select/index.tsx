import React from 'react';
import './style.css';


export const Select = () => {
  return (
    <select className='select'>
      <option value={ 0 }>サンプル0</option>
      <option value={ 1 }>サンプル1</option>
      <option value={ 2 }>サンプル2</option>
    </select>
  );
};