import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SteelBio from './components/SteelBio';
import LevonBio from './components/LevonBio';

const AppContainer = styled.div`
  background: var(--bg);
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/steel" element={<SteelBio />} />
          <Route path="/levon" element={<LevonBio />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
