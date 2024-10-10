import React from 'react';
import classNames from 'classnames/bind';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import styles from './AccountOptions.module.scss';

const cx = classNames.bind(styles);

const items = [
    {
        key: '1',
        label: <span className={cx('title')}>Account</span>,
    },
    {
        key: '2',
        label: <span className={cx('content')}>Profile</span>,
    },
    {
        key: '3',
        label: <span className={cx('content')}>Orders</span>,
    },
    {
        key: '4',
        label: <span className={cx('content')}>Inbox</span>,
    },
    {
        key: '5',
        label: <span className={cx('content')}>Experiences</span>,
    },
    {
        key: '6',
        label: <span className={cx('content')}>Account Settings</span>,
    },
];

const AccountOptions = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <a href="/" onClick={(e) => e.preventDefault()}>
            <Space className={cx('hi-account')}>
                <span>Hi, Ông Nội</span>
                <UserOutlined className={cx('icon')} />
            </Space>
        </a>
    </Dropdown>
);
export default AccountOptions;
