const recipesAPI = async ({ search, type }, history) => {
  const searchType = type === 'Ingrediente' ? 'filter' : 'search';
  const filter = (type === 'Ingrediente' && 'i')
  || (type === 'Nome' && 's') || (type === 'Primeira letra' && 'f');
  const url = history.includes('bebidas') ? 'thecocktaildb' : 'themealdb';
  const endpoint = await fetch(`https://www.${url}.com/api/json/v1/1/${searchType}.php?${filter}=${search}`);
  const json = await endpoint.json();
  return json;
};

export const getRecipeById = async ({ pathname }) => {
  const [, typeKey, id] = pathname.split('/');
  const type = typeKey === 'bebidas' ? 'thecocktaildb' : 'themealdb';
  const endpoint = await fetch(`https://www.${type}.com/api/json/v1/1/lookup.php?i=${id}`);

  const json = await endpoint.json();
  return json[typeKey === 'bebidas' ? 'drinks' : 'meals'][0];
};

export const getRecomendations = async ({ pathname }) => {
  const endpointRandom = await fetch(`https://www.${pathname.includes('bebidas') ? 'themealdb' : 'thecocktaildb'}.com/api/json/v1/1/search.php?s=`);
  const randomJson = await endpointRandom.json();
  return Object.values(randomJson)[0];
};

export const recipesApiList = async (locationPathName) => {
  const url = locationPathName.includes('bebidas') ? 'thecocktaildb' : 'themealdb';
  const endpoint = `https://www.${url}.com/api/json/v1/1/search.php?s=`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const categoryRecipesApi = async (locationPathName) => {
  const url = locationPathName.includes('bebidas') ? 'thecocktaildb' : 'themealdb';
  const endpoint = `https://www.${url}.com/api/json/v1/1/list.php?c=list`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const recipesByCategoryApi = async (category, locationPathName) => {
  const url = locationPathName.includes('bebidas') ? 'thecocktaildb' : 'themealdb';
  const endpoint = `https://www.${url}.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default recipesAPI;
