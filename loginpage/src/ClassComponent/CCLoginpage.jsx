import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import {withRouter} from 'react-router-dom'


class CCLoginpage extends Component {
  constructor(props){
    super(props);

    this.state={
      Email : undefined ,
      Password : undefined
    }
  }
  
  chgEmail = (e) =>{
    this.setState({   Email : e.target.value })
  }
  
  chgPassword = (e) => {
    this.setState({Password : e.target.value })
  }

  btnLogin = () => {
    this.props.history.push({
      pathname:'/menu',
    })
  }

  btnRegister1 = () => {
    this.props.history.push({
      pathname:'/register',
    })
  }

  render() {
    return (
      <div>
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" onChange={this.chgEmail} /><br/><br/>
        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" onChange={this.chgPassword}/><br /><br />
        <Button variant="outlined" color="secondary" onClick={this.btnLogin}>Login</Button> <br/><br/>
        <Button variant="outlined" color="secondary" onClick={this.btnRegister1}>Register</Button>

        <h1>{this.state.message}</h1>

      </div>
    )
  }
}

export default withRouter(CCLoginpage)
