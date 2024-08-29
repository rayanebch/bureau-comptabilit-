import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './sections/Page1';
import Page2 from './sections/Page2';
import Page3 from './sections/Page3';
import Page4 from './sections/Page4';
import Services from './sections/Services';
import { Nav } from './components';

const App = () => (
  <Router>
    <div className="font-montserrat">
      <Nav />
      <Routes>
        <Route path="/" element={<>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </>} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  </Router>
);

export default App;
