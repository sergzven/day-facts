import React from "react";
import './styles.scss';
import {TextField} from "@material-ui/core";

const InputControl = React.forwardRef((props, ref) => {
    const {error, helperText, className} = props;
    return (
        <div
            className={`input-control ${className}`}
        >
            <TextField
                inputRef={ref}
                variant="outlined"
                margin="normal"
                fullWidth
                {...props}
            />
        </div>
    )
})

export default InputControl;
