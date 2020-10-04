import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    const [navOpened, setNavOpened] = useState(false);
    const [bOpened, setBOpened] = useState(false);
    const [linksOpened, setLinksOpened] = useState(false);
    const navClassNames = navOpened ? 'navigation--active' : 'navigation';
    const bClassNames = bOpened ? 'hamburger--active' : 'hamburger ';
    const linksClassNames = linksOpened ? 'navigation' : 'navigation--active';
    return (
        <div className='header'>
            <h1>Małgorzata Prociewicz</h1>
            <p className='occupation'>psycholog, psychoterapeutka</p>

            <div className='border'></div>
            <div className='divDesktop'>

                <ul className='nav'>
                    <li><Link to='/' className='link'>Strona główna</Link></li>
                    <li><Link to='/omnie' className='link'>O mnie</Link></li>
                    <li><Link to='/oferta' className='link'>Oferta</Link></li>
                    <li><Link to='/kontakt' className='link'>Kontakt</Link></li>
                </ul>
            </div>
            <div className="divMobile">
                <div
                    className={bClassNames}
                    onClick={() => {
                        setNavOpened(!navOpened);
                        setBOpened(!bOpened)
                    }}
                >
                        <span className="hamburger__box">
               <span className="hamburger__inner"></span>
            </span>
                </div>
                <nav>
                    <ul className={navClassNames} onClick={() => {
                        setLinksOpened(!linksOpened)
                    }}>
                        <li className={linksClassNames} className='navigation__item'><Link to='/' className='link'>Strona
                            główna</Link></li>
                        <li className={linksClassNames} className='navigation__item'><Link to='/omnie' className='link'>O
                            mnie</Link></li>
                        <li className={linksClassNames} className='navigation__item'><Link to='/oferta' className='link'>Oferta</Link></li>

                        <li className={linksClassNames} className='navigation__item'><Link to='/kontakt'
                                                                                           className='link'>Kontakt</Link>
                        </li>
                    </ul>

                </nav>
            </div>

            <div className='border'></div>
        </div>
    )
};
export default Header;