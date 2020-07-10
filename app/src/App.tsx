import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <p>This is a paragraph</p>
        </div>
      // The above code (not true HTML) is compiled to the following:
      // React.createElement('div',
      //     {className: 'App'},
      //     React.createElement('h1', null, 'Hello')
      // )
    );
}

export default App;
