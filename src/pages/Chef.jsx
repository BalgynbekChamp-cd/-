import React from "react";
import './Contact.css';
import {ChefInfo} from "../components/ChefInfo";

function Chef() {
    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Аспаздар</h1>
                </div>
            </header>

            <div className='bg-dark text-light py-5'>
                <ChefInfo/>
            </div>
        </div>
    )
}

export default Chef;