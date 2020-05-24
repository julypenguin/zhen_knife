import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { matchPath } from 'react-router'

const Header = (props) => {
    const {
        push
    } = props

    return (
        <header className='header'>
            <div className='main-navigation container'>
                <div className='inside-navigation'>

                    <div className=''>
                        <div className='header-logo lh60'>
                            臻刀具
                        </div>
                    </div>
                    <nav className='navbar-menu'>
                        <ul>
                            <li>
                                <Link className='lh60' to='/'>首頁</Link>
                            </li>
                            <li>
                                <Link className='lh60' to='/SS-01BG'>限時搶購活動</Link>
                            </li>
                            <li>
                                <Link className='lh60' to='/news'>最新訊息</Link>
                            </li>
                            <li>
                                <Link className='lh60' to='/shop'>臻刀具系列</Link>
                            </li>
                            <li>
                                <Link className='lh60' to='/contact'>聯絡我們</Link>
                            </li>
                            <li>
                                <Link className='lh60' to='/shopping_process'>購物相關</Link>
                            </li>
                            <li>
                                <Link className='lh60' to='/vip'>會員專區</Link>
                            </li>
                            <li className='lh60'>
                                <Icon icon='search' />
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;