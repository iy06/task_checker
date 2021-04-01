import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from '../../components/modal';
import { taskRequest } from '../../requests/taskRequest';
import { genreRequest } from '../../requests/genreRequest';
import { Data, DataAction, useDataReducer } from '../../hooks/useDataReducer';
import { useFilterTasks } from '../../hooks/useFilterTasks';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import './style.css';

type DataContextType = {
  data: Data;
  dispatch: ({ type, payload }: DataAction) => void;
};

export const DataContext = React.createContext<DataContextType>(
  {} as DataContextType
);

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useDataReducer();
  const [selectGenreId, setSelectGenreId] = useState<number>(0);
  const [filteredTasks, tasksDispatch] = useFilterTasks();

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

  useEffect(() => {
    tasksDispatch({
      type: 'filterTask',
      payload: { tasks: data.tasksData, genreId: selectGenreId },
    })
  }, [data.tasksData]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      <div className='main'>
        <Header />
        <div className='genre'>
          <Select genres={ data.genresData }/>
          <AddCircleOutlineIcon onClick={ handleOpen } className='add_circle_outline_icon' fontSize='default' />
          <FormModal
            handleClose={ handleClose }
            isOpen={ isOpen }
            body='genreBody'
          />
        </div>
        <div className='contents'>
          <ToDoList tasks={ filteredTasks }/>
        </div>
      </div>
    </DataContext.Provider>
  );
};