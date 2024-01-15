export function logout () {
  localStorage.setItem('isLoggedIn', false);
  return navigateTo('/login'); 
}