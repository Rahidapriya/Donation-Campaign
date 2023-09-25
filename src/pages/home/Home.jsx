import { useLoaderData } from "react-router-dom";

import Banner from "../../components/header/banner/Banner";
import Cards from "../../components/header/allCards/Cards";
import { useState } from "react";


const Home = () => {
    const [searchData, setSearchData] = useState(''); // State to store search data

  // Callback function to receive search data from Banner
  const handleSearchData = (data) => {
    setSearchData(data);
  };
    const cards =useLoaderData();
    console.log("homeSearch:",searchData);
    return (
        <div>
            
            <Banner  onSearch={handleSearchData}></Banner>
            <Cards cards={cards} searchData={searchData} ></Cards>
           
        </div>
    );
};

export default Home;