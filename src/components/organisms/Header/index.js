import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';

import styles from './styles';
import AppTitle from '../../atoms/AppTitle';
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
    const { classes, firstName, contacts } = this.props;
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
            <AppTitle />
            <Typography color="inherit">Olá, {firstName}!</Typography>
          </Toolbar>
        </AppBar>
        <MainMenu open={leftMenuOpen} items={contacts} toggleMenu={() => this.toggleMenu()} />
      </div>
    );
  }
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({ firstName: store.user.firstName, contacts: store.contacts });

export default compose(withStyles(styles), connect(mapStateToProps))(Header);
