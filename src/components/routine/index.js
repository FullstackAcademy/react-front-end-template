import React from 'react';
import AllRoutines from './AllRoutines';

const Routine = (props) => {
    const routines = props.routines;
    return (
        <div> 
            <AllRoutines routines={routines} />
        </div>
    )
}
export default Routine