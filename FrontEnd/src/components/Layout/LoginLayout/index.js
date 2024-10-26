import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LoginLayout;
