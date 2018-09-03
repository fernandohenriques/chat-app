import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const AppTitle = (props) => {
  const { classes } = props;

  return (
    <Typography variant="title" color="inherit" className={classes.container}>
      {'Chat App'}
    </Typography>
  );
};

AppTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTitle);


