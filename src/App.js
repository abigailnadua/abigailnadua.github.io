import React from 'react';
import { theme } from './theme';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button icon={<Notification />} onClick={() => {}}></Button>
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
