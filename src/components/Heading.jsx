
const Heading = ({title, subtitle}) => {
    return (
        <div className="w-10/12 mx-auto my-7">
            <h1 className="text-center text-3xl">{title}</h1>
            <p className="text-center text-xl text-gray-500 font-tine">{subtitle}</p>
        </div>
    );
};

export default Heading;