import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

import TemplateMain from '../../templates/Main';
import Paper from '../../molecules/Paper';
import SubmitButton from '../../atoms/SubmitButton';
import styles from './styles';

const Register = (props) => {
  const { classes } = props;

  return (
    <TemplateMain>
      <div className={classes.layout}>
        <Paper title="Cadastre-se">

        </Paper>
      </div>
    </TemplateMain>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
