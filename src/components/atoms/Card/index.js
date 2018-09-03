import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const renderCard = (props) => {
    const { children } = props;
    return (
      <Card {...props}>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    );
};

renderCard.propTypes = {
  children: PropTypes.element,
};

export default renderCard;

