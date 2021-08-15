
import Header from './MyComponents/Header'
import Home from './Redux/Home'
import Input from './MyComponents/Input'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Deparment from './MyComponents/Deparment'
import Employee from './MyComponents/Employee'
import Login from './LoiginComponent/Login'
import FormValidations from './LoiginComponent/Login'
function App() {
  return (
    <div className="App">
      {/* <Deparment/> */}
      <BrowserRouter>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/depar' component={Deparment}/>
        <Route path = '/empl' component = {Employee}/>
      </Switch>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      <FormValidations/>
    </div>
  );
}

export default App;
