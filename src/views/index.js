import React, {Fragment} from 'react';
import {
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
import Login from "./Login/Login";
import Main from "./Main/Main";

const MainLayout = ( props ) => {


    return(
        <Fragment>
                <Switch>
                    <Route path="/main"> <Main /></Route>
                    <Route path="/"> <Login /></Route>
                </Switch>
        </Fragment>
    )
}

export default MainLayout;