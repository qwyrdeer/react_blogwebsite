import './BlogHomePreview.css';
import {Link} from "react-router-dom";

function BlogHomePreview({postId, blogTitle, blogAuthor, amountComments, amountShares}) {

return (
  <>
      <div className="titelAlleBlogs">
          <Link to={`/blog/${postId}`} key={postId}>{blogTitle}</Link> <span>door: {blogAuthor}</span>
          <p>{amountComments} reacties, {amountShares} shares</p>
      </div>
  </>
);
}

export default BlogHomePreview;
