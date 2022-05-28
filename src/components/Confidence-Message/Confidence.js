import React from "react";
import { ConfidenceBody, ConfidenceImageStyles, ConfidenceImageText, SmallImageContainer } from "./Style";
import './style.css';

import smallGlobe from '../../assets/globe-small.svg';
import smallTicket from '../../assets/ticket-small.svg';
import smallList from '../../assets/list-small.svg';

const Confidence = () => {
    return (
        <>
            <div>
                <ConfidenceBody>
                    {/* <div className="containerBox">
                        <div className="row">
                        <div className="containerItem row">
                            <div className="col-sm">
                                <SmallImageContainer>
                                    <ConfidenceImageStyles src={smallGlobe} />
                                </SmallImageContainer>
                            </div>
                            <div className="col-sm">
                                <ConfidenceImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ConfidenceImageText>
                            </div>
                        </div>
                        <div className="containerItem row">
                            <div className="col-sm">
                                <SmallImageContainer>
                                    <ConfidenceImageStyles src={smallGlobe} />
                                </SmallImageContainer>
                            </div>
                            <div className="col-sm">
                                <ConfidenceImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ConfidenceImageText>
                            </div>
                        </div>
                        <div className="containerItem row">
                            <div className="col-sm">
                                <SmallImageContainer>
                                    <ConfidenceImageStyles src={smallGlobe} />
                                </SmallImageContainer>
                            </div>
                            <div className="col-sm">
                                <ConfidenceImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ConfidenceImageText>
                            </div>
                        </div>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <SmallImageContainer>
                                            <ConfidenceImageStyles src={smallGlobe} />
                                        </SmallImageContainer>
                                    </div>
                                    <div className="col-sm-10">
                                        <ConfidenceImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ConfidenceImageText>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <SmallImageContainer>
                                            <ConfidenceImageStyles src={smallTicket} />
                                        </SmallImageContainer>
                                    </div>
                                    <div className="col-sm">
                                        <ConfidenceImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ConfidenceImageText>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <SmallImageContainer>
                                            <ConfidenceImageStyles src={smallList} />
                                        </SmallImageContainer>
                                    </div>
                                    <div className="col-sm">
                                        <ConfidenceImageText>Find the best fare by comparing flights from over 1000 providers, then book with no fees</ConfidenceImageText>
                                    </div>
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