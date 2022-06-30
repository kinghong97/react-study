import {useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import styles from './AddUser.module.css'

const AddUser = props => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    // const [enteredUsername, setEnteredUsername] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = event => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value
        const enterefUserAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enterefUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return
        }
        if (+enterefUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
            return
        }
        // props.onAddUser(enteredUsername, enteredAge)
        // setEnteredAge('')
        // setEnteredUsername('')
        props.onAddUser(enteredName, enterefUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    // const usernameChangeHandler = event => {
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler = event => {
    //     setEnteredAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age</label>
                    <input
                        id='age'
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;