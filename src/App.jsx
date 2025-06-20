

import About from './About'
import './App.css'
import Choose from './Choose';
import Collection from './collection';
import Content from './Content';
import Grid from './grid';
import Header from './Header';
import Heading from './Heading';

function App() {
  return (
    <>
      <Header />
      <div className='image'>
        {/* <About /> */}
        < Heading />
        < Grid />
        < Collection />
        <Content />
        <div className='hello'></div>
        < Choose />

      </div>
    </>
  );
}

export default App
