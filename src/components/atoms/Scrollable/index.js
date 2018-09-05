import React, { Fragment } from 'react';
import styled from 'styled-components';

const DivComponent = styled.div`
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

const ScrollableDiv = ({ _ref, ...props }) => (
  <Fragment>
    <DivComponent innerRef={_ref} {...props}>
      {props.children}
    </DivComponent>
  </Fragment>
);

const Scrollable = styled(ScrollableDiv)``;

export default Scrollable;
