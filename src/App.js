import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<Auth/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
