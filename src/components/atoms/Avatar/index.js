import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

const renderAvatar = (props) => {
    const { src } = props;
    const component = src ? <Avatar src={src} {...props} /> : <AccountCircle {...props} />;
    return component;
};

renderAvatar.propTypes = {
  src: PropTypes.string,
};

export default renderAvatar;


