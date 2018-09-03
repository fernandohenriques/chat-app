import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { setUserLogged } from '../../../store/ducks/user';
import Api from '../../../services/api';
import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import RegisterForm from '../../molecules/RegisterForm';
import SubmitButton from '../../atoms/SubmitButton';
import Dialog from '../../atoms/Dialog';
import styles from './styles';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      avatar: '',
      openDialog: false,
    };
  }

  changeInput(name) {
    return e => this.setState({[name]: e.target.value });
  }

  async register() {
    const { firstName, secondName, email, password } = this.state;
    const { setUserLogged } = this.props;

    if (firstName && secondName && email && password) {
      const body = this.state;
      const data = await Api.register(body);
      if (data.token)
        setUserLogged(data.token, data.user);
      else
        this.setState({openDialog: true});
    }
  }

  render() {
    const { firstName, secondName, email, password, avatar, openDialog  } = this.state;
    const { classes, logged } = this.props;

    if (logged)
      return <Redirect to="/" />;

    return (
      <TemplateMain>
        <div className={classes.layout}>
          <Paper title="Cadastre-se">
            <form className={classes.form}>
              <RegisterForm
                firstName={firstName}
                secondName={secondName}
                email={email}
                password={password}
                avatar={avatar}
                changeInputFirstName={this.changeInput('firstName')}
                changeInputSecondName={this.changeInput('secondName')}
                changeInputEmail={this.changeInput('email')}
                changeInputPassword={this.changeInput('password')}
                changeInputAvatar={this.changeInput('avatar')}
                register={() => this.register()}
              />
              <div className={classes.buttons}>
                <Button component={Link} to="/login" className={classes.button} >
                  {'Voltar'}
                </Button>
                <SubmitButton title="Salvar" onClick={() => this.register()} />
              </div>
            </form>
          </Paper>

          <Dialog
            open={openDialog}
            content={'Infelizmente ocorreu um problema ao tentar salvar seu dados, tente novamente mais tarde.'}
            onClose={() => this.setState({ openDialog: false })}
          />
        </div>
      </TemplateMain>
    );
  }
}

Register.propTypes = {
  setUserLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({ logged: store.user.logged });
const mapDispatchToProps = dispatch => bindActionCreators({ setUserLogged }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Register);
