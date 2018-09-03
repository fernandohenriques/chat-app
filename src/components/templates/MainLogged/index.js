import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from '../../organisms/Header';
import styles from './styles';

const MainLogged = (props) => {
  const { classes, children } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.main}>
        <Header />
        {children}
      </main>
    </Fragment>
  );
};

MainLogged.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(MainLogged);
