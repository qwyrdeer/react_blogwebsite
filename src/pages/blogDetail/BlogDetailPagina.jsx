import './BlogDetailPagina.css';
import {Link, useParams} from "react-router-dom";

function BlogDetailPagina( ) {
    const { id } = useParams();
return (
  <>
     <h1>{Title}</h1> <h3>({ReadTime})</h3>
      <h2>{Subtitle}</h2>
      <h3>Geschreven door {bloggername} op {datum}</h3>
      <p>{BlogPost}</p>
      <p> {aantalReacties} 12 reacties - {aantalShares} keer gedeeld</p>

      <Link to="/alle-blogs">Terug naar de overzichtspagina</Link>
  </>
);
}
export default BlogDetailPagina;
