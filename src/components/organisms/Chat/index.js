import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '../../atoms/Card';
import Scrollable from '../../atoms/Scrollable';
import ChatMessages from '../../molecules/ChatMessages';
import styles, { ChatPanel, Header, Title, InputPanel } from './styles';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatHistory: props.chatHistory,
      inputMessage: '',
    };
  }

  componentDidMount() {
    this.props.registerHandler(this.onMessageReceived);
    this.scrollChatToBottom();
  }

  componentDidUpdate() {
    this.scrollChatToBottom()
  }

  changeInput(e) {
    this.setState({inputMessage: e.target.value });
  }

  handleSendMessage() {
    const { inputMessage } = this.state;
    const { onSendMessage } = this.props;

    if (!inputMessage) return;

    onSendMessage(inputMessage, (err) => {
      if (err) console.error(err);
      this.setState({ inputMessage: '' });
    });
  }

  onMessageReceived(entry) {
    console.log('onMessageReceived:', entry);
    this.updateChatHistory(entry);
  }

  updateChatHistory(entry) {
    const { chatHistory } = this.state;
    this.setState({ chatHistory: chatHistory.concat(entry) })
  }

  scrollChatToBottom() {
    this.panel.scrollTo(0, this.panel.scrollHeight);
  }

  renderInputPanel(classes, inputMessage) {
    return (
      <InputPanel>
        <TextField
          placeholder="Digite uma mensagem."
          fullWidth
          multiline
          rows={4}
          onChange={this.changeInput}
          value={inputMessage}
          onKeyPress={e => e.charCode === 13 ? this.handleSendMessage() : null}
          className={classes.inputMessage}
        />
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={() => this.handleSendMessage()}
          className={classes.sendButton}
        >
          <ChatBubbleOutline className={classes.sendButtonIcon} />
        </Button>
      </InputPanel>
    );
  }

  render() {
    const { chatHistory, inputMessage } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <Fragment>
            <Header>
              <Title>Chat</Title>
            </Header>
            <ChatPanel>
              <Scrollable innerRef={(panel) => { this.panel = panel; }}>
                <List>
                  <ChatMessages history={chatHistory} />
                </List>
              </Scrollable>
              {this.renderInputPanel(classes, inputMessage)}
            </ChatPanel>
          </Fragment>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Chat);
