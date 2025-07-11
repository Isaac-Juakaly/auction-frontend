export function saveToken(token: string) {
  localStorage.setItem('token', token);
}

export function getToken(): string | null {
  return localStorage.getItem('token');
}

export function removeToken() {
  localStorage.removeItem('token');
}


export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  window.location.href = '/login';
}