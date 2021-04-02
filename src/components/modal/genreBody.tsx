import React, { useContext, useState } from 'react';
import { GenreType } from '../../interfaces/GenreType';
import { DataContext } from '../../pages/home/index';
import { genreRequest } from '../../requests/genreRequest';
import CancelIcon from "@material-ui/icons/Cancel";
import './style.css';


export const GenreBody = () => {
  const { data, dispatch } = useContext(DataContext);
  const [genreName, setGenreName] = useState<string>('');

  const changeGenreName = (event: any) => {
    const value = event.target.value;
    setGenreName(value);
  };

  const handleSubmit = async () =>  {
    const newData: GenreType = { id: 0, name: genreName };
    try {
      const genresData = await genreRequest('createGenres', { data: newData });
      dispatch({ type: 'genresUpdate', payload: { genre: genresData } });
      setGenreName('');
    } catch( erorr ) {
      console.log(erorr.message);
    }
  };

  const handleDeleteBtn = async (genre: GenreType) => {
    try {
      const deleteGenres: GenreType[] = await genreRequest('deleteGenres', { data: genre });
      dispatch({ type: 'genresUpdate', payload: { genre: deleteGenres }});
      setGenreName('');
    } catch( erorr ) {
      console.log(erorr.message);
    }
  };

  return (
    <div className='modal_body'>
      <h2 className='input_menu'>ジャンル編集</h2>
      <ul>
        { data.genresData.map((genre: GenreType) => {
          return (
            <li className='genre_title' key={ genre.id }>
              <span>{ genre.name }</span>
              <CancelIcon  onClick={ () => { handleDeleteBtn(genre) } }/>
            </li>
          );
        })}
      </ul>
      <input type="text" onChange={ changeGenreName } value={ genreName }/>
      <input type='button' onClick={ handleSubmit } className='input_submit' value='追加'/>
    </div>
  );
};