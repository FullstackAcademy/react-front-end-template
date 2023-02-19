import React from 'react';

const AllRoutines = (props) => {
    const routines = props.routines;
    return (
       <div> 
        <h2> All Routines</h2>
        {
            routines.map((routine) => {
                <div key={routine.id}>
                    <h3> Name: {routine.name} </h3> 
                    <p> Creator : {routine.creatorName} </p>
                    <p> Goal: {routine.goal} </p>
                    <p> Activities: {routine.activities} </p>


                </div>
            })
        }
       </div>
    )
}

export default AllRoutines;