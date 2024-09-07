import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Pages/Login'
/*import Recuperar from './Pages/Recuperar'*/
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)

