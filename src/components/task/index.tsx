import React from 'react';
import { Select } from '../select';
import './style.css';

export const Task = () => {
  return (
    <div className='task'>
      <span className='task_date'>2021-03-28</span>
      <div className='task_text_contents'>
        <h3 className='task_title'>タスク名</h3>
        <p className='task_sentence'>タスク説明</p>
      </div>
      <div className='task_input_contents'>
        <Select />
      </div>
    </div>
  );
};