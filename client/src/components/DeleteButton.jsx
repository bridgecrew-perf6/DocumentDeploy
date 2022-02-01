import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const DeleteButton = (props) => {
  const {id} = props
  const history = useHistory()

const clickHandler = () =>{
  axios.delete(`http://localhost:8000/api/pet/${id}`)
  .then(res=> history.push("/"))
  .catch(err=>console.log(err))
}

  return <button onClick={clickHandler}>
      Adopt it
  </button>
};

export default DeleteButton;
