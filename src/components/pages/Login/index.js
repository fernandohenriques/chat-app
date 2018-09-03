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
import { Redirect } from 'react-router-dom';
import { withBounce } from 'react-motions';

import { setUserLogged } from '../../../store/ducks/user';
import Api from '../../../services/api';
import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import SubmitButton from '../../atoms/SubmitButton';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      effect: 0,
    };
  }

  changeInput(name) {
    return e => this.setState({[name]: e.target.value });
  }

  async login() {
    let effect = this.state.effect;
    this.setState({effect:0});

    const { email, password } = this.state;
    const { setUserLogged } = this.props;

    if (email && password) {
      const body = {
        'user': {
          'email': email,
          'password': password,
        },
      };
      const data = await Api.login(body);
      if (data.token)
        setUserLogged(data.token, data.user);
      else
        this.setState({effect: 1});
    }
  }

  renderPaper() {
    const { email, password } = this.state;
    const { classes } = this.props;

    return (
      <Paper title="Login" iconComponent={<LockIcon />}>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Seu e-mail</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={this.changeInput('email')}
              onKeyPress={e => e.charCode === 13 ? this.login() : null}
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Sua senha</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={this.changeInput('password')}
              onKeyPress={e => e.charCode === 13 ? this.login() : null}
            />
          </FormControl>

          <SubmitButton fullWidth title="Entrar" onClick={() => this.login()} />
          <div className={classes.wrapperLink}>
            <Button component={Link} to="/register">
              {'Não sou Cadastrado'}
            </Button>
          </div>
        </form>
      </Paper>
    );
  }

  render() {
    const { effect } = this.state;
    const { classes, logged } = this.props;

    if (logged)
      return <Redirect to="/" />;

    return (
      <TemplateMain>
        <div className={classes.layout}>
          {effect ? withBounce(this.renderPaper()) : this.renderPaper()}
        </div>
      </TemplateMain>
    );
  }
}

Login.propTypes = {
  setUserLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = store => ({ logged: store.user.logged });
const mapDispatchToProps = dispatch => bindActionCreators({ setUserLogged }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Login);
