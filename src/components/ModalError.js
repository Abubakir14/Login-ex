import classes from './ModalError.module.css'

function ModalOverlay(props) {
    return(
        <div>
                <div className={classes.div}>
                <h1>Login failed
                    The username You entered is not correct.
                    Find your account.
                </h1>
                    <button className={classes.button} onClick={props.onClose}>okay</button>
            </div>
        </div>
    )
}

export default ModalOverlay