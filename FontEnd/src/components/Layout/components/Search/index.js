import React, { useState } from 'react';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import SearchHeader from './SearchHeader';

const cx = classNames.bind(styles);

function Search() {
    const [showResult, setShowResult] = useState(false);

    const handleFocus = () => {
        setShowResult(true);
    };

    const handleBlur = () => {
        setShowResult(false);
    };

    return (
        <>
            {showResult && (
                <div className={cx('overlay')} onClick={handleBlur}>
                    <div className={cx('menu')} onClick={(e) => e.stopPropagation()}>
                        <SearchHeader setShowResult={setShowResult} /> 
                    </div>
                </div>
            )}
            <div className={cx('search')}>
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()} onClick={handleFocus}>
                    <SearchIcon />
                </button>
                <p className={cx('search-placeholder')} onClick={handleFocus} tabIndex="0">
                    Search
                </p>
            </div>
        </>
    );
}

export default Search;