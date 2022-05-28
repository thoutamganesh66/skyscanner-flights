import React from 'react'
import Benefits from './Benefits-Box/Benefits';
import Confidence from './Confidence-Message/Confidence';

const Home = () => {
    return (
        <>
            <div>
                <Confidence />
                <Benefits />
            </div>
        </>
    );
}

export default Home;