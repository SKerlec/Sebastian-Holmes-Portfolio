import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import './ProjectsPage.css';
import { Container } from 'react-bootstrap';

function ProjectsPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <Container className='projects-container'>
                    {props.makeCards(props.projectsData)}
                </Container>
            </Content>
        </div>
    )
}

export default ProjectsPage;