import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sale.module.scss';

const cx = classNames.bind(styles);

function Sale({ isVisible }) {
    return (
        <>
            {isVisible && (
                <div className={cx('overlay')}>
                    <div className={cx('menu')}>
                        <Link to="#">
                            Sale
                        </Link>
                    </div>
                </div>
            )}
            <div className={cx('nav-items')}>
                <Link className={cx('nav-content')} onMouseDown={(e) => e.preventDefault()}>
                    Sale
                </Link>
            </div>
        </>
    );
}

export default Sale;