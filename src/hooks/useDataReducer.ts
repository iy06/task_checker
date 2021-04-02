import { useReducer } from 'react';
import { TaskType } from '../interfaces/TaskType';
import { GenreType } from '../interfaces/GenreType';

// actionの型
export type DataAction = {
  type: 'tasksUpdate' | 'genresUpdate'
  payload: { task?: TaskType[]; genre?: GenreType[]; };
};

// dataの型？
export type Data = {
  tasksData:  TaskType[];
  genresData: GenreType[];
};

// リデューサー
export const useDataReducer = (): [Data, ({ type, payload }: DataAction) => void] => {

  const initialData = {
    tasksData: [
      {
        id: 0,
        name: '',
        explanation: '',
        deadlineDate: '',
        status: 0,
        genreId: 0,
      },
    ],
    genresData: [
      {
        id: 0,
        name: '',
      }
    ],
  }

  const reducer = (state: Data, action: DataAction) => {
    // console.log(state, action);
    switch (action.type) {
      case 'tasksUpdate':
        return { ...state, tasksData: action.payload.task || state.tasksData };
      case 'genresUpdate':
        return { ...state, genresData: action.payload.genre || state.genresData };
    }
  }
  //  home/index.tsのdispatchと連携
  const [data, dispatch] = useReducer(reducer, initialData);
  return [data, dispatch]
};