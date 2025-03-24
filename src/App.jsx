import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import OrderCompleted from './pages/OrderCompleted'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationC from './Components/Navbar/navbar'
import { useAuth } from './Context/Authentication.context'
import NotFound from './pages/NotFound'


function App() {
  const { loggedIn } = useAuth();
  return (
    <div className='h-full'>
      {loggedIn && <NavigationC />}
      <Routes>
        {!loggedIn ? <>
          <Route path='/' Component={() => <Login />} />
          <Route path='/signup' Component={() => <Signup />} />
          </> : <>
          <Route path='/shop' Component={() => <Shop />} />
          <Route path='/Cart' Component={() => <Cart />} />
          <Route path='/orders' Component={() => <Orders />} />
          <Route path='/settings' Component={() => <Settings />} />
          <Route path='/orderplaced' Component={() => <OrderCompleted />} />
        </>}
        <Route path='*' Component={() => <NotFound />} />
      </Routes>
    </div>
  )
}

export default App
