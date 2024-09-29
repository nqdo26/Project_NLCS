import React, { useState } from 'react';
import styles from './NavMenu.module.scss';
import NewAndFeatured from './NewAndFeatured';
import Products from './Products';
import Sale from './Sale';
import Customise from './Customise';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NavMenu() {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className={cx('nav-items')}>
            <div
                onMouseEnter={() => setHoveredItem('newAndFeatured')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <NewAndFeatured isVisible={hoveredItem === 'newAndFeatured'} />
            </div>
            <div
                onMouseEnter={() => setHoveredItem('products')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <Products isVisible={hoveredItem === 'products'} />
            </div>
            <div
                onMouseEnter={() => setHoveredItem('sale')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <Sale isVisible={hoveredItem === 'sale'} />
            </div>
            <div
                onMouseEnter={() => setHoveredItem('customise')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <Customise isVisible={hoveredItem === 'customise'} />
            </div>
        </div>
    );
}

export default NavMenu;