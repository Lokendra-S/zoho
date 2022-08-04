import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

function SuccessToast({
    showA,
    toastClose,
    success
}) {
    
    return (
        <ToastContainer position='bottom-end' className='position-fixed' >
            <Toast show={showA} onClose={toastClose} autohide delay={2000}>
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">iMoviez</strong>
                <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    { success === true ?
                        "Movie Query Is Performed Successfully":
                        "Movie Query Isn't Performed Successfully"
                    }
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default SuccessToast