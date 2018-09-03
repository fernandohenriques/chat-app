import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '../../atoms/Card';
import Avatar from '../../atoms/Avatar';
import Scrollable from '../../atoms/Scrollable';
import styles, { ChatPanel, Header, Title, InputPanel } from './styles';

class Chat extends Component {
  constructor(props) {
    super(props)
    const { chatHistory } = props;
    this.state = {
      chatHistory,
      inputMessage: '',
    };

    this.onInput = this.onInput.bind(this)
    this.onSendMessage = this.onSendMessage.bind(this)
    this.onMessageReceived = this.onMessageReceived.bind(this)
    this.updateChatHistory = this.updateChatHistory.bind(this)
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this)
  }

  componentDidMount() {
    this.props.registerHandler(this.onMessageReceived)
    this.scrollChatToBottom()
  }

  componentDidUpdate() {
    this.scrollChatToBottom()
  }

  componentWillUnmount() {
    this.props.unregisterHandler()
  }

  onInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  onSendMessage() {
    if (!this.state.input)
      return

    this.props.onSendMessage(this.state.input, (err) => {
      if (err)
        return console.error(err)

      return this.setState({ input: '' })
    })
  }

  onMessageReceived(entry) {
    console.log('onMessageReceived:', entry)
    this.updateChatHistory(entry)
  }

  updateChatHistory(entry) {
    this.setState({ chatHistory: this.state.chatHistory.concat(entry) })
  }

  scrollChatToBottom() {
    this.panel.scrollTo(0, this.panel.scrollHeight);
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ height: '100%' }}>
       <Card className={classes.card}>
          <Header>
            <Title>
              Chat
            </Title>
          </Header>

          <ChatPanel>
            <Scrollable innerRef={(panel) => { this.panel = panel; }}>
              <List>
                {
                  this.state.chatHistory.map(
                    ({ user, message }, i) => [
                      <ListItem key={i}>
                        <ListItemAvatar>
                          <Avatar src={user.avatar} className={classes.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          style={{ color: '#fafafa' }}
                          primary={`${user.firstName} ${user.secondName}`}
                          secondary={message}
                        />
                      </ListItem>,
                      <Divider inset />
                    ]
                  )}
              </List>
            </Scrollable>
            <InputPanel>
              <TextField
                placeholder="Digite uma mensagem."
                fullWidth
                multiline
                rows={4}
                onChange={this.onInput}
                value={this.state.input}
                onKeyPress={e => (e.key === 'Enter' ? this.onSendMessage() : null)}
                style={{ marginLeft: 25 }}
              />
              <Button color="primary" variant="contained" size="small"
                onClick={this.onSendMessage} style={{ marginLeft: 20 }}>
                <ChatBubbleOutline style={{ fontSize: 32 }} />
              </Button>
            </InputPanel>
          </ChatPanel>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Chat);
