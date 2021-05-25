import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cf519c2f-0be6-47b0-9d84-07de5d7e28d2',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4, isFriends = 'false') {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}&friend=${isFriends}`,
    );
  },

  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete('auth/login');
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  setStatus(status) {
    return instance.put('profile/status', { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  saveProfile(profile) {
    return instance.put('profile', profile);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};
