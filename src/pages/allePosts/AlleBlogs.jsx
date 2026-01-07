import './AlleBlogs.css';
import { Link } from 'react-router-dom';

function AlleBlogs() {
return (
  <>
    <h1>alle blogs</h1>

      {/*// map door JSON*/}
      {/*haal alle posts op*/}
      {/*haal uit elke post: titel, naam, aantal reacties, aantal shares*/}


      <div className="titelAlleBlogs">
          <Link to="/blogs/:id">Title</Link> (name) (Hidden: id = key)
          AANTAL reacties, AANTAL shares
      </div>

  </>
);
}
export default AlleBlogs;
