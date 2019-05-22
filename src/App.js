// import React, {Component} from 'react';
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personState, setPersonsState] = useState ({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29}
    ],
    otherState: 'Some Other Value'
  })

  userState({otherState})

  console.log(personState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Henry', age: 24},
        { name: 'Toni', age: 26},
        { name: 'Linh', age: 30}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
    <p>This is Really Working</p> 
    {/* <Person></Person> */}

    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personState.persons[0].name} age={personState.persons[0].age}/>

    <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
  </div>
  )
}


export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29}
//     ],
//     otherState: 'Some Other Value'
//   }

//   switchNameHandler = () => {
//     // return(
//     //   console.log('Was clicked')
//     // );
//     // console.log('Was clicked')
//     //Don't Doo THIS this.state.persons[0].name = "Maximise";
    
//     this.setState({
//       persons: [
//         { name: 'Henry', age: 24},
//         { name: 'Toni', age: 26}
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is Really Working</p> 
//         {/* <Person></Person> */}
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
//       </div>
//     );

//     // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does it work now'));
//   }   
// }