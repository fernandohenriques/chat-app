import styled from 'styled-components';

const styles = theme => ({
  container: {
    height: '100%',
  },
  card: {
    marginTop: 2,
    minWidth: 355,
    [theme.breakpoints.only('sm')]: {
      width: 520,
    },
    [theme.breakpoints.up('sm')]: {
      width: 700,
    },
  },
  avatar: {
    width: 40,
    height: 40,
  },
  inputMessage: {
    marginLeft: 25,
  },
  sendButton: {
    marginLeft: 20,
  },
  sendButtonIcon: {
    fontSize: 32,
  },
  notification: {
    marginTop: 16,
  }
});

const ChatPanel = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-bottom: 1px solid;
`;

const Title = styled.span`
  font-size: 24px;
  padding: 10px 0;
`;

const InputPanel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid;
`;

export { ChatPanel, Header, Title, InputPanel };
export default styles;
