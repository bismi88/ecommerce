import About from './About'
import './App.css'
import Contact from './Contact';
import Heading from './Heading';
import Content from './Content';
import Collection from './Collection';
import Grid from './Grid';
import Choose from './Choose';
// import Rings from './Rings';

function App() {
  return (
    <>
      <div>
        <Heading />
        <Grid />
        <Collection />
        <Content />
        <Choose />
        {/* <Rings /> */}
     
      </div>
    </>
  );

}

export default App
