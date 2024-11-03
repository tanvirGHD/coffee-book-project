import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();

    //sort data
    const [coffees, setCoffees] = useState(data);
    const handleSort = sortBy => {
        if(sortBy == 'popularity'){
            // sort by popularity
            const sorted = [...data].sort((a,b)=>b.popularity-a.popularity);
            setCoffees(sorted)
        }else if (sortBy == 'rating'){
            //sort by rating
            const sorted = [...data].sort((a,b)=>b.rating-a.rating);
            setCoffees(sorted)
        }
    } 
    return (
        <>
        <div className="md:flex justify-between items-center w-10/12 mx-auto mt-3 mb-8">
            <div className="text-4xl font-thin">Sort Coffee's by Popularity & Rating-> </div>
            <div className="gap-4 flex mt-5">
                <button onClick={ ()=> handleSort('popularity')} className="btn btn-warning">Sort by Popularity (DSC)</button>
                <button onClick={ ()=> handleSort('rating')} className="btn btn-warning">Sort by Rating (ASC)</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-5 mt-3">
            {coffees.map(coffee => (
                <Card key={coffee.id} coffee={coffee} />
                ))}
        </div></>
    );
};

export default Coffees;