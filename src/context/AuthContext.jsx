import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

// Create context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if the user is already logged in (from localStorage)
  useEffect(() => {
    const checkUserAuthentication = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          // In a real application, we would verify the token with the backend
          // For now, we'll fetch user data from localStorage or use a mock API call
          const userData = JSON.parse(localStorage.getItem('user'));
          
          if (userData) {
            setUser(userData);
          } else {
            // If we have a token but no user data, attempt to fetch it
            const response = await api.get('/auth/me');
            setUser(response.data);
          }
        } catch (err) {
          console.error('Error verifying authentication:', err);
          // Clear invalid authentication data
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
      
      setLoading(false);
    };

    checkUserAuthentication();
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call your API
      // Mock implementation for now
      const response = await api.post('/auth/login', { email, password });
      
      // Store token and user data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Update state
      setUser(response.data.user);
      return true;
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Une erreur est survenue pendant la connexion');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.post('/auth/register', userData);
      
      // After registration, automatically log the user in
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      setUser(response.data.user);
      return true;
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || "Une erreur est survenue pendant l'inscription");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.put('/auth/profile', userData);
      
      // Update local storage and state with new user data
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
      return true;
    } catch (err) {
      console.error('Profile update error:', err);
      setError(err.response?.data?.message || 'Une erreur est survenue pendant la mise à jour du profil');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};