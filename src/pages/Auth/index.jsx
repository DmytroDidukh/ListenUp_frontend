import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegistrationForm } from '@modules';

import './Auth.scss';

const Auth = () => {
    return (
        <section className='auth'>
            <Route exact path={['/', '/login']} component={LoginForm} />
            <Route exact path='/registration' component={RegistrationForm} />
        </section>
    );
};

export default Auth;
