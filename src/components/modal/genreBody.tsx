import React from 'react';
import CancelIcon from "@material-ui/icons/Cancel";
import './style.css';

export const GenreBody = () => {
  return (
    <div className='modal_body'>
      <h2 className='input_menu'>ジャンル編集</h2>
      <ul>
        <li className='genre_title'>
          <span>サンプル株式会社</span>
          <CancelIcon />
        </li>
      </ul>
      <input type="text"/>
      <input type='button' className='input_submit' value='追加'/>
    </div>
  );
};