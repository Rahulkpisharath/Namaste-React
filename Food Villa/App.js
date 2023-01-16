import './src/assets/scss/index.scss';
// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import { Footer } from './src/components/Footer';
import Body from './src/components/Body';


const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<Applayout />);
