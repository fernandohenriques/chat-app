import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import TemplateMainLogged from '../../templates/MainLogged';
import styles from './styles';

const Home = (props) => {
  const { classes } = props;

  return (
    <TemplateMainLogged>
      <div className={classes.body}>
        Teste
      </div>
    </TemplateMainLogged>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
