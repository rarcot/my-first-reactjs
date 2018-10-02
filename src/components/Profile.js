import React , { Component } from 'react';

/*class Profile extends Component
///{
  
  ///render()
  
  {
    let hobby = this.props.hobbies.map(hobby1=>{
     return(
        <li>{hobby1}</li>
      )
      })
    return (
              <div>
                  <p> {this.props.name} </p>
                  <p> {this.props.age}</p>
                  <ul> {hobby}</ul>
              </div>
            )
  }
}*/


let Profile = props => (
    <div>
                  <p> {props.name} </p>
                  <p> {props.age}</p>
                  <ul> {props.hobbies.map((hobby,index) => <li key={index}>{hobby}</li>)}</ul>
    </div>
  )

export default Profile;