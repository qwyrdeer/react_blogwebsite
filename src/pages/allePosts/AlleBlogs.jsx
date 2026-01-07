import './AlleBlogs.css';
import { Link } from 'react-router-dom';

function AlleBlogs() {
return (
  <>
    <h1>alle blogs</h1>

      // map door JSON
      <div className="titelAlleBlogs">
          <Link to="/blogs/:id">Title </Link> (name)
          AANTAL reacties, AANTAL shares
      </div>

  </>
);
}
export default AlleBlogs;
