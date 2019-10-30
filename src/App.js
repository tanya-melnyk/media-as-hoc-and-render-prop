import React, { Component } from 'react';

import MediaRenderProp from './MediaRenderProp';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <div>
        <MediaRenderProp query='(min-width: 800px)'>
          {matches => matches && <h2>The screen is wider than 800 px</h2>}
        </MediaRenderProp>

        <Message query='(max-width: 800px)' />
      </div>
    );
  }
}

export default App;
