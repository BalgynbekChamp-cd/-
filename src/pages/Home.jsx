import React from "react";
import './Home.css';
import AboutImg from '../utils/img/about.img.png';
import {Link} from "react-router-dom";
import { ImgGallery } from "../components/ImgGallery";
import { ContacInfo } from "../components/ContacInfo";
import ContactIm from '../utils/img/контактимж.jpg';

function Home() {
    return (
        <div className="home-page">
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>

                            <h2 className='mb-0  fw-bold' id='h2'>Қош келдіңіз!</h2>
                            <h1 className='mb-5  fw-bold text-center text-sm-start' id='h2'>Ресторан</h1>


                        </div>

                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                  <img src={AboutImg} className='img-fluid w-50' alt='about img'/>
                </div>
                    <div className='col-lg-6 d-flex
                    flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'> Біз жайлы </h2>
                    <p>
                        Мы таки то таки то ресторан
                    </p>
                        <p className='mb-5'>
                            мы так делаем
                        </p>
                        <Link to='/about'>
                            <button type='button' className='btn btn-outline-success btn-lg'>Толығырақ</button>

                        </Link>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Үздік сатылым</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5 '>Тағамдар</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Қазақ таңғы асы</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>999 tenge</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Ет</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>998 tenge</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Қымыз</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>997 tenge</p>
                                </li>

                            </ul>
                        </div>

                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5 '>Ішімдік</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Кофе</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>996 tenge</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Кола</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>995 tenge</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Сок</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>994 tenge</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <ImgGallery />
            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                  <div className='row'>
                      <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                          <ContacInfo/>
                      </div>
                      <div className='col-lg-6 d-flex justify-content-center'>
                          <img src={ContactIm} className='img-fluid w-50' alt=''/>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Home;