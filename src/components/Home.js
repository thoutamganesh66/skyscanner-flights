import React from 'react'
import Benefits from './Benefits-Box/Benefits';
import Cities from './Cities/Cities';
import Confidence from './Confidence-Message/Confidence';
import Deals from './Deals/Deals';
import Faq from './FAQ/Faq';
import Map from './Map/Map';
import NewsLetter from './Newsletter/NewsLetter';
import Peace from './Peace-Container/Peace';
import Search from './Search/Search';

const Home = () => {
    return (
        <>
            <div>
                <Search />
                <Confidence />
                <Deals />
                <Map />
                <Faq />
                <Benefits />
                <Peace />
                <NewsLetter />
                <Cities />
            </div>
        </>
    );
}

export default Home;