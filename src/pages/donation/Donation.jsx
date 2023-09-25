import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import Statistics from "../statistics/Statistics";


const Donation = () => {
    const [donation,setDonation]=useState([])
    const [noDataFound,setNoDataFound]=useState("")
    const [isShow,setIsShow]=useState(false);
    useEffect(()=>{
        const donationItems=JSON.parse(localStorage.getItem('donation'))
        if(donationItems){
            setDonation(donationItems)
        }
        else{
                            setNoDataFound("No data Found")
        }

    },[])
    
    return (
        <div >
          {
            noDataFound? <p className="h-[80vh] flex justify-center items-center">{noDataFound}</p>:
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                     isShow? donation.map(card=>(<DonationCard key={card.id} card={card}></DonationCard>)):
                     donation.slice(0,4).map(card=>(
                        <DonationCard key={card.id} card={card}></DonationCard>
                     ))
                }
            </div>}

          {
            donation.length>4 && <button onClick={()=>setIsShow(!isShow)} className="bg-green-400 mx-auto block px-5 rounded-lg my-12 py-2 text-white">{!isShow?'See More':'See Less'}</button>

          }
          {/* <Statistics donation={donation}></Statistics> */}
           
          
        
        </div>
    );
};

export default Donation;