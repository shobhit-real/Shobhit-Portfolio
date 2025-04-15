import './Portfolio.css'
import './Portfolio-responsive.css'
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    img: '/spotify.png',
    title: 'Spotify Clone',
    desc: 'A responsive web-based music player built with HTML, CSS & JavaScript. This Project replicates the core features and design of Spotify, featuring a sleek dark UI and functional music controls. Fully responsive and works great on all screen sizes.',
    link: 'https://spotify-clone-shobhit.netlify.app/',
  },
  {
    id: 2,
    img: '/portfolio.png',
    title: 'Portfolio Website',
    desc: 'A responsive, web-based 3D animated portfolio built with React, Three.js, & Motion. This project showcases interactive 3D visuals, smooth animations, and a sleek, modern UI. Fully responsive, it adapts seamlessly to all screen sizes, offering an immersive and engaging user experience to highlight my skills and projects.',
    link: 'https://spotify-clone-shobhit.netlify.app/',
  }
]

const ImgVariants = {
  initial: { x: -500, y: 500, opacity: 0 },
  animate: {
    x: 0, y: 0, opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const infoVariants = {
  initial: { x: 500, y: 500, opacity: 0 },
  animate: {
    x: 0, y: 0, opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.05,
    }
  }
}

const ListItem = ({ item }) => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <div className='pItem' ref={ref}>
      <motion.div className='pImage' variants={ImgVariants} animate={isInView ? 'animate' : 'initial'}>
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div className='pInfo' variants={infoVariants} animate={isInView ? 'animate' : 'initial'}>
        <motion.h1 variants={infoVariants}>{item.title}</motion.h1>
        <motion.p variants={infoVariants}>{item.desc}</motion.p>
        <motion.a variants={infoVariants} href={item.link} target='_blank'>
          <button>View Project</button>
        </motion.a>
      </motion.div>
      <section></section>
      <section></section>
    </div>
  )
}

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setContainerDistance(rect.left)
      }
    }
    calculateDistance()
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, [])

  const { scrollYProgress } = useScroll({ target: ref })
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * projects.length])

  return <div id='Portfolio' className='portfolio' ref={ref}>
    <motion.div className='pList' style={{ x: xTranslate }}>
      <div className="empty"
        style={{ width: window.innerWidth - containerDistance }}
      />
      {projects.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </motion.div>
    <section />
    <section />
    <div className="progress-bar">
      <svg width="100%" height="100%" viewBox="0 0 160 160">
        <circle cx='80' cy='80' r='70' fill='none' stroke='white' strokeWidth={20} />
        <motion.circle 
          cx='80' 
          cy='80' 
          r='70' 
          fill='none' 
          stroke='rgb(135, 236, 120)' 
          strokeWidth={20}
          style={{ pathLength: scrollYProgress }} 
          transform="rotate(-90 80 80)"
        />
      </svg>
    </div>
  </div>

}

export default Portfolio