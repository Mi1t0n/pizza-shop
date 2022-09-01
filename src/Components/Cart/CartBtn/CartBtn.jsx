import cart from '../../../assets/cart.svg';
import {NavLink} from 'react-router-dom';

const CartBtn = ({allPrice, allCount}) => {
    return (
        <NavLink className=" w-fit h-[50px] bg-[#FE5F1E] rounded-[30px] grid grid-cols-[1fr,80px]
                 text-[#FFFFFF] font-[700] text-[16px] justify-items-center items-center  "
                 to="/cart"
        >
            <p className="text-center border-r-[1px] border-[#FFFFFF]/[0.25] pr-[13px] pl-[23px]">
                {`${allPrice.toLocaleString()}  ₽`}
            </p>
            <div className="grid grid-cols-[16px,1fr] justify-items-center items-center   ">
                <img src={cart} className="w-[16px]"/>
                <p className="pl-[8px]">{allCount}</p>
            </div>
        </NavLink>
    );
};

export default CartBtn;