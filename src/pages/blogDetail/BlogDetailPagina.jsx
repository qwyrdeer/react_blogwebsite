import './BlogDetailPagina.css';
import { useParams } from "react-router-dom";

function BlogDetailPagina() {
    const { id } = useParams();
return (
  <>
             <div>Het blog heeft id nummer: {id}</div>
  </>
);
}
export default BlogDetailPagina;
