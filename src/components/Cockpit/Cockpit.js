import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    let btnClass ='';
    btnClass = classes.Red;
    const assignedClasses = [];
    
    if (props.showPersons) {
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //clasess = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //clasess = ['bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is Really Working</p> 
            <button 
            className={btnClass}
            onClick={props.toggled}
            >Toggle Person</button>
        </div>
    );
};

export default cockpit