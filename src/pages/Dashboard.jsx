
import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFavorites } from '../utils';
import Card from '../components/Card';


const Dashboard = () => {


    const [coffees, setCoffees] = useState([])
    useEffect(()=> {
        const favorites = getAllFavorites();
        setCoffees(favorites)

    },[])
    return (
        <div className='w-10/12 mx-auto'>
            <Heading title={'Welcome to Dashboard'} subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {coffees.map(coffee => (
                <Card key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;