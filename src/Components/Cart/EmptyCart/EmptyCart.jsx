import emptyCart from '../../../assets/emptyCart.svg';
import {NavLink} from 'react-router-dom';


const EmptyCart = () => (
    <div
        className="w-[550px] h-[525px] grid grid-rows-[50px,100px 330px,46px] mx-[396px] mb-[100px] mt-[205px] justify-center text-center ">
        <p className="font-[700] text-[32px] leading-[39px] ">Корзина пустая 😕</p>
        <p className="font-[400] text-[18px] text-[#777777] leading-[26px] text-center">
            Вероятней всего, вы не заказывали ещё пиццу.
            Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCart} className="mx-[125px]"/>
        <NavLink to="/"
                 className="rounded-full bg-black text-white font-[700] text-[16px] leading-[19px]
                 w-[210px]  text-center h-[46px] py-[13px] mx-auto"
        >
            Вернуться назад
        </NavLink>
    </div>
);
export default EmptyCart;