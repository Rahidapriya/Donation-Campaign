

const DonationCard = ({card}) => {
    const { id, cover_image,donate_image, title, category, description, price, bg_color, text_color, bg_btn } = card || {};
   

    const textStyle = {
        color: `${text_color}`, // Default to black if text_color is not specified
    };
    const catBgStyle = {
        background: `${bg_btn}`,
    };
    const cardBgStyle = {
        background: `${bg_color}`,
    };
    const detailsbtn={
        background:`${text_color}`
    }
    return (
        <div className="" >
            <div style={cardBgStyle} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={donate_image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 style={{ ...textStyle, ...catBgStyle }} className="mb-4  py-4 px-6 badge font-sans text-base font-semibold uppercase  ">
      {category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p style={textStyle}  className=" font-bold mb-8 block font-sans text-base  leading-relaxed text-gray-700 antialiased">
      {price}
    </p>
    <a className="inline-block" href="#">
    <button style={detailsbtn}
  className=' flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
  type="button"
>
  View Details
</button>

    </a>
  </div>
</div>
        </div>
    );
};

export default DonationCard;