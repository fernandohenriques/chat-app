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
    const { firstName, secondName, email, password, avatar } = this.state;
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
    const { firstName, secondName, email, password, avatar  } = this.state;
    const { classes, logged } = this.props;

    if (logged)
      return <Redirect to="/" />;

    return (
      <TemplateMain>
        <div className={classes.layout}>
          <Paper title="Cadastre-se">
            <form className={classes.form}>
              <RegisterForm
                firstName
                secondName
                email
                password
                avatar
                changeInputFirstName={() => this.changeInput('firstName')}
                changeInputEmail={() => this.changeInput('email')}
              />
              <div className={classes.buttons}>
                <Button component={Link} to="/login" className={classes.button} >
                  {'Voltar'}
                </Button>
                <SubmitButton title="Salvar" />
              </div>
            </form>
          </Paper>
        </div>
      </TemplateMain>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({ logged: store.user.logged });
const mapDispatchToProps = dispatch => bindActionCreators({ setUserLogged }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Register);
