import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AuthenticationLayout } from './feature/authentication/AuthenticationLayout';

function App() {
  return (
    <div className="app-container bg-light">
      <div className="container pt-4 pb-4">
        <Routes>
          {/* private */}
          {/* <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="users/*" element={<UsersLayout />} />
                    </Route> */}
          {/* public */}
          <Route
            path="account/*"
            element={<AuthenticationLayout />}
          />
          <Route
            path="*"
            element={<Navigate to="/account" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
