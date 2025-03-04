'use client';
import Link from "next/link";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterComponent from "../Auth/RegisterComponent";
import LoginComponent from "../Auth/LoginComponent";

export default function Header() {
    const [stackUrls, setStackUrls] = useState([]);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [regModalShow, setRegModalShow] = useState(false);
    
    const handleLoginModalShow = () => {
        setStackUrls((prevStack) => [...prevStack, window.location.pathname]);
        window.history.pushState({}, '', '/login');
        setLoginModalShow(true);
    };

    const handleRegModalShow = () => {
        setStackUrls((prevStack) => [...prevStack, window.location.pathname]);
        window.history.pushState({}, '', '/register');
        setRegModalShow(true);
    };

    const handleClose = (type = 'login') => {
        const previousUrl = stackUrls[stackUrls.length - 1] || '/';
        window.history.replaceState({}, '', previousUrl);
        type === 'login' ? setLoginModalShow(false) : setRegModalShow(false);
        setStackUrls((prevStack) => prevStack.slice(0, -1));
    };

    

    return (
        <>
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item mx-2">
                        <Button className="nav-link border rounded px-2 mb-0 btn-outline-success" onClick={handleLoginModalShow}>
                            Login
                        </Button>
                    </li>
                    <li className="nav-item">
                        <Button className="nav-link border rounded px-2 mb-0" onClick={handleRegModalShow} >
                            Register
                        </Button>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="align-middle" data-feather="settings" />
                        </a>
                        <a
                            className="nav-link dropdown-toggle d-none d-sm-inline-block"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="assets/img/no-profile.webp"
                                className="avatar img-fluid rounded me-1 rounded-pill"
                                alt="profile"
                            />
                            <span className="text-dark">Charles Hall</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="pages-profile.html">
                                <i className="align-middle me-1" data-feather="user" /> Profile
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        {/* Login Modal  */}
        <Modal
            show={loginModalShow}
            onHide={ () => handleClose('login')}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginComponent />
            </Modal.Body>
        </Modal>

        {/* Registration Modal  */}
        <Modal
            show={regModalShow}
            onHide={() => handleClose('reg')}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RegisterComponent />
            </Modal.Body>
        </Modal>

        
        </>
    );
}
