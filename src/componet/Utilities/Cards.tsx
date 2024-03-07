import Card from "./Card";

function Cards({ cards }) {
    return <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
        {cards.map((card: any) => (
            <Card card={card} />
        ))}
    </div>
}

export default Cards;