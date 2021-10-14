
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function App() {

  /* initialize state to some home screen */


  return (
    <div className="App">

      <Header />

      { /* wrap body in a router to navigate between pages */ }
      <Body />

      <Footer />

    </div>
  );
}

export default App;
