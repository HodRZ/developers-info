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
                language: e.target.language.value
            }
        })
    }
    return (
        <form onSubmit={addDev}>
            <label htmlFor="name">whats your name?</label>
            <input type="text" id='name' placeholder='hero' />
            <label htmlFor="language">language</label>
            <select name="language" id="language">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
            </select>
            <button type="submit">add</button>
        </form>
    );
};

export default DeveloperForm;