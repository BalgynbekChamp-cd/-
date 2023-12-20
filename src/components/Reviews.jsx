import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle} from "react-bootstrap";
import './Reviews.css';
import Adam1 from '../utils/img/shavqat.webp';
import Adam2 from '../utils/img/ggg.webp';
import Adam3 from '../utils/img/арайка.webp';
import Adam4 from '../utils/img/асхат.webp';

export function Reviews() {
    return (
        <div className='reviews-section container'>
            <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Пікірлер</h2>
            <div className='row g-4'>
                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Жалпы ресторан жақсы. Сайтқа келсек өте керемет болмаса да 15 күндік еңбек көрініп тұр сондықтан бағалануы керек
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam1} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Шавқат Рахманов</CardTitle>
                        </CardFooter>
                    </Card>
                </div>


                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Жақсы ресторан. Алдын ала столик брондап бардық. Барлығы жоғары деңгейде жұмыс жасап тұр. Рахмет үлкен
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam2} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>GGG</CardTitle>
                        </CardFooter>
                    </Card>
                </div>


                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Офицант Бақберген өте жоғары деңгейде жұмыс жасайды. ТОП
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam3} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Арайка</CardTitle>
                        </CardFooter>
                    </Card>
                </div>


                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Отбасымен келетін орын екен. Рахмет
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam4} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Асхат</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>

        </div>
    )
}