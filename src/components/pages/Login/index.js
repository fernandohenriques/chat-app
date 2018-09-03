import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import SubmitButton from '../../atoms/SubmitButton';
import styles from './styles';

import Api from '../../../services/api';


const Login = (props) => {
  const { classes } = props;

  return (
    <TemplateMain>
      <div className={classes.layout}>
        <Paper title="Login" iconComponent={<LockIcon />}>
          <form className={classes.form}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Seu e-mail</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Sua senha</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>

            <SubmitButton fullWidth title="Entrar" onClick={() => getAllUsers()} />
            <div className={classes.wrapperLink}>
              <Button component={Link} to="/register">
                {'Não sou Cadastrado'}
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </TemplateMain>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
