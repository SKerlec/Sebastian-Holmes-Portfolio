import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props) {
    return (
        <Jumbotron className=' bg-cover text-white p-0 hero' fluid={true}>
            <Container className='bg-transparent' >
                <Row className='justify-content-left py-5 bg-transparent'>
                    <Col className='bg-transparent' lg={10} md={12}>
                        { props.title && <h1 className='display-2 font-weight-bold bg-transparent'>{props.title}</h1> }
                        { props.subtitle && <h3 className='display-4 font-weight-light bg-transparent'>{props.subtitle}</h3> }
                        { props.phrase && <h4 className='display-5 font-weight-lighter bg-transparent'>{props.phrase}</h4> }
                    </Col>
                </Row>   

            </Container>
        </Jumbotron>
    )
}

export default Hero;