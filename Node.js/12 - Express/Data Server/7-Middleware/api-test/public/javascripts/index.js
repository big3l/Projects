fetch("https://localhost:5000/api/members")
  .then(response => response.json())
  .then(json => console.log(json));
