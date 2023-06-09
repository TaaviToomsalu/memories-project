import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'

import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './input'

const  Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignUp] = useState(false)


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignUp((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        console.log(res)
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Goole sign in was unsuccessful. Try again later")
    }
     
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                        <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                        <Input name='firstName' label='First Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Aadress' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignup ? 'Sign up' : 'Sign in'}
                    </Button>
                    <GoogleLogin 
                        clientId='1098099039585-pkcoseo8e7shlpk2okvp9m7abjmvm98j.apps.googleusercontent.com' 
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>
                                Google Sign in
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth