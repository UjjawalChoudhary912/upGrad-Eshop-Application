import logo from './logo.svg';
import './App.css';
import Navbar from './common/Navbar';
import useAuthentication from './hooks/useAuthentication';
import useServices from './hooks/useServices';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <useAuthentication/>
      <useServices/>
    </div>
  );
}

export default App;
