import React from 'react';

//svg imports
import Logo from '../assets/result.svg';

import { LogoImage } from './Style';

const Navbar = () => {
    return (
        <>
            <div className='container'>
                {/* upper navbar */}
                <div className='row'>
                    <div className='col'>
                        <LogoImage src={Logo} alt='logo' />
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;