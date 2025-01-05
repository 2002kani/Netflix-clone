import "./Titlecards.css"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Titlecards = ({title, category}) => {

    const cardsRef = useRef();
    const [apiData, SetApiData] = useState([]);

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5002/movies/${category || "now_playing"}`);
                const data = await response.json();
                SetApiData(data);
            } catch (err) {
                console.error("Fehler beim Laden der Daten:", err);
            }
        };
    
        fetchData();
    
        const currentRef = cardsRef.current;
        currentRef.addEventListener("wheel", handleWheel);
    
        // Cleanup-Funktion
        return () => {
            currentRef.removeEventListener("wheel", handleWheel);
        };
    }, [category]);

    return (
        <div className="title-cards">
            <h2>{title ? title : "Beliebt auf Netflix"}</h2>
            <div className="card-liste" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    );
}

export default Titlecards;