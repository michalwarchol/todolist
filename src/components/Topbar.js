import React,{Component} from 'react'

class Topbar extends Component{
    render(){
        return(
            <div className='todolist_topbar d-flex flex-row justify-content-center fixed-top'>
                <div className='d-flex flex-grow-1 justify-content-center'>
                    <h2>MW Todolist</h2>
                </div>
            </div>
        )
    }
}

export default Topbar