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
      inputMessage: '',
    };
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
    onSendMessage(inputMessage);
    this.setState({ inputMessage: '' });
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
          onChange={e => this.changeInput(e)}
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
    const { inputMessage } = this.state;
    const { classes, chatHistory } = this.props;

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
