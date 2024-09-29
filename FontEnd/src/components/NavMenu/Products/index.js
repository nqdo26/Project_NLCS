import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products({ isVisible }) {
    return (
        <>
            {isVisible && (
                <div className={cx('overlay')}>
                    <div className={cx('menu')}>
                        <Link to="#">
                            Products
                        </Link>
                    </div>
                </div>
            )}
            <div className={cx('nav-items')}>
                <Link className={cx('nav-content')} onMouseDown={(e) => e.preventDefault()}>
                    Products
                </Link>
            </div>
        </>
    );
}

export default Products;