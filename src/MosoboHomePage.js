import { Link } from "react-router-dom";

function MosoboHomePage() {
  return (
    <div>
      <h1>Welcome to Mosobo!</h1>
      <p>Here you can browse our collection of movies, songs, and books.</p>
      <p>Use the navigation menu to explore our collection.</p>
      <p>Thank you for visiting Mosobo!</p>
      <Link to="/movies">Browse Movies</Link>
    </div>
  );
}

export default MosoboHomePage;
