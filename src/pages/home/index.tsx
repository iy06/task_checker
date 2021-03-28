import React from 'react';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { ToDoList } from '../../components/toDoList';


import './style.css';

export const Home = () => {
  return (
    <div className='main'>
      <Header />
      <div className='genre'>
        <Select />
        <AddCircleOutlineIcon className='add_circle_outline_icon' fontSize='default' />
      </div>
      <div className='contens'>
        {/* ここを編集 */}
        <ToDoList />
      </div>
    </div>
  );
};