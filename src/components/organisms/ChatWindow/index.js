import React, { Component } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const ChatWindow = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 420px;
  box-sizing: border-box;
`
const ChatPanel = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-bottom: 1px solid;
`

const Title = styled.p`
  text-align: center;
  font-size: 24px;
`

const NoDots = styled.div`
  hr {
    visibility: hidden;
  }
`

const OutputText = styled.div`
  white-space: normal !important;
  word-break: break-all !important;
  overflow: initial !important;
  width: 100%;
  height: auto !important;
  color: #fafafa !important;
`

const InputPanel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #fafafa;
`

const ChatroomImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
`

const Scrollable = styled.div`
  height: 100%;
  overflow: auto;
`

export default class Chatroom extends Component {
  constructor(props) {
    super(props)

    const { chatHistory } = props;

    this.state = {
      chatHistory,
      input: ''
    }

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
    this.panel.scrollTo(0, this.panel.scrollHeight)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <ChatWindow>
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
                          <Avatar src={user.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          style={{ color: '#fafafa' }}
                          primary={user.firstName}
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
                multiline
                rows={4}
                onChange={this.onInput}
                value={this.state.input}
                onKeyPress={e => (e.key === 'Enter' ? this.onSendMessage() : null)}
              />
              <Button color="primary" variant="contained" size="small"
                onClick={this.onSendMessage} style={{ marginLeft: 20 }}>
                <ChatBubbleOutline style={{ fontSize: 32 }} />
              </Button>
            </InputPanel>
          </ChatPanel>

        </ChatWindow>
      </div>
    )
  }
}
