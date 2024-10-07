import React from 'react';
import { Button, Form, Input } from 'antd';
import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import Image from '~/components/Image';
import loginLogo from '~/assets/images/loginLogo.png';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const RegisterForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Image className={cx('img')} src={loginLogo} alt="Login Logo" />
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        remember: true,
                    }}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item
                        label={<label className={cx('label')}>Username</label>}
                        name="username"
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
                        label={<label className={cx('label')}>Password</label>}
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
                        label={<label className={cx('label')}>Re-Password</label>}
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('The two passwords that you entered do not match!'),
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <div className={cx('action')}>
                            <Button className={cx('button')} type="primary" htmlType="submit">
                                Register
                            </Button>

                            <Link to="/login">
                                <span className={cx('login')}>Login</span>
                            </Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegisterForm;
