import { Description, Heading, MapDivision } from "./Style";

import './styles.css';

import map from '../../assets/map.png';
const Map = () => {
    return (
        <>
            <div className="container">
                <MapDivision>
                    <div className="container">
                        <div>
                            <div className="half">
                                <Heading>Live COVID-19 travel map</Heading>
                                <Description>Keep up to date with the latest travel requirements, so you can plan your next trip with confidence.</Description>
                            </div>
                            <button className="explore">Explore now</button>
                            <img src={map} className="mapIm" />
                        </div>
                    </div>
                </MapDivision>
            </div>
        </>
    );
};

export default Map;