import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FarvoriteIcon, CartIcon } from '~/components/Icons';
import Search from '../Search';
import NavMenu from '~/components/NavMenu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-1')} >
                    <div className={cx('header-1-inner')} >
                        <div className={cx('header-1-item')} >
                            <Link to="/" className={cx('header-1-link')} >
                                <span>Find a Store</span>
                            </Link>
                        </div>
                        <div className={cx('header-1-item')} >
                            <Link to="/" className={cx('header-1-link')} >
                                <span>Help</span>
                            </Link>
                        </div>
                        <div className={cx('header-1-item')} >
                            <Link to="/" className={cx('header-1-link')} >
                                <span>Log In</span>
                            </Link>
                        </div>
                    </div>
                </div>
               <div className={cx('header-2')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="Nike" />
                    </Link>
    
                    <NavMenu />
    
                    <div className={cx('actions')}>
                        <>
                            <Search />
    
                            <Tippy delay={[0, 50]} content="Farvorites" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FarvoriteIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Bag Items" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <CartIcon />
                                </button>
                            </Tippy>
                        </>
                    </div>
               </div>
               <div className={cx('header-3')} >
                    hehe
                </div>
            </div>
        </header>
    );
}

export default Header;
