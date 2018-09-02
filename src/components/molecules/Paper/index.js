import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const CustomPaper = (props) => {
  const { classes, children, title, iconComponent, style } = props;
  const paperStyle = style ? style : classes.paper;

  return (
    <Paper className={paperStyle}>
      {iconComponent ? <Avatar className={classes.avatar}>{iconComponent}</Avatar> : null}
      <Typography variant={iconComponent ? 'headline' : 'display1'} align="center">
        {title ? title : ''}
      </Typography>
      {children}
    </Paper>
  );
};

CustomPaper.propTypes = {
  title: PropTypes.string,
  iconComponent: PropTypes.element,
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaper);
