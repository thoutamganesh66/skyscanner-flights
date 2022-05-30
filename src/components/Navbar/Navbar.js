import React from 'react';

//svg imports
import Logo from '../../assets/result.svg';
import car from '../../assets/car-small.svg';
import flight from '../../assets/flight-small.svg';
import hotel from '../../assets/hotel-small.svg';

import { Button, Button2, ButtonContainer, ButtonContainerTop, ButtonText, ButtonTop, ButtonWrapper, ButtonWrapperTop, Icon, LogoImage } from './Style';

import './styles.css';

const Navbar = () => {
    return (
        <>
            <div className="container top" style={{ paddingTop: 24, paddingLeft: 18, paddingRight: 18, paddingBottom: 0 }}>
                {/* upper navbar */}
                <div className='row'>
                    <div className='col'>
                        <LogoImage src={Logo} alt='logo' />
                    </div>
                    <div className='col'>
                        <ButtonWrapperTop>
                            <ButtonContainerTop>
                                <ButtonTop>En(UK)</ButtonTop>
                            </ButtonContainerTop>
                            <ButtonContainerTop>
                                <ButtonTop>Log In</ButtonTop>
                            </ButtonContainerTop>
                        </ButtonWrapperTop>
                    </div>
                </div>
                {/* Lower Navbar */}
                <div className='row mt-2'>
                    <div className='col-sm'>
                        <ButtonWrapper>
                            <ButtonContainer>
                                <Icon src={flight} />
                                <ButtonText>
                                    Flights
                                </ButtonText>
                            </ButtonContainer>
                            <ButtonContainer>
                                <Icon src={hotel} />
                                <ButtonText>
                                    Hotels
                                </ButtonText>
                            </ButtonContainer><ButtonContainer>
                                <Icon src={car} />
                                <ButtonText>
                                    Car Hire
                                </ButtonText>
                            </ButtonContainer>
                        </ButtonWrapper>
                        {/* <Button2><Icon src={hotel}>Flights</Icon></Button2> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;