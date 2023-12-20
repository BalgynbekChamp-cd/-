import React from "react";
import './Login.css';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Register() {
    return (
        <div className='col-lg-6 d-flex justify-content-center' id='login-page'>
            <Form>
                <Form.Group className='row mb-3'>
                    <div className='col-lg-6'>
                        <Form.Label htmlFor='email-address'>Почта</Form.Label>
                        <Form.Control type='email' id='email-address'/>
                    </div>
                    <dir></dir>
                    <div className='col-lg-6'>
                        <Form.Label htmlFor='password'>Құпия сөз</Form.Label>
                        <Form.Control type='password' id='password'/>
                    </div>
                </Form.Group>
                <Link to='/home'>
                    <button type='submit' className='btn btn-success btn-lg'>Кіру</button>
                </Link>

            </Form>
        </div>


    )
}

export default Register;