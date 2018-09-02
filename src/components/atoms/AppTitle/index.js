import React from 'react';
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

export default withStyles(styles)(AppTitle);


