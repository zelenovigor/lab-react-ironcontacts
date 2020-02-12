import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state ={
  //     fiveContacts: contacts.slice(0, 5)
  //   }
  // }

  state = {
    fiveContacts: contacts.slice(0, 5)
  }

  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th><img src={eachContact.pictureUrl} style={{height: '200px'}}alt={eachContact.name}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
          <td><button> onClick={() => this.deleteContact(index)}>Delete</button></td>
        </tr>
      )
  })
  }

  // Iteration 2

  addActor = () => {                                                          // add random actor
    // Select a random number between 0 and 1
    let randomNumber = Math.random();
    // get the length of the contacts array
    let lengthOfContacts = contacts.lengh;
    // get the random element from array
    let randomContact = Math.floor(randomNumber * lengthOfContacts);
    // create a copy of the contacts array from state
    let copyOfContactsFromState = [...this.state.contacts];
    copyOfContactsFromState.push(contacts[randomContact]);
    // set state with setState method (never set state directly)
    this.setState({
      contacts: copyOfContactsFromState
    })
  }                                                  
  
  // Iteration 3

  sortContactsByName = () => {                                                // sort actors by name
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a,b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: contactsCopy
    });
  }

  sortContactsByPopularity = () => {                                           // sort by popularity
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort((b,a) => a.popularity - b.popularity);
    this.setState({
      contacts: contactsCopy
    });
  }
  
  // Iteration 4 

  deleteContact = (i) => {
    let deletedContactArray = [...this.state.contacts];
    deletedContactArray.splice(i, 1);
    this.setState({
      contacts: deletedContactArray
    });
  }


  render() {
    console.log("Render App.js")
    console.log(this.state.fiveContacts)
    return (
      <div className="App">
        <h1>Table</h1>
        <button> onClick={() => this.addActor()}>Add Random Actor</button>
        <button> onClick={() => this.addActor()}>Sort Actors By Name</button>
        <button> onClick={() => this.addActor()}>Add Random Actor</button>                   
                   


        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.showFiveContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;


// Class Vikings (
//   constructor(){
// this.someArrNameState = contacts.slice(0, 5)
// }

// fiveViking(){

// }

//  showFiveViking(){
    // this.fiveVikings()
// }
// )