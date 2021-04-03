import React, { useContext, useState } from 'react';
import { TaskType } from '../../interfaces/TaskType';
import { taskRequest } from '../../requests/taskRequest';
import { Select } from '../select';
import { DataContext } from '../../pages/home';
import './style.css';

interface Props {
  handleClose: () => void;
  initialValue?: number;
}

export const TaskBody = (props: Props) => {
  const { data, dispatch } = useContext(DataContext);
  const [ title, setTitle ] = useState<string>('');
  const [ explanation, setExplanation ] = useState<string>('');
  const [ deadlineDate, setDeadlineDate ] = useState<string>('');
  const [genreId, setGenreId] = useState<number>(0);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const taskTitleValue:string = event.target.value;
    setTitle(event.target.value);
  }
  const handleChangeExplanation = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // const taskExplanationValue:string = event.target.value;
    setExplanation(event.target.value);
  }
  const handleChangeDeadLine = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const taskDeadLineValue:string = event.target.value;
    setDeadlineDate(event.target.value);
  }
  const handleChangeGenreId = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // const taskGenreIdValue:number = Number(event.target.value);
    setGenreId(Number(event.target.value));
  }

  const handleSubmit = async () => {
    const newData = {
      id: 0,
      name: title,
      genreId: genreId,
      explanation: explanation,
      deadlineDate: deadlineDate,
      status: 0,
    };

    try {
      const tasks: TaskType[] = await taskRequest('createTasks', {
        data: newData,
      });
      dispatch({ type: 'tasksUpdate', payload: { task: tasks }});
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form className='modal_body'>
      <h2 className='input_menu'>タスク追加</h2>
      <div>
        <h4 className='input_title'>ジャンル</h4>
        <div className='task_genre'>
          <Select genres={ data.genresData } initialValue={ genreId } changeSelect={ handleChangeGenreId }/>
        </div>
        <h4 className='input_title'>タイトル</h4>
        <input type='text' onChange={ handleChangeTitle } value={ title } />
        <h4 className='input_title'>説明</h4>
        <textarea onChange={ handleChangeExplanation } value={ explanation } />
        <h4 className='input_title' >期限</h4>
        <input type='date' onChange={ handleChangeDeadLine } value={ deadlineDate } />
      </div>
      <input className='input_submit' type='button' value='送信' onClick={ handleSubmit } />
    </form>
  );
};