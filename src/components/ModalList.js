import reactDom from "react-dom";
import ModalError from './ModalError'
import ErrorModal from "./ErorModal";

export default function Modal(props) {
  return (
    <>
      {props.onClose && reactDom.createPortal(
      <ModalError onClose={props.onClose} />, 
      document.getElementById("error"))
      }


      {props.onCorrect && <ErrorModal onCorrect={props.onCorrect}/>}
      
    </>
  );
}