export default async function fetchUser () {
  return await fetch('https://dummyjson.com/users/5')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
  
    return data
  })
  .catch(error => {
    // Handle any errors during the fetch
    console.error('Fetch error:', error);
  });
}

