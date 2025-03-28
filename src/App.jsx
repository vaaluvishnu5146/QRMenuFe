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
import CreateProduct from './pages/CreateProduct'
import Restaurants from './pages/Restaurants'
import RestaurantListing from './pages/RestaurantListing'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import VerifyToken from './pages/ForgotPassword/VerifyToken'
import SetNewPassword from './pages/ForgotPassword/SetNewPassword'


function App() {
  const { loggedIn, token } = useAuth();

  return (
    <div className='h-full'>
      {!loggedIn && <Routes>
          <>
          <Route path='/' Component={() => <Login />} />
          <Route path='/signup' Component={() => <Signup />} />
          <Route path='/forgotpassword' Component={() => <ForgotPassword />} />
          <Route path='/verifytoken' Component={() => <VerifyToken />} />
          <Route path='/createNewPassword' Component={() => <SetNewPassword />} />
          </> 
      </Routes>}
      {loggedIn && <>
      <NavigationC />
      <Routes>
        <>
          {token && token.role === "customer" && <Route path='/' Component={() => <Restaurants />} />}
          {token && token.role === "customer" && <Route path='/restaurant/:restaurantId' Component={() => <RestaurantListing />} />}
          <Route path='/shop' Component={() => <Shop />} />
          <Route path='/Cart' Component={() => <Cart />} />
          <Route path='/orders' Component={() => <Orders />} />
          {token && token.role === "admin" && <Route path='/settings' Component={() => <Settings />} />}
          {token && token.role === "admin" && <Route path='/createProduct' Component={() => <CreateProduct />} />}
          <Route path='/orderplaced' Component={() => <OrderCompleted />} />
        </>
        <Route path='*' Component={() => <NotFound />} />
      </Routes>
      </>}
    </div>
  )
}

export default App
