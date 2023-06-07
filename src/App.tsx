import React from 'react';
import './index.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Generator } from './components/Generator';

function App() {
  return (
    <div className="App">
        <Header />
        <Generator />
        <Footer />
    </div>
  );
}

export default App;
