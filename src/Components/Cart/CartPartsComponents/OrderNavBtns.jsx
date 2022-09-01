import {NavLink} from 'react-router-dom';

const OrderNavBtns = () => (
    <div className="flex justify-between ">
        <NavLink to="/" className="rounded-full border-black border-[1px] text-black py-[16px] px-[25px]">
            &lt; Вернуться назад
        </NavLink>
        <NavLink to="/" className="rounded-full bg-[#FE5F1E] text-[#FFFFFF] py-[16px] px-[25px]">
            Оплатить заказ
        </NavLink>
    </div>
);
export default OrderNavBtns;