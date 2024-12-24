import "./Titlecards.css"
import cards_data from "../../Assets/cards/Cards_data"
import { useEffect, useRef } from "react";

const Titlecards = ({title, category}) => {

    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=> {
        cardsRef.current.addEventListener("wheel", handleWheel)
    }, [])

    return(
        <div className="title-cards">
            <h2>{title ? title : "Beliebt auf Netflix"}</h2>
            <div className="card-liste" ref={cardsRef}>
                {cards_data.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={card.image}></img>
                        <p>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Titlecards