import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
  return (
    <motion.div className='bubbleContainer' animate={{opacity: [0, 1]}} transition={{duration: 1}}>
        <div className="bubble">
            {/* Animationg Text */}
            <TypeAnimation
            sequence={[
                1000,
                "I enjoy exploring tech and creating solutions that can create a real impact.",
                1000,
                "I’m passionate about building things and learning to lead along the way.",
                1000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={65}
            repeat={Infinity}
            />
        </div>
        <img src='/man.jpg' alt=''/>
    </motion.div>
  )
}

export default Speech