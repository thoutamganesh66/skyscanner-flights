import './styles.css';

const Cities = () => {
    return (
        <>
            <div>
                <div className="container">
                    <h3 className='title'>Ready to start your adventure?</h3>
                    <p className='description'>So are we. Find a cheap flight to some of the most popular destinations, or pick your favourite airline below.</p>
                    <div className='row'>
                        <ul className='tabs'>
                            <li className='active'>Popular cities</li>
                            <li>Popular countries</li>
                            <li>Popular flight routes</li>
                            <li>Top airlines</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="sa">
                                <div className='marginRigh'>
                                    <ul>
                                        <li><a href=''>Flights to Berlin</a></li>
                                        <li><a href=''>Flights to Colombo</a></li>
                                        <li><a href=''>Flights to Kuala Lumpur</a></li>
                                        <li><a href=''>Flights to Moscow</a></li>
                                        <li><a href=''>Flights to Seoul</a></li>
                                    </ul>
                                </div>
                                <div >
                                    <ul>
                                        <li><a href=''>Flights to Dubai</a></li>
                                        <li> <a href=''>Flights to Bangkok</a></li>
                                        <li><a href=''>Flights to London</a></li>
                                        <li> <a href=''>Flights to New York</a></li>
                                        <li> <a href=''>Flights to Tokyo</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="sa">
                                <div className='marginRigh'>
                                    <ul>
                                        <li><a href=''>Flights to Jakarta</a></li>
                                        <li><a href=''>Flights to Frankfurt</a></li>
                                        <li><a href=''>Flights to Melbourne</a></li>
                                        <li><a href=''>Flights to Paris</a></li>
                                        <li><a href=''>Flights to Toronto</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li> <a href=''>Flights to Chicago</a></li>
                                        <li><a href=''>Flights to Istanbul</a></li>
                                        <li> <a href=''>Flights to Milan</a></li>
                                        <li><a href=''>Flights to Rome</a></li>
                                        <li><a href=''>Flights to Vancouver</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cities;