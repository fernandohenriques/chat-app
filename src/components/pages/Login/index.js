import React from 'react';
import PropTypes from 'prop-types';
import LockIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import SubmitButton from '../../atoms/SubmitButton';
import styles from './styles';

const Login = (props) => {
  const { classes } = props;

  return (
    <TemplateMain>
      <div className={classes.layout}>
        <Paper title="Login" iconComponent={<LockIcon />}>
          Oi
          <SubmitButton title="Entrar" />
        </Paper>
      </div>
    </TemplateMain>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
