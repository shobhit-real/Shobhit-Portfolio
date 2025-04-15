import React, { useRef } from 'react'
import './Skills.css'
import './Skills-responsive.css'
import MacbookModelContainer from './macbook/MacbookModelContainer'
import { motion, useInView } from 'motion/react'

const textVariants = {
  initial: {x: -150, opacity: 0},
  animate: {x: 0, opacity: 1,
    transition: {duration: 1}
  }
}

const listVariants = {
  initial: {x: -100, opacity: 0},
  animate: {x: 0, opacity: 1,
    transition: {duration: 1, staggerChildren: 0.5}
  }
}
  

const skills = [
  {
    id: 1,
    img: '/web.png',
    title: 'Web Development',
    counter: 2,
  },
  {
    id: 2,
    img: '/dsa.png',
    title: 'Data Sructures and Algorithms',
    counter: 0,
  }

]

const Skills = () => {
  const ref = useRef()
  const isInView = useInView(ref, {margin: '-200px'})
  return (
    <div id='Skills' className='skills' ref={ref}>
      <div className='skills-box left'>
        <motion.h1 
        variants={textVariants} animate={isInView ? 'animate' : 'initial'} 
        className='sTitle'>What I Know ?
        </motion.h1>
        <motion.div 
        variants={listVariants}
        animate={isInView ? 'animate' : 'initial'} 
        className='skill-list'>
          {skills.map((skill) => (
            <motion.div variants={listVariants} className="skill-card" key={skill.id}>
              <div className="skill-icon">
                <img src={skill.img} alt="icon" />
              </div>
              <div className="skill-info">
                <h2>{skill.title}</h2>
                <h3>{skill.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
          <motion.div variants={listVariants} className="skill-card">
            <img src="/python.png" alt="python" />
            <img src="/c++.png" alt="c++" />
            <img src="/mysql.png" alt="mysql" />
            <img src="/html.png" alt="html" />
            <img src="/css.png" alt="css" />
            <img src="/js.png" alt="js" />
            <img src="/react.png" alt="react" />
          </motion.div>
        </motion.div>
      </div>
      <div className='skills-box right'>
        <MacbookModelContainer/>
      </div>
    </div>
  )
}

export default Skills