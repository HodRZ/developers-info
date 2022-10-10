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
                            <span >{dev.name.toUpperCase()}</span><br />
                            <span >uses the {dev.language} language!</span><br />
                            <span >and specializes in {dev.technology}</span><br />
                            <span >this hero lives on {dev.drink} and {dev.food}</span><br />
                            <button onClick={() => deleteDev(dev.id)}>delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default DeveloperList;