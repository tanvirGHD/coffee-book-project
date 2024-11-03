

const Card = ({coffee}) => {
    
    const {name, image, category, origin, type, id, rating, popularity} = coffee || {}
    return (
        <div className="border p-5 rounded-lg space-y-3">
            <img  className="rounded-lg md:h-[280px] h-[200px] w-full" src={image} alt="" />
            <p className="text-2xl font-bold">Name: {name}</p>
            <p> Category: {category}</p>
            <p> Origin: {origin}</p>
            <p> Type: {type}</p>
            <p> Id: {id}</p>
            <p> Rating: {rating}</p>
            <p>Popularity: {popularity}</p>
        </div>
    );
};

export default Card;

