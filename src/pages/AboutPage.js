import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import './AboutPage.css';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p className='about-me-content'>
                    I am a frontend web developer proficient in jQuery and React. I have a year of tech experience, within which I 
                    have developed my coding and problem-solving skills. I am constantly growing and pushing myself to become a 
                    stronger developer, but I am also interested in becoming fluent in as many languages as possible.
                </p>
                <p className='about-me-content'>
                    Based on personal and professional experiences, I can say with confidence that I would be a valuable asset to 
                    just about any team. I have worked with many others and have learned to adapt to any environment; I've seldomly 
                    come across a teammember I could not effectively reconcile with.
                </p>
                <p className='about-me-content'>
                    Aside from my coding escapades, I am also an avid gamer. Along with being my most significant hobby I have long 
                    dreamt of incorporating gaming into my career someday.
                </p>
            </Content>
        </div>
    )
}

export default AboutPage;