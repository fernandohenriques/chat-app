import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import withStyles from '@material-ui/core/styles/withStyles';

import Avatar from '../../atoms/Avatar';
import styles from './styles';

const ChatMessages = (props) => {
  const { classes, history } = props;

  const listMessages = ({ user, message }, i) => (
    <Fragment key={i}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={user.avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={`${user.firstName} ${user.secondName}`}
          secondary={message}
        />
      </ListItem>
      <Divider inset />
    </Fragment>
  );

  return history ? history.map(listMessages) : null;
};

ChatMessages.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired || undefined,
};

export default withStyles(styles)(ChatMessages);
