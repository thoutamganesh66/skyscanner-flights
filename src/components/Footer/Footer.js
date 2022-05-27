import { FooterStyle, Heading, ListItem, ListItems } from "./Style"
import './style.css';

const Footer = () => {
    return (
        <>
            <div>
                <FooterStyle>
                    <div className="container">
                        <div className='row'>
                            <div className="col-sm">
                                <Heading>Explore</Heading>
                                <ListItems>
                                    <ListItem>Cities</ListItem>
                                    <ListItem>Airports</ListItem>
                                    <ListItem>Countries/Region</ListItem>
                                    <ListItem>Airlines</ListItem>
                                    <ListItem>Flights</ListItem>
                                    <ListItem>Hotels</ListItem>
                                    <ListItem>Car hire</ListItem>
                                    <ListItem>App</ListItem>
                                    <ListItem>Sitemap</ListItem>
                                </ListItems>
                            </div>
                            <div className="col-sm">
                                <Heading>Partners</Heading>
                                <ListItems>
                                    <ListItem>Work with us</ListItem>
                                    <ListItem>Advertise with us</ListItem>
                                    <ListItem>Travel Insight</ListItem>
                                    <ListItem>Affiliates</ListItem>
                                    <ListItem>Travel APIs</ListItem>
                                </ListItems>
                            </div>
                            <div className="col-sm">
                                <Heading>Company</Heading>
                                <ListItems>
                                    <ListItem>About us</ListItem>
                                    <ListItem>Why Skyscanner?</ListItem>
                                    <ListItem>Media</ListItem>
                                    <ListItem>Our people</ListItem>
                                    <ListItem>Accessibility</ListItem>
                                    <ListItem>Sustainability</ListItem>
                                    <ListItem>Brand story</ListItem>
                                    <ListItem>Company Details</ListItem>
                                    <ListItem>Jobs</ListItem>
                                    <ListItem>Travel features and news</ListItem>
                                    <ListItem>Cookie policy</ListItem>
                                    <ListItem>Privacy policy</ListItem>
                                    <ListItem>Terms of service</ListItem>
                                </ListItems>
                            </div>
                            <div className="col-sm">
                                <Heading>Help</Heading>
                                <ListItems>
                                    <ListItem>Help</ListItem>
                                    <ListItem>Privacy settings</ListItem>
                                    <ListItem>Security</ListItem>
                                </ListItems>
                            </div>
                        </div>
                    </div>
                </FooterStyle>
            </div>
        </>
    );
}

export default Footer;