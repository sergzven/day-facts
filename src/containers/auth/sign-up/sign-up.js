import React from 'react';
import { useForm } from "react-hook-form";
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';

import InputField from "../../../components/InputControl/InputControl";
import {Grid, Paper, Card, CardContent, CardActions, Typography, Button, Box} from "@material-ui/core";
import {signUpAction} from "../../../redux/Reducers/auth/action";
import Loader from "../../../components/loader";

import './styles.scss';
import {selectLoading} from "../../../redux/Reducers/auth/selector";
import {Link} from "react-router-dom";

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be 8 chars minimum.')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const SignUp = (props) => {

    const { register, control, handleSubmit, watch, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            email: 'arei.zven@gmail.com',
            password: '123qweasd'
        }

    });

    const loading = useSelector(state => selectLoading(state));

    const dispatch = useDispatch();

    // console.log('errors', errors);
    console.log('loading', loading);

    const onSubmit = data => {
        dispatch(signUpAction(data.email, data.password));
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
                                    Create Account
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

                                    <InputField
                                        ref={register}
                                        type="password"
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        error={!!errors?.confirmPassword}
                                        helperText={errors?.confirmPassword?.message}
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

                                    <Typography style={{textAlign: "center"}}>Already have account? <Link to={'/auth/signin'}>Login</Link></Typography>

                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;
