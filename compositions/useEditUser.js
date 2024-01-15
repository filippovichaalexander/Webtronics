export default async function editUser (data) {
  return await fetch('https://dummyjson.com/users/5', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      address: {
        city: data.city
      },
      birthDate: data.birthDate
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

