import React from 'react'

function myButton(){
    return (
        <button>I'm a button</button>
    );
}

export default function MyApp(){
    return(
        <div>
            <h1>Welcome to my App</h1>
            <myButton/>
        </div>
    )
}