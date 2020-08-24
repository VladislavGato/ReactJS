import React from 'react';

import Header from './components/base/Header';
import Main from './components/base/Main';
import FeaturesSection from './components/sections/FeaturesSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/base/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FeaturesSection / >
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;