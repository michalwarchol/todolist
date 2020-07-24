import React, { Component } from 'react'
import { connect } from "react-redux"
import { motion, AnimatePresence } from 'framer-motion'

class Element extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: this.props.done,
            mouseOver: false,
        }
        this.done = this.done.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.editElement = this.editElement.bind(this)
    }
    done = () => {
        this.setState(prevState => { return { done: !prevState.done } })
        this.props.checkTask(this.props.id, this.state.done)
    }
    deleteElement = () => {
        this.props.deleteElement(this.props.id)
    }
    editElement = () => {
        this.props.editElement(this.props.id)
    }
    render() {
        const iconVariants = {
            doneHidden: {
                y: 20,
                rotateX: 90,
                transition: { delay: 0.2, duration: 0.3, ease: "easeOut" }
            },
            doneVisible: {
                y: 0,
                rotateX: 0,
                scale: 1.1,
                transition: { delay: 0.2, duration: 100, ease: "easeInOut", type: "spring" }
            },
            pencilHidden: {
                y: 20,
                rotateX: 90,
                transition: { delay: 0, duration: 0.3, ease: "easeOut" }
            },
            pencilVisible: {
                y: 0,
                rotateX: 0,
                scale: 1.1,
                transition: { delay: 0, duration: 100, ease: "easeInOut", type: "spring" }
            },
            cancelHidden: {
                y: 20,
                rotateX: 90,
                transition: { delay: 0.4, duration: 0.3, ease: "easeOut" }
            },
            cancelVisible: {
                y: 0,
                rotateX: 0,
                scale: 1.1,
                transition: { delay: 0.4, duration: 100, ease: "easeInOut", type: "spring" }
            },
            hoverButton: {
                scale: 1,
                color: "#6CCFF6",
                transition: {type: "tween"}
            },
        }
        return (
            <div
                className='todolist_element d-flex flex-row col-12 col-md-5'
                onMouseOver={() => this.setState({ mouseOver: true })} onMouseLeave={() => this.setState({ mouseOver: false })}
                style={this.state.done?{borderColor: "#6CCFF6"}:{ borderColor: "#757780"}}>
                <div className='text_div d-flex flex-column text-break flex-grow-1'>
                    <h1>{this.props.title}</h1>
                    <div className='todolist_element_description text-break'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="icons_div d-flex">
                    <AnimatePresence>
                        {this.state.mouseOver &&
                            <motion.i
                                className='icon-ok d-flex col-4 justify-content-center align-items-center flex-fill'
                                onClick={this.done}
                                key="done"
                                variants={iconVariants}
                                initial="doneHidden"
                                animate="doneVisible"
                                exit="cancelHidden"
                                whileHover="hoverButton"
                                >
                            </motion.i>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {this.state.mouseOver &&

                            <motion.i
                                className='icon-pencil d-flex col-4 justify-content-center align-items-center flex-fill'
                                onClick={this.editElement}
                                key="pencil"
                                variants={iconVariants}
                                initial="pencilHidden"
                                animate="pencilVisible"
                                exit="doneHidden"
                                whileHover="hoverButton"
                                >
                            </motion.i>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {this.state.mouseOver &&
                            <motion.i
                                className='icon-cancel d-flex col-4 justify-content-center align-items-center flex-fill'
                                onClick={this.deleteElement}
                                key="cancel"
                                variants={iconVariants}
                                initial="cancelHidden"
                                animate="cancelVisible"
                                exit="pencilHidden"
                                whileHover="hoverButton"
                                >
                            </motion.i>
                        }
                    </AnimatePresence>
                </div>
                {this.state.done&&<div className="done_div col-12 d-flex justify-content-center align-items-center">
                        <i className="icon-ok"></i>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkTask: (id, title, description, check) => { dispatch({ type: 'CHECK_TASK', id: id, title: title, description: description, check: check }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);