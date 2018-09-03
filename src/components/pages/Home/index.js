import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TemplateMainLogged from '../../templates/MainLogged';
import Chat from '../../organisms/Chat';
import Avatar from '../../atoms/Avatar';
import styles, { AvatarWrapper } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [{user: props.user, message: 'Oi'}, {user: props.user, message: 'tudo bem'}],
    };
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
            <Avatar src={user.avatar} className={classes.avatar} />
            <Typography variant={'title'} align="center">
              {`${user.firstName} ${user.secondName}`}
            </Typography>
          </AvatarWrapper>

          <Chat
            chatHistory={chatHistory}
            onSendMessage={(message, cb) => console.log(message)}
            registerHandler={() => console.log('registra msg')}
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
