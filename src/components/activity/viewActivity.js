import React from "react";
import { Link } from 'react-router-dom';
import { fetchActivity } from "../../api/fetch";

export const AllActivity = (props) =>{
    console.log(props)
    const activities = props.activities;
    console.log("activities with array",activities);

    return (
        <div>
        <form>
    <>
    <h2>Activities</h2>
    {activities.map((activity) =>{
        return(
            <div key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
            </div>
        )
    }

    )}
<Link to="activites" >All Activities</Link>
    </>
    </form>
    </div>
    );
};
