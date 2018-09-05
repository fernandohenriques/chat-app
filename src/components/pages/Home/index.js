import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withTada } from 'react-motions';

import { setStatus } from '../../../store/ducks/contacts';
import { setHistory, removeNotification } from '../../../store/ducks/chat';
import Socket from '../../../services/socket';
import TemplateMainLogged from '../../templates/MainLogged';
import Chat from '../../organisms/Chat';
import Avatar from '../../atoms/Avatar';
import styles, { AvatarWrapper } from './styles';

class Home extends Component {
  componentDidMount() {
    const { user, setStatus, setHistory } = this.props;
    Socket.someoneEnter(setStatus);
    Socket.someoneOut(setStatus);
    Socket.receiveMessage(setHistory);
    window.addEventListener('load', () => Socket.connect(user.id));
    window.addEventListener('unload', () => Socket.disconnect(user.id));
  }

  componentWillMount() {
    Socket.unregisterToReceiveMessage();
  }

  sendMessage(message) {
    const { user, userLastTalk, setHistory } = this.props;
    setHistory(userLastTalk._id, user, message);
    Socket.sendMessage(userLastTalk._id, user, message);
  }

  renderAvatarContact(user, classes) {
    if (!user._id) return null;

    return (
      <AvatarWrapper>
        <Avatar src={user.avatar} className={classes.avatar} />
        <Typography variant={'title'} align="center">
          {`${user.firstName} ${user.secondName}`}
        </Typography>
      </AvatarWrapper>
    );
  }

  renderChat() {
    const { userLastTalk, history, notification, removeNotification } = this.props;
    const chatHistory = history ? history[userLastTalk._id] : [];
    const notificationText = notification ? `${notification.name} enviou uma mensagem para você...` : '';

    return (
      <Chat
        chatHistory={chatHistory}
        notificationText={notificationText}
        onSendMessage={message => this.sendMessage(message)}
        onDeleteNotification={() => removeNotification()}
      />
    );
  }

  render() {
    const { classes, user, userLastTalk, notification } = this.props;
    const { logged } = user;

    if (!logged)
      return <Redirect to="/login" />;

    return (
      <TemplateMainLogged>
        <div className={classes.body}>
          {this.renderAvatarContact(userLastTalk, classes)}
          {notification ? withTada(this.renderChat()) : this.renderChat()}
        </div>
      </TemplateMainLogged>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  setHistory: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  removeNotification: PropTypes.func.isRequired,
  userLastTalk: PropTypes.object.isRequired,
  history: PropTypes.object || undefined,
  notification: PropTypes.bool || undefined,
};

const mapStateToProps = store => ({
  user: store.user,
  userLastTalk: store.chat.userLastTalk,
  history: store.chat.history,
  notification: store.chat.notification,
});
const mapDispatchToProps = dispatch => bindActionCreators({ setStatus, setHistory, removeNotification }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Home);
