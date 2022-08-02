import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function SuccessToast({
    showA,
    toastClose
}) {
    
    return (
      <Row>
        <Col md={6} className="mb-2">
        <ToastContainer position='top-end'>
            <Toast show={showA} onClose={toastClose} >
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">iMoviez</strong>
                {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>Movie Query Is Performed Successfully</Toast.Body>
            </Toast>
        </ToastContainer>
        </Col>
      </Row>
    );
}

export default SuccessToast