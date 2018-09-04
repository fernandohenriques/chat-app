import React from 'react';
import { pick } from 'ramda';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import withStyles from '@material-ui/core/styles/withStyles';
import Lens from '@material-ui/icons/Lens';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeUser } from '../../../store/ducks/user';
import { setUserLastTalk } from '../../../store/ducks/chat';
import Socket from '../../../services/socket';
import Avatar from '../../atoms/Avatar';
import styles from './styles';


const logout = (userId, removeUser) => {
  removeUser();
  Socket.disconnect(userId);
}

const renderItem = (item, classes, setUserLastTalk) => {
  const { online } = item;
  const status = online ? classes.online : classes.offline;

  return (
    <ListItem button key={item._id} onClick={() => setUserLastTalk(item)}>
      <ListItemAvatar>
        <Avatar src={item.avatar} className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText primary={`${item.firstName} ${item.secondName}`} />
      <Lens className={status} />
    </ListItem>
  );
};

const MainMenuOptions = (props) => {
  const { classes, removeUser, setUserLastTalk, items, userId } = props;

  return (
    <div className={classes.list}>
      <List component="nav">
        {items.map(item => renderItem(item, classes, setUserLastTalk))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Sair" onClick={() => logout(userId, removeUser) } />
        </ListItem>
      </List>
    </div>
  );
};

MainMenuOptions.propTypes = {
  items: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = store => ({ userId: store.user.id });
const mapDispatchToProps = dispatch => bindActionCreators({ removeUser, setUserLastTalk }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(MainMenuOptions);
