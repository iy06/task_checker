import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from '../../components/modal';
import { TaskType } from '../../interfaces/TaskType';
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
  const taskStatusElements: string[] = [
    'ToDo',
    'Pending',
    'Doing(ToDay)',
    'WIP',
    'Done',
  ];

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const changeSelectGenreId = (event: any) => {
    console.log(event);
    const id = event.target.value;
    setSelectGenreId(id);
  }
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
  }, [data.tasksData, selectGenreId]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      <div className='main'>
        <Header />
        <div className='genre'>
          <Select genres={ data.genresData } changeSelect={ changeSelectGenreId }/>
          <AddCircleOutlineIcon onClick={ handleOpen } className='add_circle_outline_icon' fontSize='default' />
          <FormModal
            handleClose={ handleClose }
            isOpen={ isOpen }
            body='genreBody'
          />
        </div>
        <div className='contents'>
          { taskStatusElements.map((element) => {
            const tasks = filteredTasks.filter((filteredTask: TaskType) => {
              return (
                filteredTask.status === taskStatusElements.indexOf(element)
              );
            })
            return <ToDoList title={ element } tasks={ tasks } key={ element }/>
          })}
        </div>
      </div>
    </DataContext.Provider>
  );
};