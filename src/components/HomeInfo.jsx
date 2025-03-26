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
       from Colombia
    </h1>
  ),
  2: (
    <InfoBox
      text="Over the past year, I have acquired programming skills to break into the tech industry."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Although inexperienced, I have built projects to apply my new knowledge."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Would you be interested in working with me? I'm always open to new opportunities."
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