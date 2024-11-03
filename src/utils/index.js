//get all coffees from local storage

import toast from "react-hot-toast";

const getAllFavorites =()=> {
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }else{
        console.log([]);
        return[]
    }
}


// add a coffee to local storage
const addFavorite = (coffee) => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist)return toast.error('Coffee Already exists!!');
    
    // get all previously saved coffee data
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully added!');
    
}



// remove coffee from local storage



export {addFavorite, getAllFavorites}