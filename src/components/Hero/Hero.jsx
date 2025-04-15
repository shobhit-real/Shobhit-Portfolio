import { Canvas } from "@react-three/fiber";
import "./Hero.css";
import "./Hero-responsive.css"
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const descVariants = {
  initial: {x: -100, opacity: 0},
  animate: {x: 0, opacity: 1,
    transition: {duration: 1, staggerChildren: 0.2}
  }
}
const socialVariants = {
  initial: {y: -100, opacity: 0},
  animate: {y: 0, opacity: 1,
    transition: {duration: 1, staggerChildren: 0.2}
  }
}

const Hero = () => {
  return <div id='Hero' className='hero'>
    <div className='hero-box left'>
      <motion.h1 
      initial={{ y: -120, opacity: 0 }} 
      animate={{y: 0, opacity: 1}}
      transition={{ duration: 1 }}
      className='hero-title'>
        hola!
        <br />
        <span>I'm Shobhit!</span>
      </motion.h1>

      <motion.div variants={descVariants} initial='initial' animate='animate' className='hero-desc'>
        <motion.h2 variants={descVariants}>Tech - Savvy Learner</motion.h2>
        <motion.p variants={descVariants}>Newton School of Technology</motion.p>
        <motion.div variants={descVariants} className="exp-list">
          <a href="https://www.linkedin.com/school/newton-school-of-technology/" target="_blank"><motion.img variants={descVariants} src='/icon1.png' alt='experience' /></a>
          <a href="https://www.linkedin.com/school/rishihood/" target="_blank"><motion.img variants={descVariants} src='/icon2.png' alt='experience' /></a>
          <a href="https://www.linkedin.com/school/daksh-gurukul-iit-guwahati/" target="_blank"><motion.img variants={descVariants} src='/icon3.png' alt='experience' /></a>
        </motion.div>
      </motion.div>

      <motion.a 
      animate={{y: [0, 5], opacity: [0,1,0]}}
      transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}
      href='Skills' className='scroll'
      onClick={(e) => {
        e.preventDefault();  // Prevent the default anchor behavior
        const skillsSection = document.getElementById('Skills');  
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to the section
        }
      }}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
            stroke="white"
            strokeWidth="1"
          />
          <motion.path
            animate={{y: [0, 7]}}
            transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}
            d="M12 5V8"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.a>
    </div>

    <div className='hero-box right'>
      <motion.div variants={socialVariants} initial='initial' animate='animate' className="socials">
        <motion.a variants={socialVariants} href='https://www.linkedin.com/in/shobhitbararia/' target='_blank'>
          <img src="/linkedin.svg" alt='linkedin' />
        </motion.a>
        <motion.a variants={socialVariants} href='https://github.com/shobhit-real/' target='_blank'>
          <img src='/github.svg' alt='github' />
        </motion.a>
        <motion.a variants={socialVariants} href='https://leetcode.com/u/shobhit-real/' target='_blank'>
          <img src="/leetcode.svg" alt='leetcode' />
        </motion.a>
      </motion.div>
      <Speech />

      <motion.a href='#Contact' className='contactLink' animate={{x: [100, 0]}} opacity={[0, 1]} transition={{duration: 1}}>
        <motion.div className='contactButton' animate={{rotate: [0, 360]}} transition={{duration: 8, repeat: Infinity, ease: 'linear'}}
        onClick={(e) => {
          e.preventDefault(); // Prevent the default anchor behavior
      
          // Wait until the Contact section is available
          const checkIfContactIsLoaded = setInterval(() => {
            const contactSection = document.getElementById('Contact');
            if (contactSection) {
              clearInterval(checkIfContactIsLoaded); // Stop checking once it’s loaded
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100); // Check every 100ms if the section is loaded
        }}
        >
          <svg viewBox="0 0 200 200" width="150" height="150">
            <circle cx="100" cy="100" r="90" fill="rgb(197, 254, 188)" />

            <path
              id="inhnerCirclePat"
              fill="none"
              d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text className='circleText'>
              <textPath href='#inhnerCirclePat'>Hire Now •</textPath>
            </text>
            <text className='circleText'>
              <textPath href='#inhnerCirclePat' startOffset={'44%'}>Contact Me •</textPath>
            </text>
          </svg>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </div>

        </motion.div>
      </motion.a>
    </div>
    <div className='hero-bg'>
      <Canvas>
        <Suspense fallback='Loading...'>
          <Shape />
        </Suspense>
      </Canvas>
      <div className='hero-image'>
        <img src='/shobhit.png' alt='hero' />
      </div>
    </div>

  </div>

}

export default Hero