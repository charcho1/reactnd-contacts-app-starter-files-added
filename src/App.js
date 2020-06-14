import React, {Component} from 'react';
import logo from './logo.svg';
import ListContacts from './ListContacts'
import './App.css';

const contactsArray = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

class App extends Component {
  render () {
      return (
    <div>
      <ListContacts contact = {contactsArray}/>
    </div>
  );
}

}
//above: we pass down contacts (the array defined above) as a prop called contact onto the child component of listcontacts when you make a component element

export default App;
