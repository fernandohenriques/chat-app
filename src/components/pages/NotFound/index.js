import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';

import TemplateMain from '../../templates/Main';
import AppTitle from '../../atoms/AppTitle';
import Paper from '../../molecules/Paper';
import styles from './styles';

const NotFound = (props) => {
  const { classes } = props;

  return (
    <TemplateMain>
      <AppBar position="static">
        <Toolbar>
          <AppTitle />
        </Toolbar>
      </AppBar>
      <Paper style={classes.paper}>
        <div>
          <p>
            Page not found :(
            <br /><br />
            Maybe the page you are looking for has been removed, or you typed in the wrong URL.
          </p>
          <Divider />
          <p>
            <Button component={Link} to="/">Home</Button>
          </p>
        </div>
      </Paper>
    </TemplateMain>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
