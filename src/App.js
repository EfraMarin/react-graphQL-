import './App.css';
import { useQuery, gql } from "@apollo/client";

function App() {

  const GET_LOCATIONS = gql`
  query {
    characters{
      results{
        id name type species image
      }
    }
  }
`;

  function DisplayCharacters() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(data.characters.results);

    return data.characters.results.map(({ name, species, id, image }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img width="200" height="200" alt="character-reference" src={`${image}`} />
        <br />
        <b>About this character:</b>
        <p>{species}</p>
        <br />
      </div>
    ));
  }

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <div className='character-container'>
        <DisplayCharacters />
      </div>
    </div>
  );
}

export default App;
