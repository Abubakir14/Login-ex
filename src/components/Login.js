import React, { useReducer } from "react";
import Modal from "./ModalList";
import SuccesLogged from "./Logged";
import classes from './Login.module.css'

export default function Login(props) {
  const initState = {
    username: "",
    password: "",
    onTrue: false,
    error: false,
  };

  const [state, dispatchDATA] = useReducer(Reducer, initState);

  function Reducer(state, action) {
    switch (action.type) {
      case "USERNAME":
        return { ...state, username: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
    case 'TRUE':
        return {...state, onTrue: action.payload}
    case 'ERROR':
        return {...state, error: action.payload}
      default:
        return initState;   
    }
  }
  const username = ({ target: { value } }) => // e.target.value
    dispatchDATA({ type: "USERNAME", payload: value });

  const password = ({ target: { value } }) => //e.target.value
    dispatchDATA({ type: "PASSWORD", payload: value }); // action = {type: '', payload: e.target.value}

    let content; 
  function onSubmitHandler(e) {
      e.preventDefault()
      props.DATA.map(user => {
          if((user.username === state.username) === true && (user.password === state.password) === true ){
              dispatchDATA({type: 'TRUE', payload: true})
            return;
          } else {
            dispatchDATA({type: 'ERROR', payload: true})
          }
      })
  }
  
  return (
      <div className={classes.form}>
      {state.error && <Modal onClose={() => dispatchDATA({type: 'ERROR', payload: false})} />}
      {state.onTrue ? <SuccesLogged /> :
    <form>
      <input placeholder="username" onChange={username} />
      <input placeholder="password" onChange={password} />
      <button onClick={onSubmitHandler}>Вход</button>
    </form>
}
    </div>
  );
}
