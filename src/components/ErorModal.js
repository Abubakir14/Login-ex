import classes from './ErrorModal.module.css'


function ErrorModal(props) {
  console.log(props.onCorrect);
  return (
    <div className={classes.div}>
      <div>
          <h1>Error: The error modal</h1>
          <li>Your username must have numbers</li>
          <li>Your password length must be greater than 6</li>
          <li>Your email must include @gmail.com</li>
        <button onClick={() => props.onCorrect}>okay</button>
      </div>
    </div>
  );
}
export default ErrorModal