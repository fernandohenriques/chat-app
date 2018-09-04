import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { setStatus } from '../../../store/ducks/contacts';
import { setHistory } from '../../../store/ducks/chat';
import Socket from '../../../services/socket';
import TemplateMainLogged from '../../templates/MainLogged';
import Chat from '../../organisms/Chat';
import Avatar from '../../atoms/Avatar';
import styles, { AvatarWrapper } from './styles';

class Home extends Component {
  componentDidMount() {
    const { setStatus, setHistory } = this.props;
    Socket.someoneEnter(setStatus);
    Socket.someoneOut(setStatus);
    Socket.receiveMessage(setHistory);
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

  render() {
    const { classes, user, userLastTalk, history } = this.props;
    const chatHistory = history ? history[userLastTalk._id] : [];
    const { logged } = user;

    if (!logged)
      return <Redirect to="/login" />;

    return (
      <TemplateMainLogged>
        <div className={classes.body}>
          {this.renderAvatarContact(userLastTalk, classes)}
          <Chat
            chatHistory={chatHistory}
            onSendMessage={message => this.sendMessage(message)}
          />
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
  userLastTalk: PropTypes.object.isRequired,
  history: PropTypes.array || undefined,
};

const mapStateToProps = store => ({
  user: store.user,
  userLastTalk: store.chat.userLastTalk,
  history: store.chat.history,
});
const mapDispatchToProps = dispatch => bindActionCreators({ setStatus, setHistory }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Home);
