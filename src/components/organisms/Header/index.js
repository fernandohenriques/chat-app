import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';
import MainMenu from '../../molecules/MainMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenuOpen: false,
    };
  }

  toggleMenu () {
    const { leftMenuOpen } = this.state;
    this.setState({leftMenuOpen:!leftMenuOpen});
  }

  render() {
    const { classes } = this.props;
    const { leftMenuOpen } = this.state;

    return (
      <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleMenu()}
            >
              <SupervisorAccount className={classes.menuIcon} />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.container}>
              {`Chat App`}
            </Typography>
            <Typography color="inherit">Olá, Usuário!</Typography>
          </Toolbar>
        </AppBar>
        <MainMenu open={leftMenuOpen} toggleMenu={() => this.toggleMenu()} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
