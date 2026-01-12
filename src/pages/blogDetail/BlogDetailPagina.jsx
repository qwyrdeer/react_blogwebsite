import './BlogDetailPagina.css';
import {Link, useParams, useNavigate} from "react-router-dom";
import data from '../../constants/data.json'
import {useEffect, useState} from "react";
import {DateConverter as blogDate} from './BlogHelpers.js';

function BlogDetailPagina() {

    const {id}  = useParams();
    const navigate = useNavigate();
    const [blogPost, setBlogPost] = useState('');

    const blogPostDate = blogDate(blogPost.created);

    useEffect(() => {
        const foundBlog = data.find(
            blog => blog.id === Number(id)
        );

        if (!foundBlog) {
            navigate("*", {replace: true});
            return;
        }

        setBlogPost(foundBlog);
    }, [id]);


return (
  <>
      <div>
        <h1>{blogPost.title}</h1> <h3>{blogPost.readTime} minuten</h3>
        <h2>{blogPost.subtitle}</h2>
        <h3>Geschreven door {blogPost.author} op {blogPostDate}</h3>
        <p>{blogPost.content}</p>
        <p> {blogPost.comments} reacties - {blogPost.shares} keer gedeeld</p>

      <Link to="/alle-blogs">Terug naar de overzichtspagina</Link>
      </div>
  </>
);
}

export default BlogDetailPagina;
