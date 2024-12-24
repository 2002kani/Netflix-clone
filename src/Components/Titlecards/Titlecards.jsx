import "./Titlecards.css"
import cards_data from "../../Assets/cards/Cards_data"

const Titlecards = () => {
    return(
        <div className="title-cards">
            <h2> Beliebt auf Netflix </h2>
            <div className="card-liste">
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