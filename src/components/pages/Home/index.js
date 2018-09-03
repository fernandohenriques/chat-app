import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TemplateMainLogged from '../../templates/MainLogged';
import styles from './styles';

class Home extends Component {
  render() {
    const { classes, logged } = this.props;

    if (!logged)
      return <Redirect to="/login" />;

    return (
      <TemplateMainLogged>
        <div className={classes.body}>
          Teste
        </div>
      </TemplateMainLogged>
    );
  }
}

Home.propTypes = {
  logged: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = store => ({ logged: store.user.logged, });

export default compose(withStyles(styles), connect(mapStateToProps))(Home);
