import { useReducer } from 'react';
import { TaskType } from '../interfaces/TaskType';
import { GenreType } from '../interfaces/GenreType';

export type DataAction = {
  type: 'setTasks' | 'setGenres'
};

export type Data = {
  tasksData:  TaskType[];
  genresData: GenreType[];
};

export const useDataReducer = (): any => {
  const initialData = {
    tasksData:  [],
    genresData: []
  }

  const reducer = (state: Data, action: DataAction) => {
    return state
  }

  const [data, dispatch] = useReducer(reducer, initialData)
  return [data, dispatch]
};