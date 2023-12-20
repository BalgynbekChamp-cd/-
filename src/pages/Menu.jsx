import React from "react";
import './Menu.css';
import {Card, CardBody, CardText, Cardtext, CardTitle} from "react-bootstrap";
import BreakfastImg from '../utils/img/brrreakfast.jpg';
import lunchImg from '../utils/img/luuunch.jpg';
import dinnerImg from '../utils/img/dinnner.jpg';
import desertimg from '../utils/img/desssert.jpg';

const breakfast = [
    {
        id:1,
        name: "Қымыз",
        description: "жұмыртқа, май, тұз",
        price: '1920 tenge'
    },
    {
        id:2,
        name: "Ет",
        description: "жайылған қамыр, ет, сәбіз, картоп, пияз",
        price: '1465 tenge'
    },
    {
        id:3,
        name: "Нурыз көже",
        description: "тары, бидай, сүт, ет",
        price: '1991 tenge'
    }

];

const lunch = [
    {
        id:1,
        name: "Наурыз көже",
        description: "құйрық май, сүр ет, қазы қарта, жарма, тары, су, күріш, бидай, тұз",
        price: '2020 tenge'
    },
    {
        id:2,
        name: "Бауырсақ",
        description: "ұн, су, май, жұмыртқа",
        price: '700 tenge'
    },
    {
        id:3,
        name: "Қымыз",
        description: "жылқы сүті",
        price: '465 tenge'
    }
];


const dinner = [
    {
        id:1,
        name: "Плов",
        description: "ет, күріш, тұз, су",
        price: '1918 tenge'
    },
    {
        id:2,
        name: "батон",
        description: "ұн, жұмыртқа, шекер",
        price: '300 tenge'
    },
    {
        id:3,
        name: "салат",
        description: "қызанақ, орамжапырақ, тұз, тауық еті",
        price: '700 tenge'
    }
];


const dessert = [
    {
        id:1,
        name: "Шие кексі",
        description: "шие, жұмыртақа, ұн, шекер",
        price: '450 tenge'
    },
    {
        id:2,
        name: "Құлпынай кексі",
        description: "құлпынай, жұмыртқа, ұн, шекер",
        price: '555 tenge'
    },
    {
        id:3,
        name: "Малина кексі",
        description: "малина, жұмыртқа, шекер, ұн",
        price: '666 tenge'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Мәзір</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Таңғы ас</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=''/>
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>


            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Түскі ас</h2>
                    <div className='row '>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>

                                </div>
                            ))}

                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={lunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=''/>
                        </div>
                    </div>

                </div>

            </div>


            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Кешкі ас</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={dinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=''/>
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>


            <div className='dessert bg-dark py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Десерт</h2>
                    <div className='row '>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>

                                </div>
                            ))}

                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={desertimg} className='img-fluid w-75 mt-4 mt-lg-0' alt=''/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Menu;