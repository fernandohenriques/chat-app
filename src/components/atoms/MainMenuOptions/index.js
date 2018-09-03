import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeUser } from '../../../store/ducks/user';
import styles from './styles';

const MainMenuOptions = (props) => {
  const { classes, removeUser, items } = props;

  const renderItem = (item) => (
    <ListItem button>
      <ListItemText primary={`${item.firstName} ${item.secondName}`} />
    </ListItem>
  );

  return (
    <div className={classes.list}>
      <List component="nav">
        {items.map(item => renderItem(item))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Sair" onClick={() => removeUser()} />
        </ListItem>
      </List>
    </div>
  );
};

MainMenuOptions.propTypes = {
  items: PropTypes.object.isRequired,
  removeUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = store => ({ user: store.user });
const mapDispatchToProps = dispatch => bindActionCreators({ removeUser }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(MainMenuOptions);
