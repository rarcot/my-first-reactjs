import React from 'react'

import '../header.css'

class Header extends React.Component{
    constructor(props)
    {
        super(props)
        this.state=
        {
            profileClassName:'Profile-show'
        }
        this.displayProfileOptions = this.displayProfileOptions.bind(this)
    }

    displayProfileOptions(classname){
        this.setState({
            profileClassName: (this.state.profileClassName==='Profile')?'Profile-show' : 'Profile'
        })
    }
    render(){
         return (
            <div>
            <a href='#' onClick={this.displayProfileOptions}><h4>Profile Management</h4></a>
            <div className={this.state.profileClassName}>            
                <ul>
                    <li><a href="true">Create Profile</a></li>
                    <li><a href="true">Modify Profile</a></li>
                    <li><a href="true">Delete Profile</a></li>
                </ul>
            </div>
            </div>
         )
    }
}

export default Header