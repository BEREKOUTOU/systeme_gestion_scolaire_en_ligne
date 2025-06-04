import axios from 'axios';
import { API_URL, API_TIMEOUT, API_HEADERS } from './constants';

//import { apiService } from '../utils/api';

// Example usage
//const results = await apiService.academic.getResults('Spring2025');
//const profile = await apiService.user.getProfile();

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle common error cases
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear auth and redirect to login
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden
          console.error('Access forbidden');
          break;
        case 404:
          // Not found
          console.error('Resource not found');
          break;
        case 500:
          // Server error
          console.error('Server error');
          break;
        default:
          console.error('API error:', error.response.data);
      }
    } else if (error.request) {
      // Request made but no response
      console.error('No response from server');
    } else {
      // Error in request configuration
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Auth endpoints
  auth: {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout'),
    resetPassword: (email) => api.post('/auth/reset-password', { email }),
  },

  // User endpoints
  user: {
    getProfile: () => api.get('/user/profile'),
    updateProfile: (data) => api.put('/user/profile', data),
    changePassword: (data) => api.post('/user/change-password', data),
  },

  // Academic endpoints
  academic: {
    getResults: (semester) => api.get('/academic/results', { params: { semester } }),
    getReportCard: (year) => api.get('/academic/report-card', { params: { year } }),
    getCourses: () => api.get('/academic/courses'),
  },

  // Registration endpoints
  registration: {
    submit: (data) => api.post('/registration/submit', data),
    getStatus: () => api.get('/registration/status'),
    uploadDocument: (type, file) => {
      const formData = new FormData();
      formData.append('file', file);
      return api.post(`/registration/documents/${type}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
  },

  // Billing endpoints
  billing: {
    getInvoices: () => api.get('/billing/invoices'),
    getInvoiceDetails: (id) => api.get(`/billing/invoices/${id}`),
    processPayment: (invoiceId, paymentData) => 
      api.post(`/billing/invoices/${invoiceId}/pay`, paymentData),
  },
};

export default api;