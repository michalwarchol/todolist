import React, {Component} from 'react'
import SubmitButton from './SubmitButton';
import {connect} from "react-redux"

class DeleteElement extends Component{
    constructor(props){
        super(props)
        this.deleteElement=this.deleteElement.bind(this)
    }
    deleteElement = () => {
        this.props.deleteTask(this.props.id)
        this.props.closeWindow()
    }
    render(){
        return(
            <div className='todolist_deleteelement'>
                <div className='todolist_e_element_content d-flex flex-column justify-content-center'>
                    <h1>Are you sure?</h1>
                    <div className='todolist_e_element_form d-flex flex-row justify-content-around align-items-center'>
                        <SubmitButton text='OK' click={this.deleteElement} />
                        <SubmitButton text='Cancel' click={this.props.closeWindow} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        deleteTask: id => {dispatch({type: 'DELETE_TASK', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteElement);