import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ============ AUTHENTICATION ============

export const authAPI = {
  register: (data) => api.post('/users/register', data),
  login: (data) => api.post('/users/login', data),
  logout: () => api.post('/users/logout'),
  getProfile: () => api.get('/users/me'),
  updateProfile: (data) => api.put('/users/me', data),
  getHistory: (page = 1) => api.get(`/users/me/history?page=${page}`),
};

// ============ GOALS ============

export const goalsAPI = {
  create: (data) => api.post('/goals', data),
  list: (filters = {}) => api.get('/goals', { params: filters }),
  get: (id) => api.get(`/goals/${id}`),
  update: (id, data) => api.put(`/goals/${id}`, data),
  delete: (id) => api.delete(`/goals/${id}`),
};

// ============ PROJECTS ============

export const projectsAPI = {
  create: (data) => api.post('/projects', data),
  list: (filters = {}) => api.get('/projects', { params: filters }),
  get: (id) => api.get(`/projects/${id}`),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// ============ MENTORSHIPS ============

export const mentorshipsAPI = {
  create: (data) => api.post('/mentorships', data),
  list: (filters = {}) => api.get('/mentorships', { params: filters }),
  get: (id) => api.get(`/mentorships/${id}`),
  update: (id, data) => api.put(`/mentorships/${id}`, data),
  delete: (id) => api.delete(`/mentorships/${id}`),
};

// ============ IMPROVEMENTS ============

export const improvementsAPI = {
  create: (data) => api.post('/improvements', data),
  list: (filters = {}) => api.get('/improvements', { params: filters }),
  get: (id) => api.get(`/improvements/${id}`),
  update: (id, data) => api.put(`/improvements/${id}`, data),
  delete: (id) => api.delete(`/improvements/${id}`),
};

// ============ LEARNING ============

export const learningAPI = {
  create: (data) => api.post('/learning', data),
  list: (filters = {}) => api.get('/learning', { params: filters }),
  get: (id) => api.get(`/learning/${id}`),
  update: (id, data) => api.put(`/learning/${id}`, data),
  delete: (id) => api.delete(`/learning/${id}`),
};

// ============ NOTES ============

export const notesAPI = {
  create: (data) => api.post('/notes', data),
  list: (filters = {}) => api.get('/notes', { params: filters }),
  get: (id) => api.get(`/notes/${id}`),
  update: (id, data) => api.put(`/notes/${id}`, data),
  delete: (id) => api.delete(`/notes/${id}`),
};

// ============ DASHBOARD ============

export const dashboardAPI = {
  goalsSummary: () => api.get('/dashboard/goals-summary'),
  progressGraph: () => api.get('/dashboard/progress-graph'),
  filter: (filters) => api.get('/dashboard/filter', { params: filters }),
};

export default api;
