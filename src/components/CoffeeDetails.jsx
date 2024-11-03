import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites} from "../utils";

const CoffeeDetails = () => {

    const data =useLoaderData()
    const {id} = useParams();
    const [coffee, setCoffee] = useState({})
    const {name, image, category, origin, type, rating, popularity,description} = coffee;

    //handleFavorite btn click
    const handleFavorite = coffee => {
        addFavorite(coffee)
        setFavorite(true)
        
    }

    const [isFavorite, setFavorite ]= useState(false)
    useEffect(()=> {
        const singleData = data.find(coffee=> coffee.id == id);
        setCoffee(singleData)
        const favorites = getAllFavorites()
        const isExist = favorites.find(item => item.id == singleData.id)
        if(isExist){
            setFavorite(true)
        }

    },[data, id])

    return (
        <div className="w-11/12 mx-auto space-y-3 border rounded-xl p-4">
            <p className="text-4xl font-tine">{description}</p>
            <img  className="rounded-lg md:h-[440px] h-[250px] w-full" src={image} alt="" />
            <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Name: {name}</p>
            <button 
            disabled={isFavorite}
             onClick={ () => handleFavorite(coffee)} className="btn btn-warning">Add Favorite</button>
            </div>
            <p> Category: {category}</p>
            <p> Origin: {origin}</p>
            <p> Type: {type}</p>
            <p> Id: {id}</p>
            <p> Rating: {rating}</p>
            <p>Popularity: {popularity}</p>
        </div>
    );
};

export default CoffeeDetails;