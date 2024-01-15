export function checkUser () {
  if(process.client) { 
    let isAuthenticated = window.localStorage.getItem('isLoggedIn');

    if(isAuthenticated) {
      return navigateTo('/');
    }

    return navigateTo('/login')
  } 
}