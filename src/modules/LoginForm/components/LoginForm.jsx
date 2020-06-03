import React from "react";
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

import {Button, Block} from 'src/components'


const LoginForm = () => {
    return (
        <div>
            <div className={'auth__top'}>
                <h2>Welcome!</h2>
                <p>Log in or get registration</p>
            </div>
            <Block className={'auth__form'}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}>

                    <Form.Item
                        validateStatus={'success'}
                        hasFeedback
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               placeholder="Email"
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                                className="login-form-button" size={'large'}>
                            Log in
                        </Button>
                    </Form.Item>
                    <Link to={'registration'} className="auth__registration">registration</Link>
                </Form>
            </Block>
        </div>
    )
};

export default LoginForm;
