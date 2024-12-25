import "./Titlecards.css"
import cards_data from "../../Assets/cards/Cards_data"
import { useEffect, useRef, useState } from "react";

const Titlecards = ({title, category}) => {

    const cardsRef = useRef();
    const [apiData, SetApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGY5ZDA5OTlhODkwNDUyNDgxYjg2MjExNmU5MTFjOSIsIm5iZiI6MTczNTA3MTQ4NS40NTcsInN1YiI6IjY3NmIxNmZkZmRhYTdjMjU0OWE5ZjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bWaMzcq8t8FpHU8eot9uqTektxD3UJRtknfePscX0g'
        }
      };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=> {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => SetApiData(res.results))
        .catch(err => console.error(err));

        cardsRef.current.addEventListener("wheel", handleWheel)
    }, [])

    return(
        <div className="title-cards">
            <h2>{title ? title : "Beliebt auf Netflix"}</h2>
            <div className="card-liste" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}></img>
                        <p>{card.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Titlecards