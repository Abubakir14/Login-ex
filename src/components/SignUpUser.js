import React, { useReducer } from "react";
import Modal from './ModalList'
import classes from './SignUpUser.module.css'

const validEmailRegex = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default function SignUp(props) {
  const initDATA = {
    email: "",
    emailIsValid: false,
    password: "",
    passwordIsValid: false,
    username: "",
    usernameIsValid: false,
    formIsvalid: false
  };

  const [state, dispatchDATAs] = useReducer(dataReducer, initDATA);

  function dataReducer(state, action) {
    switch (action.type) {
      case "USERNAME":
        return {
          ...state,
          username: action.payload,
          usernameIsValid: isNaN(action.payload),
        };
      case "EMAIL":
        return {
          ...state,
          email: action.payload,
          emailIsValid: validEmailRegex.test(action.payload),
        };
      case "PASSWORD":
        return {
          ...state,
          password: action.payload,
          passwordIsValid: action.payload.length > 6,
        };
      case "CLEAR":
        return { ...initDATA };
        case 'TRUE':
            return {...state, formIsvalid: true}
      default:
        return state;
    }
  }

  const ChangeUsername = ({ target: { value } }) =>
    dispatchDATAs({ type: "USERNAME", payload: value });

  const ChangeEmail = ({ target: { value } }) =>
    dispatchDATAs({ type: "EMAIL", payload: value });

  const ChangePassword = ({ target: { value } }) =>
    dispatchDATAs({ type: "PASSWORD", payload: value });


  function onSubmitHandler(e) {
    e.preventDefault();
    
    if(!state.emailIsValid || !state.passwordIsValid || !state.emailIsValid) {
        dispatchDATAs({type: 'TRUE', payload: true})
        return;
    }

    let sliced = state.password.split("").reverse(); 
    sliced = [...sliced, ...state.password.slice(0, 2).split("")];
    let data = {
      username: state.username,
      password: state.password,
      email: state.email,
      encrypted: sliced.join(""),
    };
    console.log(data)
        props.onAddDATA(data);
        props.isLogged()
        dispatchDATAs({ type: "CLEAR" });

}
  return (
      <div  className={classes.form}>
      {state.formIsvalid && <Modal onCorrect={() => dispatchDATAs({type: 'TRUE', payload: false})}/> }
    <form>
      <input onChange={ChangeUsername} value={state.username} />
      <input onChange={ChangeEmail} value={state.email} />
      <input onChange={ChangePassword} value={state.password} />
      <button onClick={onSubmitHandler}>Sign</button>
    </form>
    </div>
  );
}
