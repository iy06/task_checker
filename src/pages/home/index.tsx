import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from '../../components/modal';
import { taskRequest } from '../../requests/taskRequest';
import { genreRequest } from '../../requests/genreRequest';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import './style.css';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect (() => {
    const showTasks = async () => {
      const response = await taskRequest('fetchTasks');
      console.log(response)
    }
    const showGenres = async () => {
      const response = await genreRequest('fetchGenres');
      console.log(response)
    }

    showTasks();
    showGenres();
  }, [])

  return (
    <div className='main'>
      <Header />
      <div className='genre'>
        <Select />
        <AddCircleOutlineIcon onClick={ handleOpen } className='add_circle_outline_icon' fontSize='default' />
        <FormModal
          handleClose={ handleClose }
          isOpen={ isOpen }
          body='genreBody'
        />
      </div>
      <div className='contents'>
        <ToDoList />
      </div>
    </div>
  );
};