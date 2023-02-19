import axios from 'axios';

export let randomArray = [];

export async function fetchRandomCoctails(cardPerPage) {
  for (let i = 0; i < cardPerPage; i++) {
    const randomCoctail = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );

    randomArray.push(...randomCoctail.data.drinks);
  }
  return await randomArray;
}
