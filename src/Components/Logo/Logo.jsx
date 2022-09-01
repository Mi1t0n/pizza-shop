import logo from '../../assets/pizzaLogo.svg';
import {NavLink} from 'react-router-dom';

const Logo = () => (
    <NavLink to='/' className="grid grid-cols-[55px,262px] grid-rows-[48px] items-center" >
        <img src={logo} className="w-[38px]"/>
        <div>
            <p className="text-[24px] font-[800] leading-[29px] ">PIZZA</p>
            <p className="text-[16px] font-[400] leading-[19px] text-[#7B7B7B]">Cамая вкусная пицца во вселенной</p>
        </div>
    </NavLink>
)
export default Logo