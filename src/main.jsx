import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import ProductsContextProvider from './Context/Products.context.jsx'
import AuthenticationContextProvider from './Context/Authentication.context.jsx'
import RestaurantDetailsContextProvider from './Context/RestaurantDetails.jsx'
import RestaurantsProvider from './Context/Restaurants.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <AuthenticationContextProvider>
      <RestaurantsProvider>
        <ProductsContextProvider>
          <RestaurantDetailsContextProvider>
            <App />
          </RestaurantDetailsContextProvider>
        </ProductsContextProvider>
      </RestaurantsProvider>
    </AuthenticationContextProvider>
  </Router>,
)
