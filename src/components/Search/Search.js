import { GoIcon, Heading, SwapSmall } from "./Styles";

import './styles.css';

import swap from '../../assets/swap-small.svg';
import go from '../../assets/arrow.svg';

const Search = () => {
    return (
        <>
            <div className="searchComponent">
                <div className="aa container">
                    <div className="searchTitle">
                        <Heading>Cheap flights everywhere, from anywhere</Heading>
                    </div>
                    <div className="searchWrapper">
                        <div className="container">
                            <div className="row">
                                <div className="buttonWrapper">
                                    <input type='radio' name="ticketType" className="checkBox" />
                                    <label>Return</label>
                                    <input type='radio' name="ticketType" className="checkBox" />
                                    <label>One way</label>
                                    <input type='radio' name="ticketType" className="checkBox" />
                                    <label>Multi-city</label>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div class="col-sm-2">
                                    <label class="labelarrange1">From</label>
                                    <br />
                                    <input type="text" className="inputHolder" placeholder="Hyderabad" />
                                </div>
                                <div class="col-sm-2">
                                    <label class="labelarrange1" for="to">To</label>
                                    <br />
                                    <input type="text" id="to" name="to" className="inputHolder" placeholder="Jakarta" />
                                </div>
                                <div class="col-sm-3">
                                    <div>
                                        <div className="row">
                                            <div class="col-sm-6">
                                                <label class="labelarrange1">Depart</label>
                                                <br />
                                                <input type="date" className="inputHolder" />                                            </div>
                                            <div class="col-sm-6">
                                                <label class="labelarrange1">Return</label>
                                                <br />
                                                <input type="date" className="inputHolder" />                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <label for="cabinClass" class="labelarrange1">Cabin Class & Travellers</label>
                                    <br />
                                    {/* <input type="text" className="inputHolder" /> */}
                                    <select name="cabinClass" id="cabinClass" className="dropdownHolder">
                                        <option value="economy">Economy</option>
                                        <option value="premium-economy">Premium Economy</option>
                                        <option value="business-class">Business Class</option>
                                        <option value="first-class">First Class</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <div className="col-sm-2 searchButton">
                                        <button className="buttonText">Search Flights <GoIcon src={go} /></button>
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

export default Search;