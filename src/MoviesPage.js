import { Link } from "react-router-dom";

function MoviesPage() {
  return (
    <div>
      <h1>Movies</h1>
      <p>Here are some of our featured movies:</p>
      <ul>
        <li>The Godfather</li>
        <li>Star Wars</li>
        <li>The Shawshank Redemption</li>
      </ul>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

export default MoviesPage;
