
import './App.css';
import Headers from './components/Headers'
import Footer from './components/Footer'
import Restaurantlist from './components/Restaurantlist';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant';

function App() {
  return (
    <div className="App">

    <Router>

    
      <header className="App-header">
      <Headers/>
        {/* <h2>Restaurant Application</h2> */}

        <Routes>
        <Route path='/' element={<Restaurantlist/>}/>
        <Route path='/viewRestaurant/:id' element={<Viewrestaurant/>}></Route>
        </Routes>
      </header>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
