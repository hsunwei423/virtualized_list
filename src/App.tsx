import React from 'react';
import logo from './logo.svg';
import './App.css';

import VirtualizedList from './components/VirtualizedList';

function App() {

  const renderItem = () => {
    return (
      <div>123</div>
    )
  };

  return (
    <div className="App">
      <VirtualizedList itemHeight={30} windowHeight={300} itemCount={10} renderItem={renderItem} />
    </div>
  );
}

export default App;
