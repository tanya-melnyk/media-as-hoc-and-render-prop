import { Component } from 'react';

class MediaRenderProp extends Component {
  state = { matches: false };

  mql = window.matchMedia(this.props.query);

  screenTest = e => {
    if (e.matches) {
      this.setState({ matches: true });
    } else {
      this.setState({ matches: false });
    }
  };

  componentDidMount() {
    this.setState({ matches: this.mql.matches });
    this.mql.addListener(this.screenTest);
  }

  componentWillUnmount() {
    this.mql.removeListener(this.screenTest);
  }

  render() {
    return this.props.children(this.state.matches);
  }
}

export default MediaRenderProp;
