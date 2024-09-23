import classNames from 'classnames/bind';
import styles from './SearchForm.module.scss';
import SearchHeader from '~/components/Layout/components/Search/SearchHeader';

const cx = classNames.bind(styles);

function SearchForm() {
    return ( 
        <div className={cx('inner')}>
            <div className={cx('header')}>
                <SearchHeader />
            </div>
            <div className={cx('content')}>
                
            </div>
        </div>
    );
}

export default SearchForm;