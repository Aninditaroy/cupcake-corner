import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
    return (
        <>
           <Spinner  className='d-flex mx-auto' animation="border" variant="secondary" />
        </>
    );
};

export default Loading;