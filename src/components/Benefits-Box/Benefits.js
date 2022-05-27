import React from 'react';
import { BenefitsBody, ImageStyles, Heading, ImageHeading, ImageParagraph, Paragraph } from './Style';
import './styles.css';
import globe from '../../assets/globe.svg';
import packet from '../../assets/packet.svg';
import alarm from '../../assets/alarm.svg';

const Benefits = () => {
    return (
        <>
            <div>
                <BenefitsBody>
                    <div className='container'>
                        <div>
                            <Heading>Looking for a cheap flight anywhere in the world?</Heading>
                            <Paragraph>It’s easy around here. 100 million travellers use us as their go-to tool, comparing prices across more than 1,200 airlines and travel providers. With so many cheap flights in one place, you can say hello to savings, and goodbye to stress – here’s how.</Paragraph>
                        </div>
                        <div className='row'>
                            <div className='col-sm'>
                                <div className='imageContainer'>
                                    <ImageStyles src={globe} />
                                </div>
                                <div className='imageHeading'>
                                    <ImageHeading>Search ‘Everywhere’, explore anywhere</ImageHeading>
                                </div>
                                <div className='imageDescription'>
                                    <ImageParagraph>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</ImageParagraph>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='imageContainer'>
                                    <ImageStyles src={packet} />
                                </div>
                                <div className='imageHeading'>
                                    <ImageHeading>Pay less, go further with transparent pricing</ImageHeading>
                                </div>
                                <div className='imageDescription'>
                                    <ImageParagraph>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</ImageParagraph>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='imageContainer'>
                                    <ImageStyles src={alarm} />
                                </div>
                                <div className='imageHeading'>
                                    <ImageHeading>Book when it's best with Price Alerts</ImageHeading>
                                </div>
                                <div className='imageDescription'>
                                    <ImageParagraph>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</ImageParagraph>
                                </div>
                            </div>
                        </div>
                    </div>
                </BenefitsBody>
            </div>
        </>
    );
}

export default Benefits;