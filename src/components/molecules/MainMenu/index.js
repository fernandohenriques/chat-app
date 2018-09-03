import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

import MainMenuOptions from '../../atoms/MainMenuOptions';

const MainMenu = (props) => {
  const { open, toggleMenu, items } = props;

  return (
    <Drawer open={open} onClose={toggleMenu}>
      <div tabIndex={0} role="button" onClick={toggleMenu} onKeyDown={toggleMenu}>
        <MainMenuOptions items={items} />
      </div>
    </Drawer>
  );
};

MainMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default MainMenu;
