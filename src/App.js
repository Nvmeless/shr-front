


import './App.css';
import Menu from './components/organisms/Menu';
import { ThemeProvider } from 'styled-components';
import getTheme from './theme/getTheme'
import Playlist from './components/organisms/Playlist';
function App() {
  return (
    <>
    <ThemeProvider theme={getTheme()}>
      <Menu test="lol" toto="lal">Hey</Menu>
      <Playlist></Playlist>
    </ThemeProvider>
    </>
  );
}

export default App;
