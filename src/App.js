import React, { Component } from 'react';

import './App.css';
import Login from './Components/Login';
import axios from 'axios';

let body;
let headers;
class App extends Component {
     
 body = {
  "user": {
    "email": "email",
    "name": "name",
    "password": "password",
    "terms_and_conditions": true
  }
};
headers = {
  headers:{
    'Authorization': 'KISI-LOGIN 94c2056abb993b570517f2d3a89c9b5a',
    'Content-Type':'application/json',
    'Accept':'application/json',
  }
};
//https://api.github.com/users/John
//
componentDidMount(){
  axios.get('https://api.getkisi.com/logins?type=type&primary=true&user_id=0',body,headers)
  .then(json => console.log(json))
}
constructor(props){
  super(props)
  this.state = {
    body: [],
    headers: []
  }
}   

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
