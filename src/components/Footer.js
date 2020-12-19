import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top border-secondary justify-content-between p-3'>
                    <Col className='p-0 d-flex' md={3} sm={12}>
                        Sebastian Holmes
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                        This site was made by Sebastian Holmes.
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;