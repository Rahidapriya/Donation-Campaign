/* eslint-disable react/prop-types */

import AllCards from './AllCards';
import FilterCard from './FilterCard';

const Cards = ({ cards, searchData }) => {
  
  return (
    <div className="py-7">
     
      {searchData === '' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <AllCards key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
          cards
            .filter((val ) =>
            val.category.toLowerCase().includes(searchData.toLowerCase())).map((val) => (
             
              <FilterCard key={val.id} card={val} />
            ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
