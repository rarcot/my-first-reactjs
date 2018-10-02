import React, { Component } from 'react'



class AddProfile extends Component{
	constructor(props){
		super(props)
		this.state =
		{
		  name: '',
		  age: '',
		  hobbies: ''
	
		}
	  this.handleName = this.handleName.bind(this)
	  this.handleAge = this.handleAge.bind(this)
	  this.handleHobby = this.handleHobby.bind(this)
	  this.handleClick = this.handleClick.bind(this)
	}

handleName(e){
  this.setState({
  	name:e.target.value
  })
}

handleAge(e){
  this.setState({
  	age:e.target.value
  })
}

handleHobby(e){
this.setState({
	hobbies:e.target.value

})
}

handleClick(e){
	let newProfile = {
		name:this.state.name,
		age:this.state.age,
		hobbies:[this.state.hobbies]
	}
	this.props.addUser(newProfile)
}


render()
{
   return(
   		<div>
   		<p> New Profile Added </p>
   		 <input onChange={this.handleName} value={this.state.name} />
   		 <input onChange={this.handleAge} value={this.state.age} />
   		 <input onChange={this.handleHobby} value={this.state.hobby} />
   		 <button onClick={this.handleClick}> Add New Profile </button>
   		 
   		 </div>
   		 	 
   	)
	
}
}

export default AddProfile;