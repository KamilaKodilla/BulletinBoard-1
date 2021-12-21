import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getStatus } from '../../../redux/userRedux';

import { AppBar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Component = ({className, children, userStatus}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="sticky" className={styles.appbar}>
        <Container maxWidth="xl">
        <Toolbar className={styles.toolbar}>
            <Typography variant="h6">
              <Link to={'/'} className={styles.link}>
                  <span>OTOAUTO</span> - your favourite BULLETIN BOARD
              </Link>
            </Typography>
        {userStatus === true ? (
              <>
                <Typography variant="h6">
                  <Link to={'/'} className={styles.link}>
                    LIST OF YOURS ADDS
                  </Link>
                </Typography>
                <Button
                  color="inherit"
                  variant="outlined"
                  component={Link}
                  className={styles.login}
                  to={'/'}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                color="inherit"
                variant="outlined"
                href="https://google.com"
                className={styles.login}
              >
                Login
              </Button>
            )}
            </Toolbar>
        </Container>
      </AppBar>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userStatus: PropTypes.bool,
};

const mapStateToProps = state => ({
  userStatus: getStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerHeader = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  ContainerHeader as Header,
  Component as HeaderComponent,
};
