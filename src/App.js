import React from 'react';
import {Route, Link} from "react-router-dom";

import {Auth, Home} from 'pages';
import './styles/index.scss';

const App = () => {
    return (
    <div className="wrapper">
        <Route exact path={['/', '/login', '/registration']} component={Auth}/>
        <Route exact path={'/home'} component={Home}/>
    </div>
  );
};

export default App;
