import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

function About() {
    const { theme } = useContext(ThemeContext);
    
    // Split the description into paragraphs
    const paragraphs = aboutData.description2.split('\n\n');
    
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}</p>
                    
                    {/* Render each paragraph separately */}
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} style={{color:theme.tertiary80, marginTop: '1rem'}}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About