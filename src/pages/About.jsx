import React from "react";
import './About.css';
import AboutShef1 from '../utils/img/i.webp';
import AboutShef2 from '../utils/img/повар2.jpg';
import {ImgGallery} from "../components/ImgGallery";
import {Reviews} from "../components/Reviews";

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Біз жайлы</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p> Ресторан командасы-бұл әр қонаққа қамқорлық жасайтын үлкен отбасы! Күн сайын біз сіздерге жан мен сүйіспеншілікпен тамақ дайындаймыз! </p>
                <p> Біздің мейрамхананың жүрегінде талантты аспаздар тобы бар, олар үшін аспаздық тек жұмыс емес, нағыз өнер. Біздің аспаздар әр тағамға өздерінің құмарлықтарын, шығармашылықтарын және ерекше аспаздық шедеврлер жасауға деген ұмтылыстарын салады.
                </p>
                <div className='row'>
                  <div className='col-lg-6'>
                      <img src={AboutShef1} className='img-fluid, my-4' alt=''/>
                  </div>
                    <div className='col-lg-6'>
                        <img src={AboutShef2} className='img-fluid my-4' alt=''/>
                    </div>
                </div>
               <p> Ресторан командасы-бұл әр қонаққа қамқорлық жасайтын үлкен отбасы! Күн сайын біз сіздерге жан мен сүйіспеншілікпен тамақ дайындаймыз! </p>
            </div>
            <div className='bg-dark text-light'>
                <ImgGallery/>
            </div>

            <div className='my-5'>
                <Reviews/>
            </div>
        </div>

    )
}

export default About;