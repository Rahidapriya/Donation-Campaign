/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllCards = ({ card }) => {
    const { id, cover_image, title, category, description, price, bg_color, text_color, bg_btn } = card || {};

    // Define the textStyle object with dynamic text color
    const textStyle = {
        color: `${text_color}`, // Default to black if text_color is not specified
    };
    const catBgStyle = {
        background: `${bg_btn}`,
    };
    const cardBgStyle = {
        background: `${bg_color}`,
    };
    

    return (
        <div className="">
            <Link to={`/donate/${id}`}>
            <div className="card  h-80  shadow-xl" style={cardBgStyle}>
                <figure><img src={cover_image} className="w-full" alt={title} /></figure>
                <div className="card-body">
                    {/* Apply the dynamic text color using inline CSS */}
                    <div className="px-5 py-4 badge" style={catBgStyle}>
                        {category}
                    </div>
                    <h2 className="card-title" style={textStyle}>
                        {title}
                    </h2>
                    {/* <p>{price}</p> */}
                </div>
            </div>
            </Link>
        </div>
    );
};

export default AllCards;
