import React from 'react'
import CCLoginpage from './CCLoginpage'
import CCRegister from './CCRegister'
import {Switch,Route,withRouter} from 'react-router-dom'
import CCMenu from './CCMenu'
import FCShowNotes from './FCShowNotes'

class Main extends React.Component{
constructor(props){
    super(props)
    this.state={
        users:[],
        notes:[]
    }
}

register=(user)=>{
    // user=obj(email,password,notes[]) or user=obj(email,password)
    this.setState((prev)=>({
        users:[...prev.users,user]
    }))
}

btngoToNotes = () => {
    this.props.history.push({
        pathname:'/home',
    })

}

GetDataToParent=(title , content)=>{

    let temp = {title:title , content:content};
    let tempArray = [...this.state.notes,temp]
    this.setState({notes:tempArray})
    console.log(temp)

}

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' render={()=><CCLoginpage />} />
                    <Route path='/menu' render={()=><CCMenu GetDataToParent={this.GetDataToParent}/>} />
                    <Route path='/register' render={()=><CCRegister register={this.register} />} />
                    <Route path='/login' render={()=><CCLoginpage />} />
                    <Route path='/shownotes'>
                        <FCShowNotes notes={this.state.notes} />
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default withRouter(Main)