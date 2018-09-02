import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

const Main = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main>
        {children}
      </main>
    </Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
