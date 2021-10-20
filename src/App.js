import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Componenets/Home/Home';
import Header from './Componenets/Header/Header';
import Footer from './Componenets/Footer/Footer';
import Services from './Componenets/Services/Services';
import NotFound from './Componenets/NotFound/NotFound';
import Login from './Componenets/Login/Login';
import PrivateRoute from './Componenets/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Shop from './Componenets/Shop/Shop';
import ContuctUs from './Componenets/Contuctus/ContuctUs';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path='/services'>
           <Services></Services>
         </PrivateRoute>
         <PrivateRoute path='/shop'>
           <Shop></Shop>
         </PrivateRoute>
         <Route path='/contuct'>
           <ContuctUs></ContuctUs>
         </Route>
         <Route path='/login'>
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
