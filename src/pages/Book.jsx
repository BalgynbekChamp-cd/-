import React from "react";
import './Contact.css';
import {Form} from 'react-bootstrap';
import {Reviews} from "../components/Reviews";


function Book() {
    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Брондау</h1>
                </div>
            </header>
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
                            <Form.Group className='row mb-3'>
                                <div className='col-lg-6'>
                                    <Form.Label htmlFor='data'>Уақыты</Form.Label>
                                    <Form.Control type='date' id='data'/>
                                </div>

                                <div className='col-lg-6'>
                                    <Form.Label htmlFor='guests-number'>Қонақ саны</Form.Label>
                                    <Form.Control type='number' id='guests-number'/>
                                </div>
                            </Form.Group>


                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Пікір</Form.Label>
                                <Form.Control type='text' id='comments'/>
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Жіберу</button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <Reviews/>
            </div>
        </div>
    )
}

export default Book;