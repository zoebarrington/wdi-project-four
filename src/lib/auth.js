export function saveToken(token) {
  localStorage.setItem('artwork-token', token);
}

export function getToken() {
  return localStorage.getItem('artwork-token');
}

export function decodeToken() {
  const token = getToken();
  if (!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function tokenUsername() {
  return decodeToken().username;
}


export function currentUserId() {
  return decodeToken().sub;
}

export function deleteToken() {
  localStorage.removeItem('artwork-token');
}

export function isAuthenticated() {
  return !!getToken();
}

export function authorizationHeader() {
  return {
    headers: { Authorization: 'Bearer ' + getToken() }
  };
}
