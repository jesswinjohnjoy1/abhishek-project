import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import AddCar from './Admin/AddCar';
import EditCar from './Admin/EditCar';
import ViewCar from './Pages/ViewCar';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Signin' element={<Signin/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:productId' element={<EditCar/>}/>
        <Route exact path='/Dashboard/add' element={< AddCar/>}/>
        <Route exact path='/View/:productId' element={<ViewCar/>}/>
      </Routes>
  );
}

export default App;
