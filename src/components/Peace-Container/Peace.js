import { Heading, Icon, Paragraph, PeaceBody, SmallHeading } from "./Style";
import './styles.css';

import bell from '../../assets/bell-violet.svg';
import mask from '../../assets/mask-violet.svg';

const Peace = () => {
    return (
        <>
            <div>
                <PeaceBody>
                    <div className="container">
                        <div>
                            <Heading>Plan with peace of mind during COVID-19</Heading>
                            <Paragraph>We’ve made it our mission to help you book your flights with confidence during these uncertain times.</Paragraph>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm side1">
                                <div className="block">
                                    <div className="smallHeading">
                                        <img src={bell} />
                                        <SmallHeading>Stay Updated</SmallHeading>
                                    </div>
                                    <div className="smallParagraph">
                                        <button className="signupButton">Sign up for updates</button> on any destination in the world, so you can keep track of when travel restrictions change, and countries reopen their borders.
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm side1">
                                <div className="block">
                                    <div className="smallHeading">
                                        <img src={mask} />
                                        <SmallHeading>See airline safety scores</SmallHeading>
                                    </div>
                                    <div className="smallParagraph">
                                        Sit back and relax, knowing the measures each airline has in place to keep you safe while you fly – from mandatory face masks, to daily deep cleans.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PeaceBody>
            </div>
        </>
    );
}

export default Peace;