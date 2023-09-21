import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';
import { EditIcon } from '../TodoIcon/EditICon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <EditIcon
        onEdit={props.onEdit}
      />
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
