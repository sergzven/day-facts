import React from "react";
import {CircularProgress} from "@material-ui/core";

import './style.scss';

const Loader = ({active}) => {
    return (
        <>
            {
                active && <div className="loader-wrap">
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default Loader;
