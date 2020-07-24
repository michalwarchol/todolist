import React, { Component } from 'react';
import Element from './Element';
import NewElement from './NewElement'
import Topbar from './Topbar';
import AddElement from './AddElement';
import DeleteElement from './DeleteElement';
import EditElement from './EditElement';
import {connect} from 'react-redux'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            element_addition: false,
            element_deletion: null,
            element_edit: null
        }
        this.addElement = this.addElement.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.editElement = this.editElement.bind(this)
        this.closeWindow = this.closeWindow.bind(this)
    }
    addElement = () => {
        this.setState({ element_addition: true })
    }
    deleteElement = (id) => {
        this.setState({element_deletion: id})
    }
    editElement = (id) => {
        this.setState({element_edit: id})
    }
    closeWindow = () => {
        this.setState({ 
            element_addition: false, 
            element_deletion: null, 
            element_edit: null,
         })
    }
    render = () => {
        return (
            <div className='todolist_content container d-flex'>
                <Topbar addElement={this.addElement} handleDate={this.setDate}/>
                <div className='todolist_content_elements d-flex flex-row flex-wrap col-12 justify-content-around'>
                    {this.props.tasks.map((element) => {
                        return <Element
                            key={element.id}
                            id={element.id}
                            title={element.title}
                            description={element.description}
                            done={element.done}
                            deleteElement={this.deleteElement}
                            editElement={this.editElement} />
                    })}
                    <NewElement addElement={this.addElement} />
                </div>
                {this.state.element_addition
                    ? <AddElement 
                        closeWindow={this.closeWindow} />
                    : null}
                {this.state.element_deletion
                    ? <DeleteElement 
                        closeWindow={this.closeWindow} 
                        id={this.state.element_deletion} />
                    : null
                }
                {this.state.element_edit
                    ? <EditElement 
                        closeWindow={this.closeWindow}  
                        id={this.state.element_edit} />
                    :null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Content);