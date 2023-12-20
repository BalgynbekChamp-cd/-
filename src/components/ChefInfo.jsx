import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle} from "react-bootstrap";
import './Reviews.css';
import Adam1 from '../utils/img/person1.webp';
import Adam2 from '../utils/img/person2.webp';
import Adam3 from '../utils/img/person3.webp';
import Adam4 from '../utils/img/person4.webp';

export function ChefInfo() {
    return (
        <div className='reviews-section container'>
            <div className='row g-4'>
                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Ирландка, выросшая на картофельной ферме, называет
                                    себя традиционным и даже скучным поваром. Однако
                                    посетителям ее ресторанов так не кажется: Клэр
                                    умудряется соединять традиционные британские продукты
                                    с инновационными техниками.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam1} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Ирина Красовская</CardTitle>
                        </CardFooter>
                    </Card>
                </div>


                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    самоучка, который десять лет учился по различным кулинарным книгам и соглашался
                                    на любую подработку, чтобы оплачивать свои поездки во Францию для того,
                                    чтобы получить знания от местных рестораторов, виноделов и сыроваров.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam2} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Андрей Пальто</CardTitle>
                        </CardFooter>
                    </Card>
                </div>


                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Отец кулинарного искусства был наставником многих известных поваров,
                                    а также стал вдохновителем «новой гастрономии».Он уверен,
                                    что не существует высокой или низкой кухни – есть только хорошая.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam3} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Марат Адидас</CardTitle>
                        </CardFooter>
                    </Card>
                </div>


                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    Казахстанский шеф-повар, а также писатель и создатель кулинарного
                                    шоу «Мастер-Шеф». Он был политологом. Но после окончания
                                    колледжа решил связать свою жизнь с приготовлением пищи.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Adam4} className='img-fluid rounded-circle mx-3 shadow' alt=''/>
                            <CardTitle className='text-success'>Вова Адидас</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>

        </div>
    )
}