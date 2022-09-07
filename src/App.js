import './App.css';
import Login from './component1/Login' ;
import Profile from './component1/Profile';
import Addproduct from './component2/Addproduct' ;
import View from './component2/View';

function App() {
  return (
    <div className = "App">
      <Profile />
      <Login />
      <Addproduct />
      <View />
    </div>
  );
}

export default App;
