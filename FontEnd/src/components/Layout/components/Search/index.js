import React, { useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClick = () => {
        // Thực hiện hành động khi click vào thanh tìm kiếm
        alert('Search bar clicked!');
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')} onClick={handleClick}>
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
                <div className={cx('search-input')} placeholder="Search">
                    <p className={cx('search-placeholder')}>Search</p>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;