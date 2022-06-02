import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const greetingArray = ['H', 'i', ',']
  const nameArray = ['I', "'", 'm', ' ', 'J', 'u', 'n', 't', 'a', 'o', ',']
  const jobArray = [
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  console.log(letterClass)

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={13}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>

          <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
