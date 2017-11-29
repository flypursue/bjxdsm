import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <MainContent />
            </div>
        );
    }
}

export default App;
