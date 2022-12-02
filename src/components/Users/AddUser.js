import react, { useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef(); //we can connect these to HTML elements. STORES The DOM element
    const ageInputRef = useRef(); //refs are probably better if we just want to read values from dom

    // const [username, setUsername] = useState('');  we do not need to reset the inputs
    // const [age, setAge] = useState(''); as we are not using state anymore

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        //Validate if any input is empty
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: "Invalid input", message: "Please enter a valid name and age (non-empty values)"});
            return; 
        }
        if(+enteredAge < 1){ //If age is below 1, +age forces to parse to int
            setError({title: "Invalid age", message: "Please enter a valid age (> 0)"});
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = ''; //MANIPULATING THE DOM DIRECTLY IS NOT RECOMMENDED
        ageInputRef.current.value = '';  //MANIPULATING THE DOM DIRECTLY IS NOT RECOMMENDED
        // setAge('');          we do not need to reset the inputs 
        // setUsername('');     as we are not using state anymore
    }

    // const usernameChangeHandler = (event) => {  we do not need to reset the input
    //     setUsername(event.target.value); as we are not using state anymore
    // }

    // const ageChangeHandler = (event) => {  we do not need to reset the input
    //     setAge(event.target.value); as we are not using state anymore
    // }

    const errorHandler = () => {
        setError(null);
    }

    //<Wrapper> is used to prevent unnecesary empty <div>s, if this happens this is called "div soup"
    //<Wrapper> simply returns the children passed to it without the need of rendering an additional <div>
    return (
        <Wrapper>
            {error && 
                <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler} 
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type='text' 
                        // onChange={usernameChangeHandler} 
                        // value={username} not needed as we are not using state anymore
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type='number' 
                        // onChange={ageChangeHandler} 
                        // value={age} //not needed as we are not using state anymore
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;