import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePagina from "./pages/homePagina/HomePagina.jsx";
import AlleBlogs from "./pages/allePosts/AlleBlogs.jsx";
import BlogMaken from "./pages/postMaken/BlogMaken.jsx";
import PaginaNietGevonden from "./pages/404pagina/PaginaNietGevonden.jsx";
import TopMenu from "./components/topMenu/TopMenu.jsx";
import BlogDetailPagina from "./pages/blogDetail/BlogDetailPagina.jsx";

function App() {
    return (
        <>
            <TopMenu />
            <Routes>
                <Route path="/" element={<HomePagina/>}/>
                <Route path="/alle-blogs" element={<AlleBlogs/>}/>
                <Route path="/blog-toevoegen" element={<BlogMaken/>}/>
                <Route path="/blog/:id" element={<BlogDetailPagina/>} />
                <Route path="*" element={<PaginaNietGevonden/>}/>
            </Routes>
        </>
    )
}

export default App
