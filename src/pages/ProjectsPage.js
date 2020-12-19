import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Hero from '../components/Hero';

function ProjectsPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Container fluid={true}>
                
                <Row className='justify-content-around ml-5 mr-5 px-5'>
                    {props.makeCards(props.projectsData)}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsPage;