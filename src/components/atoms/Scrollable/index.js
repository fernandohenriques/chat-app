import styled from 'styled-components';

const Scrollable = styled.div`
  overflow: auto;

  @media (max-width: 576px) {
    height: 160px;
  }

  @media (min-width: 577px) and (max-width: 768px)  {
    height: 190px;
  }

  @media (min-width: 769px) {
    height: 210px;
  }
`;

export default Scrollable;
