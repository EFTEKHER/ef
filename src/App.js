
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Home from './components/Home';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<UserDetails/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
