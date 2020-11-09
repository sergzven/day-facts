import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import './style.scss';

export const Link = (props) => {
    return (
        <Button {...props} component={NavLink}>
            {props.children}
        </Button>
    );
};

const AppHeader = () => {
    const location = useLocation();

    function chekIsActive(path) {
        return location.pathname === path ? 'active' : '';
    }

    return (
        <AppBar position="static">
            <Toolbar>
                {/*<IconButton className={'menuButton'} color="inherit" aria-label="Menu">*/}
                {/*    <MenuIcon />*/}
                {/*</IconButton>*/}
                <Typography className={'grow'}>
                    <Link color="inherit" to={'/'}>
                        My App
                    </Link>
                </Typography>


                <Link color="inherit" to={'/auth'}>
                    Login
                </Link>
            </Toolbar>
        </AppBar>


        // <Navbar bg="light" expand="lg">
        //     <div className="container">
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="mr-auto">
        //                 <Link
        //                     className={`nav-link ${chekIsActive('/')}`}
        //                     to={'/'}>Home</Link>
        //                 <Link
        //                     className={`nav-link ${chekIsActive('/auth')}`}
        //                     to={'/auth'}>Auth</Link>
        //                 <Link
        //                     className={`nav-link ${chekIsActive('/my_page')}`}
        //                     to={'/my_page'}>My Page</Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </div>
        // </Navbar>
    )
}

export default AppHeader;
