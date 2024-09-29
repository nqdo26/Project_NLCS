import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Customise.module.scss';

const cx = classNames.bind(styles);

function Customise({ isVisible }) {
    return (
        <>
            {isVisible && (
                <div className={cx('overlay')}>
                    <div className={cx('menu')}>
                        <Link to="#">
                            Customise
                        </Link>
                    </div>
                </div>
            )}
            <div className={cx('nav-items')}>
                <Link className={cx('nav-content')} onMouseDown={(e) => e.preventDefault()}>
                    Customise
                </Link>
            </div>
        </>
    );
}

export default Customise;