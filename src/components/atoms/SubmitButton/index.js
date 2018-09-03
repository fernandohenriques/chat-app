import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const SubmitButton = (props) => {
  const { classes, title, fullWidth, onClick } = props;
  const full = fullWidth ? fullWidth : false;

  return (
    <Button
      fullWidth={full}
      type="submit"
      variant="raised"
      color="primary"
      className={classes.submit}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(styles)(SubmitButton);
