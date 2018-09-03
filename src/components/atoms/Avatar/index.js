import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

const renderAvatar = (props) => {
    const { src, className } = props;
    const component = src ? <Avatar src={src} className={className} /> : <AccountCircle className={className} />;
    return component;
};

renderAvatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default renderAvatar;


