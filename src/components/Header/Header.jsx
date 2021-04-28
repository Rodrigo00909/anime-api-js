import React from 'react'
import Menu from './Menu';
import Portada from './Portada';



const Header = () => {
    return (
        <div className="Header">
            <Portada />
            <Menu />
        </div>
    )
}

export default Header
