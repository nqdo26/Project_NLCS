import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FarvoriteIcon, CartIcon } from '~/components/Icons';
import Search from '../Search';
// import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    return (
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
    
                    <div className={cx('nav')}>
                        {/* <Tippy
                            interactive={true}
                            visible={true}
                            render={(attrs) => (
                                <div className={cx('newfeatured-menu')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>hehe</PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-link')}>New & Featured</div>
                        </Tippy> */}
                        <Link to="/shoes" className={cx('nav-link')}>
                            Shoes
                        </Link>
                        <Link to="/sale" className={cx('nav-link')}>
                            Sale
                        </Link>
                        <Link to="/customise" className={cx('nav-link')}>
                            Customise
                        </Link>
                        <Link to="/skrs" className={cx('nav-link')}>
                            SNKRS
                        </Link>
                    </div>
    
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
                                    {/* <span className={cx('badge')}>12</span> */}
                                </button>
                            </Tippy>
                        </>
                    </div>
                </div>
            </header>
    );
}

export default Header;
