import React from 'react';
import { connect } from 'react-redux';
import Navigation from './components/router/Router';
import { screenResize } from './actions';

class Root extends React.Component {
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  updateDimensions() {
    this.props.store.dispatch(screenResize(window.innerWidth));
  }
  render() {
    return <Navigation {...this.props} />
  }
}

const mapStateToProps = ({ app }) => ({
  app,
});

const mapDispatchToProps = {
  screenResize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
