import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Button, Block } from 'components';

const LoginForm = ({ isSubmitting, isValid, handleSubmit }) => {
    return (
        <div>
                    <div className={'auth__top'}>
                        <h2>Welcome!</h2>
                        <p>Log in or get registration</p>
                    </div>
            <Block className={'auth__form'}>
                <Form className='login-form'>
                    <Form.Item name='email'>
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='Email'
                            size={'large'}
                        />
                    </Form.Item>

                    <Form.Item name='password'>
                        <Input
                            prefix={<LockOutlined className='site-form-item-icon' />}
                            type='password'
                            placeholder='Password'
                            size={'large'}
                        />
                    </Form.Item>

                    <Form.Item help={isSubmitting && isValid && 'Email or password is incorrect'}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            onClick={handleSubmit}
                            className='login-form-button'
                            size={'large'}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                    <Link to={'registration'} className='auth__registration'>
                        registration
                    </Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;
