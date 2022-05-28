import { Image, ImageHeading } from './Styles';
import './styles.css';

import dubai from '../../assets/dubai.jpg';
import oman from '../../assets/oman.jpg';
import tick from '../../assets/tickk.svg';

const Deals = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div>
                        <span className="heading">
                            <span>Flight deals from Hyderabad</span>
                        </span>
                        <div className='row'>
                            <div className='col-sm-8'>
                                <span className='subHeading'>
                                    <span>Check out the cheapest flights departing in the next 90 days. </span>
                                </span>
                            </div>
                            <div className='col-sm-4'>
                                <button className="more">See more deals</button>
                            </div>
                        </div>
                        <div className='scrollable'>
                            <div className='width100'>
                                <div className='row'>
                                    <div className='col-sm'>
                                        <div className='cardContainer'>
                                            <div className='row'>
                                                <div className='imgContainer'>
                                                    <img src={dubai} className="image" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <ImageHeading>Dubai</ImageHeading>
                                                <div className='details'>
                                                    <img src={oman} className="icon" />
                                                    <div className='flightDetails'>
                                                        Sat, 4 Jun <br />
                                                        HYD - DXB, Oman Air
                                                    </div>
                                                </div>
                                                <div className='details'>
                                                    <img src={oman} className="icon" />
                                                    <div className='flightDetails'>
                                                        Sat, 4 Jun <br />
                                                        HYD - DXB, Oman Air
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className='details'>
                                                        <img src={tick} className="icon-small" />
                                                        <div className='flightDetailsSmall'>
                                                            Low Restrictions
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    From ₹20,171 >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm'>
                                        <div className='cardContainer'>
                                            <div className='row'>
                                                <div className='imgContainer'>
                                                    <img src={dubai} className="image" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <ImageHeading>Dubai</ImageHeading>
                                                <div className='details'>
                                                    <img src={oman} className="icon" />
                                                    <div className='flightDetails'>
                                                        Sat, 4 Jun <br />
                                                        HYD - DXB, Oman Air
                                                    </div>
                                                </div>
                                                <div className='details'>
                                                    <img src={oman} className="icon" />
                                                    <div className='flightDetails'>
                                                        Sat, 4 Jun <br />
                                                        HYD - DXB, Oman Air
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className='details'>
                                                        <img src={tick} className="icon-small" />
                                                        <div className='flightDetailsSmall'>
                                                            Low Restrictions
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    From ₹20,171 >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm'>
                                        <div className='cardContainer'>
                                            <div className='row'>
                                                <div className='imgContainer'>
                                                    <img src={dubai} className="image" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <ImageHeading>Dubai</ImageHeading>
                                                <div className='details'>
                                                    <img src={oman} className="icon" />
                                                    <div className='flightDetails'>
                                                        Sat, 4 Jun <br />
                                                        HYD - DXB, Oman Air
                                                    </div>
                                                </div>
                                                <div className='details'>
                                                    <img src={oman} className="icon" />
                                                    <div className='flightDetails'>
                                                        Sat, 4 Jun <br />
                                                        HYD - DXB, Oman Air
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className='details'>
                                                        <img src={tick} className="icon-small" />
                                                        <div className='flightDetailsSmall'>
                                                            Low Restrictions
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    From ₹20,171 >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Deals;