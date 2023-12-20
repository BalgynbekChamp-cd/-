import React from "react";
import './Register.css';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Register() {
    return (
        <div className='register-page'>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-lg-6'>
                                    <Form.Label htmlFor='first-name'>Аты</Form.Label>
                                    <Form.Control type='text' id='first-name'/>
                                </div>

                                <div className='col-lg-6'>
                                    <Form.Label htmlFor='last-name'>Тегі</Form.Label>
                                    <Form.Control type='text' id='last-name'/>
                                </div>
                            </Form.Group>


                            <Form.Group className='row mb-3'>
                                <div className='col-lg-6'>
                                    <Form.Label htmlFor='email-address'>Почта</Form.Label>
                                    <Form.Control type='email' id='email-address'/>
                                </div>

                                <div className='col-lg-6'>
                                    <Form.Label htmlFor='phone-number'>Ұялы-телефон нөмірі</Form.Label>
                                    <Form.Control type='tel' id='phone-number'/>
                                </div>
                            </Form.Group>


                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='password'>Құпия сөз</Form.Label>
                                <Form.Control type='password' id='comments'/>
                            </Form.Group>

                            <Link to='/login'>
                                <button type='submit' className='btn btn-success btn-lg'>Тіркелу</button>

                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;