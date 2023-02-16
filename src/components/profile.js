import React, { useState } from 'react';

export const Profile = (props) => {
    const user = props.user;
    const myRoutines = props.routines;
    const myActivites = props.activities;
    console.log(props);
    if(!user.username){
        return <h1>Please log in before viewing profile</h1>
    }
    else{
    return (
        <form>
            <div>
                <h1>{user.username}'s Profile</h1>
                
            </div>
        </form>
    )}
};
