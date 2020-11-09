import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {Grid, Paper, Card, CardContent, CardActions, Typography, Button, Box} from "@material-ui/core";

import InputField from "../../../components/InputControl/InputControl";
import {signInAction} from "../../../redux/Reducers/auth/action";
import {selectLoading, selectIsAuthorized} from "../../../redux/Reducers/auth/selector";
import Loader from "../../../components/loader";

import './styles.scss';

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be 8 chars minimum.')
        .required('Email is required')
})

const SignIn = (props) => {

    const { register, control, handleSubmit, watch, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            email: 'arei.zven@gmail.com',
            password: '123qweasd'
        }

    });

    const loading = useSelector(state => selectLoading(state));
    const authorized = useSelector(state => selectIsAuthorized(state));

    const dispatch = useDispatch();

    useEffect(()=>{
        if (authorized) {

        }
    }, [authorized]);

    // console.log('errors', errors);
    console.log('loading', loading);

    const onSubmit = data => {
        dispatch(signInAction(data.email, data.password));
    };

    return (
        <Box pt={5}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={6} >
                    <Box mx={'auto'} style={{maxWidth: 480}}>
                        <Card className="auth-card">
                            <Loader active={loading} />
                            <CardContent>
                                <Typography
                                    component="h1"
                                    variant={"h4"}
                                    align={'center'}
                                    className={'title'}
                                    color="textSecondary"
                                    gutterBottom>
                                    Login
                                </Typography>
                                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                                    <InputField
                                        ref={register}
                                        type="email"
                                        label="email"
                                        name="email"
                                        error={!!errors?.email}
                                        helperText={errors?.email?.message}
                                    />

                                    <InputField
                                        ref={register}
                                        type="password"
                                        label="Password"
                                        name="password"
                                        error={!!errors?.password}
                                        helperText={errors?.password?.message}
                                    />

                                    <Box
                                        display="flex"
                                        p={2}
                                    >
                                        <Box m="auto">
                                            <Button type="submit" variant="contained" color="primary" size={"large"} >
                                                Submit
                                            </Button>
                                        </Box>
                                    </Box>

                                    <Typography style={{textAlign: "center"}}>Already have account? <Link to={'/auth/signup'}>Create Account</Link></Typography>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

// const validate = values => {
//     const errors = {}
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }
//     if (!values.password) {
//         errors.password = 'Required'
//     } else if (values.password.leading < 6) {
//         errors.age = 'Password should be at least 6 symbols long'
//     }
//     return errors
// }
//
//
// export default reduxForm({
//     form: 'signInForm',
//     validate
// })(SignUp);

export default SignIn;
