import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SubmitButton = ({text, click}) => {
    const [hover, setHover] = useState(false)
    const hoverVariants = {
        initial: {
            y: 60,
            transition: {duration: 0.3}
        },
        animate: {
            y: 0,
            transition: {duration: 0.3}
        }
    }
    return(
        <div 
        className='todolist_submitbutton d-flex justify-content-center align-items-center' 
        onClick={click} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <span>{text}</span>
            <motion.div
                className="hover_div"
                variants={hoverVariants}
                initial="initial"
                animate={hover?"animate":"initial"}
                >
                
            </motion.div>
        </div>
    )
}

export default SubmitButton