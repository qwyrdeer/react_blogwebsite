import './BlogMaken.css';
import Button from "../../components/button/Button.jsx";
import Inputfield from "../../components/textfield/Inputfield.jsx";
import {useState} from "react";
import LargeTextField from "../../components/textfield/LargeTextField.jsx";
import DateConverter, {ReadTimeConverter} from "../blogDetail/BlogHelpers.js";
import {useNavigate} from "react-router-dom";

function BlogMaken() {

    const [blogTitle, setBlogTitle] = useState ("");
    const [blogSubtitle, setBlogSubtitle] = useState("");
    const [blogFirstNameAuthor, setBlogFirstNameAuthor] = useState("");
    const [blogLastNameAuthor, setBlogLastNameAuthor] = useState("");
    const [blogText, setBlogText] = useState("");
    const [blogShares, setBlogShares] = useState(0);
    const [blogComments, setBlogComments] = useState(0);
    const [blogTimestamp, setBlogTimestamp] = useState(new Date());
    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault()
        console.log("Blog title: " + blogTitle)
        console.log("Blog subtitle: " + blogSubtitle)
        console.log("Blog author: " + blogFirstNameAuthor + ' ' + blogLastNameAuthor)
        console.log("Blog title: " + blogText)
        console.log("Blog shares: " + blogShares)
        console.log("Blog comments: " + blogComments)
        console.log("Blog published: " + DateConverter(blogTimestamp))
        console.log("Blog readtime: " + ReadTimeConverter(blogText) + " minute")
        navigate("/alle-blogs");
    }

    return (
        <>
            <h1>blog maken</h1>
            <form onSubmit={sendForm}>
                <Inputfield
                    fieldName="Titel van de blog"
                    fieldData="title"
                    fieldType="text"
                    textValue={blogTitle}
                    setTextValue={setBlogTitle}/>
                <Inputfield
                    fieldName="Subtitel"
                    fieldData="title"
                    fieldType="text"
                    textValue={blogSubtitle}
                    setTextValue={setBlogSubtitle}/>
                <Inputfield
                    fieldName="Voornaam"
                    fieldData="title"
                    fieldType="text"
                    textValue={blogFirstNameAuthor}
                    setTextValue={setBlogFirstNameAuthor}/>
                <Inputfield
                    fieldName="Achternaam"
                    fieldData="title"
                    fieldType="text"
                    textValue={blogLastNameAuthor}
                    setTextValue={setBlogLastNameAuthor}/>

{/*// min max toevoegen*/}

                <LargeTextField
                    fieldName="Blog"
                    fieldData="content"
                    sizeInRows="10"
                    textValue={blogText}
                    setTextValue={setBlogText}
                />

                <Button
                    type="submit"
                    buttonName="verzenden"
                />

            </form>
        </>
    );
}

export default BlogMaken;
