import "./Player.css"
import BackArrowIcon from "../../Assets/back_arrow_icon.png"
import { useEffect, useState } from "react";

const Player = () => {

    const [apiPlayer, SetApiPlayer] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    });

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGY5ZDA5OTlhODkwNDUyNDgxYjg2MjExNmU5MTFjOSIsIm5iZiI6MTczNTA3MTQ4NS40NTcsInN1YiI6IjY3NmIxNmZkZmRhYTdjMjU0OWE5ZjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bWaMzcq8t8FpHU8eot9uqTektxD3UJRtknfePscX0g'
        }
      };
    
      useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/1241982/videos?language=en-US', options)
        .then(res => res.json())
        .then(res => SetApiPlayer(res.results[0]))
        .catch(err => console.error(err));
      },[])

    return(
        <div className="player">
            <img src={BackArrowIcon} alt=""></img>
            <iframe width="90%" height="90%" 
            src={`https://www.youtube.com/embed/${apiPlayer.key}`}
            title="trailer" frameBorder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiPlayer.published_at.slice(0,10)}</p>
                <p>{apiPlayer.name}</p>
                <p>{apiPlayer.type}</p>
            </div>
        </div>
    );
}

export default Player