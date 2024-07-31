import React, { Component } from 'react';
class App extends React.Component {
    render() {
        return (
            <div>
                <First />
                <Second />
            </div>
        );
    }
}
class First extends React.Component {
    render() {
        return (
            <div>
                <h1>JavaTpoint</h1>
            </div>
        );
    }
}
class Second extends React.Component {
    render() {
        return (
            <div>
                <h2>www.javatpoint.com</h2>
                <p>This websites contains the great CS tutorial.</p>
            </div>
        );
    }
}
export default App;  