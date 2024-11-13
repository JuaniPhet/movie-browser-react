import Hero from "./Hero";

// TMDB API KEY = e5e9c6140ed6032b70bcb8ee7ba8da4d

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
