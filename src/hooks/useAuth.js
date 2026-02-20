import { useState, useEffect, useCallback } from 'react';
import { authAPI } from '../utils/api';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch current user
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authAPI
        .getProfile()
        .then((response) => {
          setUser(response.data);
          setError(null);
        })
        .catch((err) => {
          localStorage.removeItem('token');
          setUser(null);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      const response = await authAPI.login({ email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao fazer login');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (name, email, password) => {
    try {
      setLoading(true);
      const response = await authAPI.register({ name, email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao registrar');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authAPI.logout();
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};
