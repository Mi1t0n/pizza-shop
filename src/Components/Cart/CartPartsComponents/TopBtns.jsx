import blackCart from '../../../assets/blackCart.svg';
import trashcan from '../../../assets/trashcan.svg';
import {actions} from '../../../reducers/cart_reducer';

const TopBtns = ({dispatchInCart}) => (
    <div className="mb-[30px] flex justify-between">
        <div className="flex">
            <img src={blackCart} className="w-[30px] mr-[19px]"/>
            <p className="text-[32px] font-[700]">Корзина</p>
        </div>
        <div className="flex">
            <img src={trashcan} className="w-[20px] mr-[7px]"/>
            <button className="text-[16px] font-[400] text-black"
                    onClick={() => dispatchInCart({type: actions.CLEAR_CART})}
            >Очистить корзину
            </button>
        </div>
    </div>
);
export default TopBtns;