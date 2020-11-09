import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from "./containers/layout/layout";
import SignIn from "./containers/auth/sign-in/sign-in";
import PrivateRoute from "./components/private-route";
import SignUp from "./containers/auth/sign-up/sign-up";

export const Home = () => {
    return (
        <div>Home</div>
    )
}

export const PrivatePage = () => {
    return (
        <div>Welcome</div>
    )
}

const App = () => {
    console.log('type', typeof Home);
    return(
        <Layout>
            <Switch>
                <Route path="/" exact ><Home /></Route>

                <Route path="/auth/signin" exact><SignIn /></Route>
                <Route path="/auth/signup" exact><SignUp /></Route>
                <Redirect from="/auth" exact to="/auth/signin"/>

                <PrivateRoute path="/my_page" component={PrivatePage} />
            </Switch>
        </Layout>
    )
}

export default App;
