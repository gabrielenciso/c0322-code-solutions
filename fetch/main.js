fetch('https://pokeapi.co/api/v2/pokemon/4')
  .then(response => {
    if (!response.ok) {
      throw new Error(`error!: ${response.status}`);
    }

    return response.json();
  }).then(response => {
    console.log(response);
  });
