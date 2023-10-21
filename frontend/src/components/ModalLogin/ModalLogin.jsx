import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './ModalLogin.css'

const ModalLogin = ({ show, onHide }) => {
    return (


        <Modal
            show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>
                    Debes iniciar sesión
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>
                <p>
                    Para agregar productos al carrito, por favor inicia sesión o regístrate.
                </p>
                <div className='modalContainerButtons'>
                    <Link to='/login'><button>Iniciar Sesion</button></Link>
                    <Link to='/register'><button>Registrarse</button></Link>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} className='modalButtonClose'>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalLogin;