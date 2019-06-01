import React from 'react';
import Person from './Person/Person';
// const persons = (props) => {
//     return();
// }

const persons = (props) => (
    //JSX code going here
    props.persons.map((person, index) => {
        return (
          // <ErrorBoundary key={person.id}>
            <Person
              click={() => props.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => props.nameChangedHandler(event, person.id)}/>
          // </ErrorBoundary>
        )
      }
);