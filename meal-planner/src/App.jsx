import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './login/Login';
import SignUp from './Signup/Signup';
import { Homepage } from './homepage/Homepage';
import ProtectedRoute from './ProtectedRoutes';
import { Navbar } from './navbar/Navbar';
import { Mealplanner } from './Mealplan/Mealplan';
import { Recipe } from './recipe/Recipe';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  const location = useLocation();


  return (
    <div>
      
      <AuthContextProvider>
        {location.pathname !== "/" && location.pathname !== "/signup" && (
          <Navbar />
        )}
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyMealPlan"
            element={
              <ProtectedRoute>
                <Mealplanner/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <ProtectedRoute>
                <Recipe />
              </ProtectedRoute>
            }
          />
        </Routes>
        
      </AuthContextProvider>
    </div>
  );
}

export default App;

   

