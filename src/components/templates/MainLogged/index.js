import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../../organisms/Header';

const MainLogged = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main>
        <Header />
        {children}
      </main>
    </Fragment>
  );
};

MainLogged.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLogged;
