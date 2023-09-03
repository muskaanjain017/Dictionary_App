import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
import store from './components/store';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Provider store={store}>

      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/word/:word" element={<WordDetails/>} />
      </Routes>
      </Provider>

    </BrowserRouter>
  );
}

export default App;