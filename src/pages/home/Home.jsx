import { useLoaderData } from "react-router-dom";

import Banner from "../../components/header/banner/Banner";
import Cards from "../../components/header/allCards/Cards";


const Home = () => {
    const cards =useLoaderData();
    console.log(cards);
    return (
        <div>
            
            <Banner></Banner>
            <Cards cards={cards}></Cards>
           
        </div>
    );
};

export default Home;