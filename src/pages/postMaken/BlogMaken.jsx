import './BlogMaken.css';

// Je mag het formulier bouwen op de standaard manier (controlled components met state) of met React Hook Form.

// Alle velden moeten verplicht worden ingevuld. De blogpost moet minimaal 300 en maximaal 2000 karakters lang zijn.
// Als er niet aan deze voorwaarden is voldaan, kan de post niet worden verzonden.


// Wanneer de gebruiker op 'verzenden' drukt, worden deze gegevens in de console gelogd.
// Deze informatie verreik je vervolgens zelf met:

// De hoeveelheid shares en comments (allebei 0)
// Een created property met daarin een ISO-timestamp van het moment dat de gebruiker op de knop heeft drukt
// De readTime in minuten. (ReadTimeHelperfunctie)

// Wanneer de gebruiker alle juiste gegevens heeft ingevuld en we deze informatie in de console hebben gelogd,
// willen we de gebruiker automatisch doorsturen naar de overzichtspagina. Dat is natuurlijk niet
// zo gebruiksvriendelijk zonder eerst een succesmelding te tonen, maar daar maken we ons later druk om!

function BlogMaken() {
    return (
        <>
            <h1>blog maken</h1>
            <form action="">
                <input type="text"/>Titel
                <input type="text"/>Subtitel
                <input type="text"/>Auteur
                <input type="text"/>Bericht
                <button>verzenden</button>
            </form>
        </>
    );
}

export default BlogMaken;
