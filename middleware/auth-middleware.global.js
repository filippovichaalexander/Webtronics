function checkUser() {
  if (process.client) {
    let isAuthenticated = window.localStorage.getItem('isLoggedIn');
    return isAuthenticated === 'true';
  }
  return false; 
}

export default function ({ route, redirect }) {
  if (route && route.path !== '/login' && !checkUser()) {
    return redirect('/login');
  }
}
