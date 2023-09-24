
import Logos from './logo/Logo.png'

const Logo = () => {
    return (
        <div>
            {/* <h1 className='text-xl font-semibold'>Phone Shop</h1> */}
            <img className=" w-40 " src={Logos} alt="" />
        </div>
    );
};

export default Logo;