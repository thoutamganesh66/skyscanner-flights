import React from 'react'
import Benefits from './Benefits-Box/Benefits';
import Confidence from './Confidence-Message/Confidence';
import Peace from './Peace-Container/Peace';

const Home = () => {
    return (
        <>
            <div>
                <Confidence />
                <Benefits />
                <Peace />
            </div>
        </>
    );
}

export default Home;