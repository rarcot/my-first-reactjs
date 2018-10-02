import React, { Component } from 'react';

import Profile from './Profile'

import AddProfile from './AddProfile'

import {getProfiles} from '../utils/profileApi'

import Header from './Header'

import '../header.css'

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      profiles:[]
    }
    this.addUser = this.addUser.bind(this)
   
  }

  componentDidMount(){
    getProfiles().then(profiles => {
      this.setState({
        profiles:profiles
      })
    })
  }

  addUser(newProfile){
    
    this.setState({
      profiles:this.state.profiles.concat([newProfile])
    })
  } 

   render(){
   let profiles = this.state.profiles
              .map(profile => {
                 return(
                  <Profile 
                       key={profile.id}
                       name={profile.name}
                       age={profile.age}
                       hobbies={profile.hobbies}
                       />
                )
          })
    return(
            <div>
              {profiles}
              <AddProfile addUser = {this.addUser}/>
            </div>
            
      )
   }   
}



export default App;
