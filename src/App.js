import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

// import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'Some Other Value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // return(
    //   console.log('Was clicked')
    // );
    // console.log('Was clicked')
    //Don't Doo THIS this.state.persons[0].name = "Maximise";
    
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    //inline style
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px sold blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is Really Working</p> 
        {/* <Person></Person> */}
        <button 
        /* style = {style} */
        className="switchName"
        onClick={this.togglePersonsHandler}
        >Switch Name</button>
        { 
          this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>

              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                // click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangedHandler}
                >My Hobbies: Racing</Person>

              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> : null
        }
      </div>
    );

    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does it work now'));
  }   
}


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
