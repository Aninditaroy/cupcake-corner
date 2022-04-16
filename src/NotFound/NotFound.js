import React from 'react';
import notfoundImg from '../../src/images/notfound/notfound.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <section className="notfound">
            <img className="img-fluid notfound-img" src={notfoundImg} alt="" />
        </section>
    );
};

export default NotFound;