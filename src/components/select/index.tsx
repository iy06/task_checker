import React from 'react';
import { GenreType } from '../../interfaces/GenreType'
import './style.css';

interface Props {
  genres?: GenreType[];
  changeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  initialValue?: number;
  optionElements?: string[];
}

const renderOption = (props: Props) => {

  if (props.genres !== undefined) {
    return (
      props.genres.map((genre: GenreType) => (
        <option key={ genre.id } value={ genre.id }>
          { genre.name }
        </option>
      ))
    );
  } else if (props.optionElements !== undefined) {
    return (
      props.optionElements.map((option: string, index: number) => (
        <option key={ index } value={ index }>
          { option }
        </option>
      ))
    );
  }
};

export const Select = (props: Props) => {
  return (
    <select className='select' onChange={ props.changeSelect } value={ props.initialValue }>
      { props.genres !== undefined && <option value={0}></option> }
      { renderOption(props) }
    </select>
  );
};