import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const MainMenuOptions = (props) => {
  const { classes } = props;

  return (
    <div className={classes.list}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Chelsea Alfredo" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Priscila Henriques" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  );
};

MainMenuOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenuOptions);
