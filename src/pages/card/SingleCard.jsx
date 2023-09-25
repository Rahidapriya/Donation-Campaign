/* eslint-disable react/prop-types */

import'./singleCard.css';
import swal from 'sweetalert';
const SingleCard = ({card}) => {
    const { id, cover_image, title, category, description, price, bg_color, text_color, bg_btn } = card || {};
    const cardBgStyle = {
        background: `${text_color}`,
    };
    const HandleAddToDonation=()=>{
        const addedDonationArray=[];
        const donationItems=JSON.parse(localStorage.getItem('donation'))
        if(!donationItems){
            addedDonationArray.push(card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Good job!", "Donation Successfull!", "success");
        }
        else{
            const isExist=donationItems.find(item=>item.id==id)
            if(!isExist){
                addedDonationArray.push(...donationItems,card)
                localStorage.setItem('donation',JSON.stringify(addedDonationArray))
                swal("Good job!", "Donation Successfull!", "success");
            }
            else{
                swal("Error!", "Donation Already added!", "error");
            }
        }
    }
    return (
        <div className=''>
             <img src={cover_image} alt="cards" className='w-full' />
           <div className="card  image-full">
  
  <div className="card-body pt-4 md:pt-12 bg relative -mt-20 lg:-mt-36">
    
    <div className="card-actions justify-start ">
      <button onClick={HandleAddToDonation} className="btn md:btn-md btn-sm  -mb-20 text-white border-none" style={cardBgStyle}>Donate {price}</button>

    </div>
    
  </div>
  
</div> 
<div className='mt-5'>
<h2 className="card-title text-4xl mb-5">{title}</h2>
    <p>{description}</p>
</div>
        </div>
    );
};

export default SingleCard;