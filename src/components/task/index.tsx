import React from 'react';
import { Select } from '@material-ui/core';
import './style.css';

export const Task = () => {
  return (
    <div className='task'>
      <span className='task_date'>2021.03.28</span>
      <div className='task_text_contents'>
        <h3 className='task_title'>サンプルタイトル</h3>
        <p className='task_sentence'>サンプル内容</p>
      </div>
  
      <div className='task_input_contents'>
        <Select />
      </div>
    </div>
  );
};