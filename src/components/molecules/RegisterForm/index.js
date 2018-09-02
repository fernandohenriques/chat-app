
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const RegisterForm = () => (
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
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="avatar"
          name="avatar"
          label="Avatar"
          fullWidth
        />
      </Grid>
    </Grid>
  </Fragment>
);

export default RegisterForm;
