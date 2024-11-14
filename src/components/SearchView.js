import Hero from "./Hero";

// TMDB API KEY = e5e9c6140ed6032b70bcb8ee7ba8da4d
/* Example link for Movie seraches = curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1' \
     --header 'Authorization: Bearer e5e9c6140ed6032b70bcb8ee7ba8da4d' \
     --header 'accept: application/json'
*/

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  console.log(searchResults + " are the results");
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
