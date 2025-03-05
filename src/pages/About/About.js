import React from 'react'
import './About.css'
import PageBanner from '../../components/PageBanner/PageBanner'

const About = () => {
  return (
    <>
    <PageBanner />
    <div className="about">
      <div className="about-container">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris egestas nisl, in vestibulum sapien ligula quis est. Donec a purus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sagittis, sem sit amet mollis malesuada, elit lectus facilisis sapien, a tristique purus dui vel dui.
      </p>
      </div>
    </div>
    </>
  )
}

export default About