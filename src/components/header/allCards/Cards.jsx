/* eslint-disable react/prop-types */

import AllCards from './AllCards';

const Cards = ({cards}) => {
        console.log("this:",cards);
    return (
        <div className="py-7">

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards?.map(card=><AllCards key={card.id} card={card}></AllCards>)
            }
          </div>
        </div>
    );
};

export default Cards;