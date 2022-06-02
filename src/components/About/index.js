import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <div className="text-para">
            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quietly confident, naturally curious, and perpetually working
              on improving my chops one design problem at a time.
            </p>
            <p>If I need to define myself in one sentence that would be</p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3Alt} color="#2965f1" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color=" #f0db4f" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color=" #68a063" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#88dded" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
