import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main.js'

const rootEl = document.querySelector('#root');

class App extends React.Component {
  render() {
    return (
      <>
        <Main />
      </>
    )
  }
}

ReactDOM.render(<App />, rootEl);
