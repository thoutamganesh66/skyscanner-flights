import React from 'react';
import Collapsible from 'react-collapsible';

import bell from '../../assets/cancell.svg';

import './styles.css';

const Faq = () => {
    return (
        <div className='container'>
            {/* <hr /> */}
            <h2 className='title'>Finding cheap flights: frequently asked questions</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <img src={bell} className="faqIcon" />How can I find the best flight deals?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.                            </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <img src={bell} className="faqIcon" /> How can I find the best last minute flight deals?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.                            </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <img src={bell} className="faqIcon" />How can I stay updated on cheap flight fares?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <img src={bell} className="faqIcon" /> Can I still book flights during covid-19?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            <img src={bell} className="faqIcon" />  What happens after I've booked my flight ticket?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.                            </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSix">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            <img src={bell} className="faqIcon" /> What happens if my flight is cancelled because of covid-19?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.                            </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSeven">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            <img src={bell} className="faqIcon" />  What happens if my flight is cancelled because of covid-19?
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingEight">
                        <button class="accordion-button collapsed" style={{ color: '#444560' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            <img src={bell} className="faqIcon" />    Where should I book a flight to right now?
                        </button>
                    </h2>
                    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Once you select your flight, you’ll book directly with one of our airline or travel partners, usually on their site.Your flight booking confirmation email and all the other info you'll need will come from them.                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Faq;