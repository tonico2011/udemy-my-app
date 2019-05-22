import React from 'react'

// const person  = function() {}
// const person = () => {
//     return(
//         <p><strong>I'm a Person!</strong></p>
//     );
// }
//props or any other name
function person(props) {
    return (
        // <p>I'm a Person and I am Math.floor(Math.random() * 30) years old!</p>
        // <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
       <div>
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old! {props.children}</p>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} />
       </div>
    );
}

export default person;