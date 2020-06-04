import React from 'react';
import {Route, Link} from "react-router-dom";

import {Auth, Home} from 'pages';
import './styles/index.scss';

const App = () => {
    return (
    <div className="wrapper">
        <Link to={'home'}>home</Link>
        <Route exact path={['/', '/login', '/registration']} component={Auth}/>
        <Route path={'/home'} component={Home}/>
    </div>
  );
};

export default App;
