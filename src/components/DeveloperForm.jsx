import React from 'react';
import { useDevContext } from './DevContext';
import { devActions } from './Developer';
import { v4 as uuidv4 } from 'uuid'

const DeveloperForm = () => {
    const { dispatch } = useDevContext()
    const addDev = (e) => {
        e.preventDefault()
        dispatch({
            type: devActions.ADD,
            payload: {
                id: uuidv4(),
                name: e.target.name.value,
                language: e.target.language.value,
                technology: e.target.technology.value,
                food: e.target.food.value,
                drink: e.target.drink.value,
            }
        })
        e.target.name.value = null
        e.target.language.value = null
        e.target.technology.value = null
        e.target.food.value = null
        e.target.drink.value = null
    }
    return (
        <form onSubmit={addDev}>
            <label htmlFor="name">whats your name?</label>
            <input type="text" id='name' placeholder='hero' /><br />
            <br />
            <label htmlFor="language">language</label>
            <select name="language" id="language">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
            </select>{'         '}
            <label htmlFor="technology">favorite technology</label>
            <input type="text" id='technology' placeholder='React, Express,...' /><br />
            <br />
            <label htmlFor="food">favorite food</label>
            <input type="text" id='food' placeholder='pizza' />{'         '}
            <label htmlFor="drink">favorite drink</label>
            <input type="text" id='drink' placeholder='coffee' /><br />
            <br />
            <button type="submit">add</button>
        </form>
    );
};

export default DeveloperForm;