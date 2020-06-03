import React, {useState} from "react";
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

import {Button, Block} from 'src/components'


const RegistrationForm = () => {
    const [success, setSuccess] = useState(false);

    return (
        <div>
            <div className={'auth__top'}>
                <h2>Registration</h2>
                <p>To start chatting you need to register first</p>
            </div>
            <Block className={'auth__form'}>
                {!success ? (
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}>
                        <Form.Item
                            validateStatus={'success'}
                            /*hasFeedback*/
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}>
                            <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                                   placeholder="Email"
                                   size={'large'}/>
                        </Form.Item>

                        <Form.Item
                            validateStatus={'success'}
                            /*hasFeedback*/
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Username"
                                   size={'large'}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                                size={'large'}/>
                        </Form.Item>

                        <Form.Item
                            name="repeatPass"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please repeat your password!',
                                },
                            ]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Repeat password"
                                size={'large'}/>
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={() => setSuccess(true)} type="primary" htmlType="submit"
                                    className="login-form-button" size={'large'}>
                                Register
                            </Button>
                        </Form.Item>
                        <Link to={'login'} className="auth__registration">log in</Link>
                    </Form>
                ) : (
                    <div className={'auth__top success-block'}>
                        <InfoCircleOutlined style={{fontSize: '40px', color: '#096dd9'}}/>
                        <h3>Confirm your email address</h3>
                        <p>A message has been sent to your mail. Follow the link in the description of the message.</p>
                    </div>
                )}
            </Block>


        </div>
    )
};

export default RegistrationForm;
