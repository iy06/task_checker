import React, { useState } from 'react';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from '../../components/modal';
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

  return (
    <div className='main'>
      <Header />
      <div className='genre'>
        <Select />
        <AddCircleOutlineIcon onClick={ handleOpen } className='add_circle_outline_icon' fontSize='default' />
        <FormModal handleClose={ handleClose } isOpen={ isOpen } />
      </div>
      <div className='contents'>
        <ToDoList />
      </div>
    </div>
  );
};