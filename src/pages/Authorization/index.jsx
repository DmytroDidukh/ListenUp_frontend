import React from "react";
import {Route} from 'react-router-dom'

import {LoginForm, RegistrationForm} from '../../modules'

import './Authorization.scss'

const Authorization = () => {

    return (
        <div className={'authorization'}>
            <Route path={['/', '/login']} exact>
                <LoginForm/>
            </Route>
            <Route path={'/registration'}>
                <RegistrationForm/>
            </Route>
        </div>
    )
};

export default Authorization;
