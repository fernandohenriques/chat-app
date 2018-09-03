import styled from 'styled-components';

const styles = () => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
  },
  body: {
    position: 'relative',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
  },
});

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 10px 2px;
  }
`;

export { AvatarWrapper };
export default styles;
