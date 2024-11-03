// App.js
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import LoginRoute from './LoginRoute'
import HomeRoute from './HomeRoute'
import ProductsRoute from './ProductsRoute'
import CartRoute from './CartRoute'
import Logout from './Logout'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const jwtToken = Cookies.get('jwt_token')
  return (
    <Route
      {...rest}
      render={props =>
        jwtToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

const App = () => (
  <Router>
    <Switch>
          <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <ProtectedRoute exact path="/products" component={ProductsRoute} />
    <ProtectedRoute exact path="/cart" component={CartRoute} />

    </Switch>
  </Router>
)

export default App
