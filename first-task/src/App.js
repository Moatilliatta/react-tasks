import React from 'react';
import WelcomeMsg from './WelcomeMsg/WelcomeMsg.js'
import BriefHistory from './BriefHistory/BriefHistory.js'
import './App.css';

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      {className: 'App'},
      React.createElement(
        WelcomeMsg,
        { textMsg: "Hello World! and welcome to the first task." }
      ),
      React.createElement(
        BriefHistory,
        { txt: "React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called \"FaxJS\". He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012." }
      )
    );
  }
}

export default App;
