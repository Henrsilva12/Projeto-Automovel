import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login/Index'
import Home from './Pages/Home'
import PrivateRoute from './PrivateRoute'
import RecoverPassword from './Pages/Recuperar/indexRec'
import Register from './Pages/Nova/IndexNova'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/home',
    element:
    (
      <PrivateRoute>
        <Home/>
      </PrivateRoute>
    )
  },
  {
    path: '/recover_password',
    element: <RecoverPassword/>
  },
  {
    path: '/register',
    element: <Register/>
  }
]);

export {router};