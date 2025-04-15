import './Contact.css'
import './Contact-responsive.css'
import emailjs from '@emailjs/browser';
import { motion, useInView } from "motion/react";
import { useRef, useState } from 'react';
import AnimatedSvg from './AnimatedSvg';

const listVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2}
  }
}

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        },
      );
  }; 

  const isInView = useInView(ref, { margin: '-200px' })

  return (
    <div id='Contact' className='contact' ref={ref} onSubmit={sendEmail}>
      <div className='cSection'>
        <motion.form ref={form} variants={listVariants} animate={isInView ? 'animate' : 'initial'}>
          <motion.h1 className='cTitle'>Let's Stay in touch !</motion.h1>
          <motion.div variants={listVariants} className="form-item">
            <label>Name</label>
            <input type="text" name='user_name' placeholder='Enter your name' required />
          </motion.div>
          <motion.div variants={listVariants} className="form-item">
            <label>Email</label>
            <input type="email" name='user_email' placeholder='Enter your email address' required />
          </motion.div>
          <motion.div variants={listVariants} className="form-item">
            <label>Message</label>
            <textarea rows={10} name='user_message' placeholder='Write your message...'></textarea>
          </motion.div>
          <motion.button variants={listVariants} className='form-button'>Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>

      <div className='cSection'>
        <AnimatedSvg />
      </div>
    </div>
  )
}

export default Contact