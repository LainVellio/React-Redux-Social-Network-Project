import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cf519c2f-0be6-47b0-9d84-07de5d7e28d2',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance.delete('auth/login');
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  },
};
