import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLoginUser } from '../../../store/ducks/user';
import Api from '../../../services/api';
import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import SubmitButton from '../../atoms/SubmitButton';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  login() {
    const { setLoginUser } = this.props;
    //const data = await Api.getAllUsers(login);
  }

  render() {
    const { classes } = this.props;

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

              <SubmitButton fullWidth title="Entrar" onClick={() => this.login()} />
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
  }
}

Login.propTypes = {
  setLoginUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = dispatch => bindActionCreators({ setLoginUser }, dispatch);

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(Login);
