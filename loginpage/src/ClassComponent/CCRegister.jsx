import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom'



class CCRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: null,
      Password: null,
      RePassword: null
    };
  }

  chgEmail = (e) => {
    this.setState({ Email: e.target.value })
  }

  chgPassword = (e) => {
    this.setState({ Password: e.target.value })
  }
  chgRePassword = (e) => {
    this.setState({ RePassword: e.target.value })
  }

  btnRegister = () => {
    if (this.state.Password == this.state.RePassword && this.state.Email != null) {
      this.props.register({ email: this.state.Email, password: this.state.Password })
      this.props.history.push({
        pathname: '/login',
      })
    }else return;
  }
  render() {
    return (
      <div>
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" onChange={this.chgEmail} /><br /><br />
        <TextField id="standard-password-input" label="Enter Password" type="password" autoComplete="current-password" onChange={this.chgPassword} /><br /><br />
        <TextField id="standard-password-input" label="Re-Enter Password" type="password" autoComplete="current-password" onChange={this.chgRePassword} /><br /><br />
        <Button variant="outlined" color="secondary" onClick={this.btnRegister}>Register</Button>
      </div>
    )
  }
}

export default withRouter(CCRegister)
