import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken');

  return isAuthenticated ? children : <Navigate to="/" />;
  
}

export default PrivateRoute;