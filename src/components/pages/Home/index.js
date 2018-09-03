import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { setStatus } from '../../../store/ducks/contacts';
import Socket from '../../../services/socket';
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

  componentDidMount() {
    const { setStatus } = this.props;
    Socket.someoneEnter(setStatus);
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
const mapDispatchToProps = dispatch => bindActionCreators({ setStatus }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Home);
