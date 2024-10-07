import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import classNames from 'classnames/bind';
import styles from '~/components/LoginForm/LoginForm.module.scss';
import Image from '~/components/Image';
import loginLogo from '~/assets/images/loginLogo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const LoginForm = () => (
    <div className={cx('wapper')}>
        <div className={cx('inner')}>
            <Image className={cx('img')} src={loginLogo} alt="Login Logo" />
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label={<span className={cx('email')}>Email</span>}
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={<span className={cx('password')}>Password</span>}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <div className={cx('action')}>
                        <Button className={cx('login-button')} type="primary" htmlType="submit">
                            Login
                        </Button>
                    </div>
                    <div className={cx('link')}>
                        <Link to="/">
                            <span className={cx('back')}>Back</span>
                        </Link>
                        <Link to="/register">
                            <span className={cx('register')}>Register</span>
                        </Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    </div>
);
export default LoginForm;
