import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';





class FCShowNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  render() {
    return (
      <div>

        <h1 style={{ color: 'black' }}>NOTES</h1>
        {
          this.state.notes.map((item, index) =>

            <div style={{color:'black'}}>
              <h2>{item.title}</h2>
              <h3>{item.content}</h3>
            </div>

          )
        }

        <Link to='/menu'>
          <Button variant="outlined" color="secondary" >Return To Main Page</Button> <br /><br />
        </Link>
      </div>
    )
  }
}
export default withRouter(FCShowNotes)
