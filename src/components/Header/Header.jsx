import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { matchPath } from 'react-router'
import Tab from '../Base/Tab'

import data from './data.json'

const Header = (props) => {
    const {
        location,
        push,
    } = props


    return (
        <header className='header'>
            <div className='main-navigation container'>
                <div className='inside-navigation'>

                    <div className='f-aic'>
                        <div className='header-logo'>
                            {data.navTitle}
                        </div>
                    </div>
                    <nav className='navbar-menu'>
                        <ul>
                            {data.navList.map((nav, i) => (
                                <Tab key={i} location={location} exact={nav.exact} to={nav.to}>{nav.nav}</Tab>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;