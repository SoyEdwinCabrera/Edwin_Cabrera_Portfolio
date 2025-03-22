import React from 'react';

import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import PropTypes from 'prop-types';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} className= "w-4 h-4 object-contain"/>
        </Link>
    </div>
)

InfoBox.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
};

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className="font-semibold">Edwin</span>👋🏻
      <br />
      I am a Data Analyst from Colombia
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/projects"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/about"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

HomeInfo.propTypes = {
    currentStage: PropTypes.number
};

export default HomeInfo;