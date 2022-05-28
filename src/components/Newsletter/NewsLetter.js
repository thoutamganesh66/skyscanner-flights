import { Body, FooterInfo, Heading, NewsLetterImage, Paragraph } from "./Styles";

import './styles.css';

import NewsIcon from '../../assets/Emailcapture.png';

const NewsLetter = () => {
    return (
        <>
            <Body>
                <div className="container">
                    <div className="box">
                        <div className="row newsletter">
                            <div className="col-sm-6 part1">
                                <Heading>Don't miss a single flight deal</Heading>
                                <Paragraph>Get cheap flights and unmissable travel deals sent straight to your inbox.</Paragraph>
                                <div className="row emailHolder">
                                    <div className="col-sm-8">
                                        <div className="emailInput2">
                                            <input type='email' className="emailInput" placeholder="Enter your email address"></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <button className="signUp">Sign up</button>
                                    </div>
                                </div>
                                <div className="footer">
                                    <FooterInfo>You can unsubscribe at any time. Read our <span className="privacyPolicy">Privacy Policy</span> for more info.</FooterInfo>
                                </div>
                            </div>
                            <div className="col-sm-6 newsLetterImage">
                                <NewsLetterImage src={NewsIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default NewsLetter;