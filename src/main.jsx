import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import ProductsContextProvider from './Context/Products.context.jsx'
import AuthenticationContextProvider from './Context/Authentication.context.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <AuthenticationContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </AuthenticationContextProvider>
  </Router>,
)
