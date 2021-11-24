import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Button, Block } from '@components';
import { onValidateField } from '@utils/helpers';

const RegistrationForm = (props) => {
    const [validated] = useState(false);

    const onSubmitErrorMessage = 'Some fields are empty or wrong';
    const [email, username, password, confirmPass /*, error, success*/] = [
        'email',
        'username',
        'password',
        'confirmPass',
        'error',
        'success',
    ];

    console.log(props);

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
    } = props;

    console.log(values);

    const onValidateHelp = (value) => (!touched[value] ? '' : errors[value]);

    return (
        <div>
            <div className='auth__top'>
                <h2>Registration</h2>
                <p>To start chatting you need to register first</p>
            </div>
            <Block className='auth__form'>
                {!validated ? (
                    <Form onSubmit={handleSubmit} className='registration-form'>
                        <Form.Item
                            className='form-input'
                            validateStatus={onValidateField(email, errors, touched)}
                            help={onValidateHelp(email)}
                        >
                            <Input
                                className='form-input'
                                id={email}
                                prefix={<MailOutlined />}
                                placeholder='Email'
                                size='large'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            className='form-input'
                            validateStatus={onValidateField(username, errors, touched)}
                            help={onValidateHelp(username)}
                        >
                            <Input
                                className='form-input'
                                id={username}
                                prefix={<UserOutlined />}
                                placeholder='Username'
                                value={values.username}
                                size='large'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            validateStatus={onValidateField(password, errors, touched)}
                            help={onValidateHelp(password)}
                        >
                            <Input.Password
                                className='form-input'
                                id={password}
                                prefix={<LockOutlined />}
                                type='password'
                                placeholder='Password'
                                value={values.password}
                                size='large'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            validateStatus={onValidateField(confirmPass, errors, touched)}
                            help={onValidateHelp(confirmPass)}
                        >
                            <Input.Password
                                className='form-input'
                                id={confirmPass}
                                prefix={<LockOutlined />}
                                type='password'
                                value={values.confirmPass}
                                placeholder='Repeat password'
                                size='large'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item help={isSubmitting && isValid && onSubmitErrorMessage}>
                            <Button
                                onClick={handleSubmit}
                                type='primary'
                                htmlType='submit'
                                className='login-form-button'
                                size='large'
                            >
                                Register
                            </Button>
                        </Form.Item>
                        <Link to='login' className='auth__registration'>
                            log in
                        </Link>
                    </Form>
                ) : (
                    <div className='auth__top success-block'>
                        <InfoCircleOutlined style={{ fontSize: '40px', color: '#096dd9' }} />
                        <h3>Confirm your email address</h3>
                        <p>
                            A message has been sent to your mail. Follow the link in the description
                            of the message.
                        </p>
                    </div>
                )}
            </Block>
        </div>
    );
};

RegistrationForm.propTypes = {
    props: PropTypes.string,
};

RegistrationForm.defaultProps = {
    props: {},
};

export default RegistrationForm;
