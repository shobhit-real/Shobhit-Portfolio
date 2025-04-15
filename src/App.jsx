import { lazy } from 'react';
import { Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import './index.css'
import './responsive.css'

const Hero = lazy(() => import('./components/Hero/Hero'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'))
const Contact = lazy(() => import('./components/contact/Contact'))

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={
        <div
          style={{
            position: 'fixed',
            top: '15px',
            left: '30px',
            zIndex: 9999,
          }}
        >
          <img src="/loading.svg" alt="Loading..." width="60" height="60" />
      </div>
      }>
        <LazyLoad height={'100vh'} offset={-100}>
          <section id='hero'>
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      
      <Suspense fallback={
        <div
          style={{
            position: 'fixed',
            top: '15px',
            left: '30px',
            zIndex: 9999,
          }}
        >
          <img src="/loading.svg" alt="Loading..." width="60" height="60" />
      </div>
      }>
        <LazyLoad height={'100vh'} offset={-100}>
          <section id='skills'>
            <Skills />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={
        <div
          style={{
            position: 'fixed',
            top: '15px',
            left: '30px',
            zIndex: 9999,
          }}
        >
          <img src="/loading.svg" alt="Loading..." width="60" height="60" />
      </div>
      }>
        <LazyLoad height={'100vh'} offset={-100}>
          {/* <section id='portfolio'> */}
            <Portfolio /> 
          {/* </section> */}
        </LazyLoad>
      </Suspense>

      <Suspense fallback={
        <div
          style={{
            position: 'fixed',
            top: '15px',
            left: '30px',
            zIndex: 9999,
          }}
        >
          <img src="/loading.svg" alt="Loading..." width="60" height="60" />
      </div>
      }>
        <LazyLoad height={'100vh'} offset={-100}>
          <section id='contact'>
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
      
      
      
    </div>
  )
}

export default App