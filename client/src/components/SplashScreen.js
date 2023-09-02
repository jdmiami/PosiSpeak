import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import './SplashScreen.css';


const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and then set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box align="center" justify="center" fill background="brand">
      <Box
        className={`logo ${loading ? 'rotating' : ''}`}
        align="center"
        justify="center"
        round="full"
        border={{ color: 'white', size: 'medium', style: 'dashed' }}
        width="small"
        height="small"
      >
        <Text size="xxlarge" weight="bold">
          PoSi
        </Text>
      </Box>
    </Box>
  );
};

export default SplashScreen;

