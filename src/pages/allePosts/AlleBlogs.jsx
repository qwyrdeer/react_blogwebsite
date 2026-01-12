import './AlleBlogs.css';
import data from '../../constants/data.json'
import { useParams } from "react-router-dom";

import BlogHomePreview from "../../components/BlogComponent/BlogHomePreview.jsx";

function AlleBlogs() {

    const { id } = useParams();

return (
  <>
    <h1>alle blogs</h1>

      {data.map((post) => {
          return (
              <BlogHomePreview
                  key={post.id}
              postId={post.id}
              blogTitle={post.title}
              blogAuthor={post.author}
              amountComments={post.comments}
              amountShares={post.shares}/>
          );
      })
      }
  </>
);
}
export default AlleBlogs;
