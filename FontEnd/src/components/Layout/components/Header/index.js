import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FarvoriteIcon, CartIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

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
