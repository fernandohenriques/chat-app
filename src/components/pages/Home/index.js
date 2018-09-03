import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TemplateMainLogged from '../../templates/MainLogged';
import Chat from '../../organisms/Chat';
import styles, { AvatarWrapper } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [{user: props.user, message: 'Oi'}, {user: props.user, message: 'tudo bem'}],
    };
  }

  renderAvatar(src) {
    const { classes } = this.props;
    const avatarClass = classes.avatar;
    const component = src ? <Avatar src={src} className={avatarClass} /> : <AccountCircle className={avatarClass} />;
    return component;
  }

  render() {
    const { chatHistory } = this.state;
    const { classes, user } = this.props;
    const { logged } = user;

    if (!logged)
      return <Redirect to="/login" />;

    return (
      <TemplateMainLogged>
        <div className={classes.body}>
          <AvatarWrapper>
            {this.renderAvatar(user.avatar)}
            <Typography variant={'title'} align="center">
              {`${user.firstName} ${user.secondName}`}
            </Typography>
          </AvatarWrapper>

          <Chat
            chatHistory={chatHistory}
            user={user}
            onLeave={() => console.log('saiu')}
            onSendMessage={(message, cb) => console.log(message)}
            registerHandler={() => console.log('registra msg')}
            unregisterHandler={{ isRegisterInProcess: false, user }}
          />
        </div>
      </TemplateMainLogged>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = store => ({ user: store.user });

export default compose(withStyles(styles), connect(mapStateToProps))(Home);
