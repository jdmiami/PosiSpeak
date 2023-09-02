import React from 'react';
import { Grommet } from 'grommet';
import SplashScreen from './components/SplashScreen';
import 'typeface-pacifico';  // Import the font
import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#ff4081', // Pink pastel
    },
    font: {
      family: 'Pacifico', // Updated to Pacifico
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <SplashScreen />
    </Grommet>
  );
}

export default App;
