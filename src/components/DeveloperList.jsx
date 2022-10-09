import React from 'react';
import { useDevContext } from './DevContext';
import { devActions } from './Developer';

const DeveloperList = () => {
    const { devState, dispatch } = useDevContext()

    const deleteDev = (idx) => {
        dispatch({
            type: devActions.REMOVE,
            payload: idx
        })
    }

    return (
        <div>
            <ul>
                {devState?.map((dev) => {
                    return (
                        <div key={dev.id}>
                            <li >{`${dev.language}  :  ${dev.name}`}</li>
                            <button onClick={() => deleteDev(dev.id)}>delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default DeveloperList;