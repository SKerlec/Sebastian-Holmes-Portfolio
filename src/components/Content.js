import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content(props) {
    return (
        <Container>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;