import React from 'react';
import './App.css';
import styled from 'styled-components'

const Button=styled.button`color:red`;

function App() {
  return (
    <div className="App">
      <div>hello world</div>
      <Button>按钮</Button>
    </div>
  );
}

export default App;