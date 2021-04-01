import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from '../../components/modal';
import { taskRequest } from '../../requests/taskRequest';
import { genreRequest } from '../../requests/genreRequest';
import { useDataReducer } from '../../hooks/useDataReducer';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import './style.css';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useDataReducer();

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  // 初回ロードに発火する
  useEffect (() => {
    const fetchData = async () => {
      const tasks = await taskRequest('fetchTasks');
      const genres = await genreRequest('fetchGenres');
      dispatch({ type: 'tasksUpdate', payload: { task: tasks }});
      dispatch({ type: 'genresUpdate', payload: { genre: genres} });
    };
    fetchData();
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data]);

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