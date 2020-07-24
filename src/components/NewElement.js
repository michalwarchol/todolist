import React, { useState } from 'react'
import { motion } from 'framer-motion'

const NewElement = props => {
    const [hover, setHover] = useState(false)
    const hoverVariants = {
        initial: {
            transition: {duration: 0.1, ease: "easeInOut", type: "spring"}
        },
        hover: {
            borderColor: "#6CCFF6",
            transition: { duration: 0.1 },
            color: "#6CCFF6"
        }
    }
    const plusVariants = {
        animate: {
            scale: 1.2,
            transition: {duration: 0.1}
        },
        initial: {
            scale: 1,
            transition: {duration: 0.1}
        }
    }
    return (
        <motion.div 
        className='todolist_newelement d-flex flex-row col-12 col-md-5 justify-content-center align-items-center'
        onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
        onClick={props.addElement}
        variants={hoverVariants}
        whileHover="hover"
        >
            <motion.div
            variants={plusVariants}
            initial="initial"
            animate={hover?"animate":"initial"}>
            <i className='icon-plus'></i>
            </motion.div>
        </motion.div>
    )
}

export default NewElement