# react-scroll-up

Just a simple component that scrolls view to top of page.
![](reactScrollUp.gif)

## Installation

```
npm install --save react-scroll-up
```
### Dependencies
- React ^15.6.1

## How To Use
There are two main ways to use the module, either leave standard and pass in props to change the look and functionality, or have in encapsulate children elements and only take care of the scrolling part.

### Standard
```
import React, { Component } from 'react';
import { ScrollUp } from 'react-scroll-up';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://somelogo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Our App</h1>
        </header>
        <ScrollUp 
            delay={2} 
            placement="bottom" 
            size="80px"
            text="Scroll up" 
        />
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          ... lots of text
        </p>
    </div>
  } ...
```

### With Children
```
import React, { Component } from 'react';
import { ScrollUp } from 'react-scroll-up';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://somelogo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ScrollUp 
            delay={2}
        >
            <button>Scroll up</button>
        </ScrollUp>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          ... lots of text
        </p>
    </div>
} ...
```

#### Properties

Property      | Brief Description                                   | Example (*d=default)      | Data Type  
--------------|-----------------------------------------------------|-----------------------|------------
delay | In ms, lower is faster scroll. | Delay={15}  d | Number
placement | Bottom or Top of window ( inset set by default at 2vh) | placement="bottom" d | String
size | Size of button if using default design | size="80px" d | String
scrollOffset | How far down a user must scroll to show 'scroller' component | scrollOffset={20} d | Number
text | text to display in button | test="top" d | String
style | styles to apply to button | ** d | css object

** styles will overwrite predefined defaultStyles with the exception of placement and size 
