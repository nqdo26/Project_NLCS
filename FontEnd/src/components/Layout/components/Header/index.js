import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
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
                <div className={cx('header-1')}>
                    <div className={cx('header-1-inner')}>
                        <div className={cx('header-1-item')}>
                            <Link to="/" className={cx('header-1-link')}>
                                <span className={cx('header-1-content-1')}>Find a Store</span>
                            </Link>
                            <Link to="/" className={cx('header-1-link')}>
                                <span className={cx('header-1-content')}>Help</span>
                            </Link>
                            <Link to="/" className={cx('header-1-link')}>
                                <span className={cx('header-1-content')}>Log In</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('header-2')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="Nike" />
                    </Link>

                    <div className={cx('nav')}><NavMenu /></div>

                    <div className={cx('actions')}>
                        <>
                            <Search />

                            <Tippy delay={[500, 50]} content="Favorites" placement="bottom" className="custom-tippy">
                                <button className={cx('action-btn')}>
                                    <FarvoriteIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[500, 50]} content="Bag Items" placement="bottom" className="custom-tippy">
                                <button className={cx('action-btn')}>
                                    <CartIcon />
                                </button>
                            </Tippy>
                        </>
                    </div>
                </div>
                <div className={cx('header-3')}>
                    <div className={cx('header-3-inner')}>
                        <span className={cx('header-3-content')}>Free Standard Delivery & 30-Day Free Returns</span>
                        <Link to="/" className={cx('header-3-link')}>
                            Join Now View Details
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
