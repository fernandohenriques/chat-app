import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const renderAvatar = (props) => {
    const { src } = props;
    const component = src ? <Avatar src={src} {...props} /> : <AccountCircle {...props} />;
    return component;
};

renderAvatar.propTypes = {
  src: PropTypes.string,
};

export default renderAvatar;


