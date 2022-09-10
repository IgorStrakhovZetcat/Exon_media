

import { useEffect, useState } from 'react'

import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, []);


  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }
  return <div>
    <Header windowSize={windowSize}/>

    <div>
      <MainPage windowSize={windowSize}/>
    </div>

  </div>
}

export default App;
