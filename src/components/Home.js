import React from 'react'
import Benefits from './Benefits-Box/Benefits';
import Confidence from './Confidence-Message/Confidence';
import Deals from './Deals/Deals';
import Faq from './FAQ/Faq';
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
                <Faq />
                <Benefits />
                <Peace />
                <NewsLetter />
            </div>
        </>
    );
}

export default Home;