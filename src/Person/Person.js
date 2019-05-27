import React from 'react';
import Radium from 'radium';
import './Person.css';
// const person  = function() {}
// const person = () => {
//     return(
//         <p><strong>I'm a Person!</strong></p>
//     );
// }
//props or any other name
function person(props) {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // <p>I'm a Person and I am Math.floor(Math.random() * 30) years old!</p>
        // <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
       <div className="Person" style={style}>
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old! {props.children}</p>
            {/* <p>{props.children}</p> */}
            <input 
            type="text" 
            onChange={props.changed} 
            value={props.name}/>
       </div>
    );
}

export default Radium(person);