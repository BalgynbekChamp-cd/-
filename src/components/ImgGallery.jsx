import React from "react";
import Gy1 from '../utils/img/g1.jpg';
import Gy2 from '../utils/img/g2.jpg';
import Gy3 from '../utils/img/g3.jpg';
import Gy4 from '../utils/img/g4.jpg';
import Gy5 from '../utils/img/g5.jpg';
import Gy6 from '../utils/img/g6.jpg';

export function ImgGallery() {
    return (
        <div className='container py-5'>
            <p className='text-center fs-1 mb-5 text-uppercase fw-bold'>Тағамдар</p>
            <div className='row'>
                <div className='col-md-4 px-2'>
                    <div className='my-3'>
                        <img src={Gy1} className='img-fluid' alt=''/>
                    </div>
                    <div className='my-3'>
                        <img src={Gy2} className='img-fluid' alt=''/>
                    </div>
                </div>


                <div className='col-md-4 px-2'>
                    <div className='my-3'>
                        <img src={Gy3} className='img-fluid' alt=''/>
                    </div>
                    <div className='my-3'>
                        <img src={Gy4} className='img-fluid' alt=''/>
                    </div>
                </div>


                <div className='col-md-4 px-2'>
                    <div className='my-3'>
                        <img src={Gy5} className='img-fluid' alt=''/>
                    </div>
                    <div className='my-3'>
                        <img src={Gy6} className='img-fluid' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

