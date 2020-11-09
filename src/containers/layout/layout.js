import React from "react";
import PropTypes from 'react-proptypes';
import AppHeader from "./header/header";
import {Container} from "@material-ui/core";

const Layout = props => (
    <div className="wrap">
        <AppHeader />
        <Container className="container">
            {props.children}
        </Container>
    </div>
)

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Layout;
