import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const SubmitButton = (props) => {
  const { classes, title } = props;

  return (
    <Button
      {...props}
      type="submit"
      variant="raised"
      color="primary"
      className={classes.submit}
    >
      {title}
    </Button>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(SubmitButton);
