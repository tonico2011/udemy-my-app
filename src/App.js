import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';


// import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28},
      { id: 'vasdf1', name: 'Manu', age: 29},
      { id: 'asdf11', name: 'Stephanie', age: 26}
    ],
    otherState: 'Some Other Value',
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); similar below
    const persons = [...this.state.persons];
    //remove 1 element from personIndex
    persons.splice(personIndex, 1);
    //update State
    this.setState({persons: persons})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

   // const person = Object.assign({}, this.state.persons[personIndex]);

   person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
    this.setState({persons: persons})
  };


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    //inline style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px sold blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;
    
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            )
          })}
        </div>
      );
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //clasess = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //clasess = ['bold']
    }
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is Really Working</p> 
          {/* <Person></Person> */}
          <button 
          style = {style}
          className="switchName"
          onClick={this.togglePersonsHandler}
          >Toggle Person</button>
          {persons}
       </div>
      

    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does it work now'));
  }   
}

//Radium for hover
export default App;




// const App = props => {
//   const [ personState, setPersonsState] = useState ({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29}
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Henry', age: 24},
//         { name: 'Toni', age: 26}
//       ]
//       // ,
//       // otherState: personState.otherState
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//     <p>This is Really Working</p> 
//     {/* <Person></Person> */}

//     <button onClick={switchNameHandler}>Switch Name</button>
//     <Person 
//     name={personState.persons[0].name} 
//     age={personState.persons[0].age}/>

//     <Person 
//     name={personState.persons[1].name} 
//     age={personState.persons[1].age}
//     click = {switchNameHandler}>
//       My Hobbies: Racing</Person>
//   </div>
//   )
// }


// { 
//   this.state.showPersons === true ?
//     <div>
//       <Person 
//         name={this.state.persons[0].name} 
//         age={this.state.persons[0].age}/>

//       <Person 
//         name={this.state.persons[1].name} 
//         age={this.state.persons[1].age}
//         // click={this.switchNameHandler.bind(this, 'Max!')}
//         changed={this.nameChangedHandler}
//         >My Hobbies: Racing</Person>

//       <Person 
//         name={this.state.persons[2].name} 
//         age={this.state.persons[2].age}/>
//     </div> : null
// }


// switchNameHandler = (newName) => {
//   // return(
//   //   console.log('Was clicked')
//   // );
//   // console.log('Was clicked')
//   //Don't Doo THIS this.state.persons[0].name = "Maximise";
  
//   this.setState({
//     persons: [
//       { name: newName, age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 27}
//     ]
//   })
// };