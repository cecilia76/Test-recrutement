import React from 'react';
import Header from './components/site/header.component';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routers></Routers>
    </BrowserRouter>
  );
}

export default App;
