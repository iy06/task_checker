import React from 'react';
import { Select } from '../select';
import './style.css';


export const TaskBody = () => {
  return (
    <form className='modal_body'>
      <h2 className='input_menu'>タスク追加</h2>
      <div>
        <h4 className='input_title'>ジャンル</h4>
        <div className='task_genre'>
          <Select />
        </div>
        <h4 className='input_title'>タイトル</h4>
        <input type="text"/>
        <h4 className='input_title'>説明</h4>
        <textarea name="" />
        <h4 className='input_title'>期限</h4>
        <input type="date"/>
      </div>
      <input className="input_submit" type="button" value="送信" />
    </form>
  );
};