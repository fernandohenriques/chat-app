import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import RegisterForm from '../../molecules/RegisterForm';
import SubmitButton from '../../atoms/SubmitButton';
import styles from './styles';

const Register = (props) => {
  const { classes } = props;

  return (
    <TemplateMain>
      <div className={classes.layout}>
        <Paper title="Cadastre-se">
          <form className={classes.form}>
            <RegisterForm />
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
};

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
