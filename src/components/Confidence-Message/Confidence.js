import React from "react";
import { ConfidenceBody, ImageStyles, ImageText, SmallImageContainer } from "./Style";
import './style.css';

import smallGlobe from '../../assets/globe-small.svg';
import smallTicket from '../../assets/ticket-small.svg';
import smallList from '../../assets/list-small.svg';

const Confidence = () => {
    return (
        <>
            <div>
                <ConfidenceBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <SmallImageContainer>
                                    <ImageStyles src={smallGlobe} />
                                </SmallImageContainer>
                                <div>
                                    <ImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ImageText>
                                </div>
                            </div>
                            <div className="col-sm">
                                <SmallImageContainer>
                                    <ImageStyles src={smallTicket} />
                                </SmallImageContainer>
                                <div>
                                    <ImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ImageText>
                                </div>
                            </div>
                            <div className="col-sm">
                                <SmallImageContainer>
                                    <ImageStyles src={smallList} />
                                </SmallImageContainer>
                                <div>
                                    <ImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ImageText>
                                </div>
                            </div>
                        </div>
                    </div>
                </ConfidenceBody>
            </div>
        </>
    );
}

export default Confidence;