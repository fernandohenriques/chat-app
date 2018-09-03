
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const RegisterForm = (props) => {
  const {
    firstName,
    secondName,
    email,
    password,
    avatar,
    changeInputFirstName,
    changeInputSecondName,
    changeInputEmail,
    changeInputPassword,
    changeInputAvatar,
    register,
  } = props;

  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Primeiro Nome"
            fullWidth
            autoComplete="fname"
            value={firstName}
            onChange={changeInputFirstName}
            onKeyPress={e => e.charCode === 13 ? register : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Segundo Nome"
            fullWidth
            autoComplete="lname"
            value={secondName}
            onChange={changeInputSecondName}
            onKeyPress={e => e.charCode === 13 ? register : null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
            autoComplete="email"
            fullWidth
            required
            value={email}
            onChange={changeInputEmail}
            onKeyPress={e => e.charCode === 13 ? register : null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
            fullWidth
            value={password}
            onChange={changeInputPassword}
            onKeyPress={e => e.charCode === 13 ? register : null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="avatar"
            name="avatar"
            label="Avatar"
            fullWidth
            value={avatar}
            onChange={changeInputAvatar}
            onKeyPress={e => e.charCode === 13 ? register : null}
          />
        </Grid>
      </Grid>
    </Fragment>
  );

};

RegisterForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  changeInputFirstName: PropTypes.func.isRequired,
  changeInputSecondName: PropTypes.func.isRequired,
  changeInputEmail: PropTypes.func.isRequired,
  changeInputPassword: PropTypes.func.isRequired,
  changeInputAvatar: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
