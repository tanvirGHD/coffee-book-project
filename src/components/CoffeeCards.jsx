import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const CoffeeCards = () => {
    const data = useLoaderData()
    
    const {category} = useParams();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-5 mt-10">
            {data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)}
        </div>
    );
};

export default CoffeeCards;