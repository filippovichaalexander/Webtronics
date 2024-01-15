export default async function fetchTickets () {
  return await fetch('https://dummyjson.com/users/5/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  })
  .then(data => {
    console.log('data', data);
    return data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

