import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login/Index'
import Home from './Pages/Home/Index'
//import PrivateRoute from './PrivateRoute'
import RecoverPassword from './Pages/Recuperar/Index'
import NovaSenha from './Pages/NovaSenha/Index'
import Cadastro from './Pages/Cadastro/Index'
import Cadastro2 from './Pages/Cadastro2/Index'
import Cadastro3 from './Pages/Cadastro3/Index'
import Reservas from './Pages/Reservas/Index'
import Consultar from './Pages/Consultar/Index'


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/home',
    element: <Home />,
  },
  /*
    {
      path: '/home',
      element:  
      ( 
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
      ) 
    },
    */
  {
    path: '/recover_password',
    element: <RecoverPassword />
  },
  {
    path: '/novaSenha',
    element: <NovaSenha />
  },

  {
    path: '/register',
    element: <Cadastro />
  },
  {
    path: '/register2',
    element: <Cadastro2 />
  },
  {
    path: '/register3',
    element: <Cadastro3 />
  },
  {
    path: '/reservar',
    element: <Reservas />
  },
  {
    path: '/consultar',
    element: <Consultar />
  }

]);

export { router };