import React, { useContext } from 'react';
import { GenreType } from '../../interfaces/GenreType';
import { DataContext } from '../../pages/home/index';
import CancelIcon from "@material-ui/icons/Cancel";
import './style.css';

export const GenreBody = () => {
  const { data } = useContext(DataContext);
  console.log(data.genresData);

  return (
    <div className='modal_body'>
      <h2 className='input_menu'>ジャンル編集</h2>
      <ul>
        { data.genresData.map((genre: GenreType) => {
          return (
            <li className='genre_title' key={ genre.id }>
              <span>{ genre.name }</span>
              <CancelIcon />
            </li>
          );
        })
         }
      </ul>
      <input type="text"/>
      <input type='button' className='input_submit' value='追加'/>
    </div>
  );
};