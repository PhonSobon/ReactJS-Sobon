import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
      <div>
        <Navbar/>
        <main>
          <Product/>
          <Feedback/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
