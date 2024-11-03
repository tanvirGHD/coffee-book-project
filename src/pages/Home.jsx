import Banner from "../components/Banner";
import Heading from "../components/Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Heading title={'Welcome to Dashboard'} subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>
            <Banner></Banner>
            {/* Heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired category to browse through specific coffees that fit in your taste'}></Heading>
            {/* Categories tab section */}
            {/* Dynamic nested components */}
        </div>
    );
};

export default Home; 