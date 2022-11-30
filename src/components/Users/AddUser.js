import react, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        //Validate if any input is empty
        if(username.trim().length === 0 || age.trim().length === 0){
            setError({title: "Invalid input", message: "Please enter a valid name and age (non-empty values)"});
            return; 
        }
        if(+age < 1){ //If age is below 1, +age forces to parse to int
            setError({title: "Invalid age", message: "Please enter a valid age (> 0)"});
            return;
        }

        props.onAddUser(username, age);
        setAge('');
        setUsername('');
    }

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

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
                    <label htmlFor="username" onChange={usernameChangeHandler}>Username</label>
                    <input id="username" type='text' onChange={usernameChangeHandler} value={username} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type='number' onChange={ageChangeHandler} value={age} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;