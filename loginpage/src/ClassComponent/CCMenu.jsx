import React, { Component } from 'react';
import { Button ,TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';



export default class CCMenu extends Component {

    constructor(props){
        super(props);
        this.state= {
            title: undefined,
            content: undefined
        }
    }

    chgTitle = (e) =>{
        this.setState({title: e.target.value})
    }

    chgContent = (e) =>{
        this.setState({content: e.target.value})
    }

    SendDataToParent = () =>{
        this.props.GetDataToParent(this.state.title , this.state.content)
    }



    render() {
        return (
            <div>
                <center>
                    <h1 style={{color:'black'}}>Create Post : </h1><br/>
                    <TextField id="outlined-basic" label="Enter Title" variant="outlined" onChange={this.chgTitle} /><br />
                    <TextField id="outlined-basic" label="Enter Content" variant="outlined" onChange={this.chgContent} /><br /><br />
                    <Button variant="outlined" color="secondary" onClick={this.SendDataToParent}>Add Post Creation</Button> <br/><br/>
                    <br/><br/>
                    <h1 style={{color:'black'}}>Show Post's</h1><br/>
                    <Link to='/shownotes'>
                    <Button variant="outlined" color="secondary" onClick={this.btnLogin}>Move To Post Board</Button> <br/><br/>
                    </Link>
                </center>
            </div>
        )
    }
}
