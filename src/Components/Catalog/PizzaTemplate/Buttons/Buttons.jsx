import plus from '../../../../assets/plus.svg';
import {useState} from 'react';
import {DoughBtns, sizeBtns} from './СhoiceBtns';
import {actions} from '../../../../reducers/cart_reducer';

const Buttons = ({price, name, dispatchInCart, notAvailableItems, picture, inCart}) => {

    const [userChoice, setChoice] = useState({dough: '', size: ''});

    const addOrIncreaseHandler = () => {
        dispatchInCart(
            inCart.find(obj => obj.name === name && obj.size === userChoice.size && obj.dough === userChoice.dough) ?
            {
                type: actions.INCREASE_COUNT,
                name, size: userChoice.size,
                dough: userChoice.dough
            }
            :
            {
                type: actions.ADD_TO_CART,
                name,
                picture,
                price: price[userChoice.size],
                size: userChoice.size,
                dough: userChoice.dough
            }
        );
    };

    return (
        <>
            <nav className="grid grid-rows-2  h-[85px] mt-[22px]">
                <div className="flex">
                    {DoughBtns(notAvailableItems, userChoice, setChoice)}
                </div>
                <div className="flex">
                    {sizeBtns(notAvailableItems, userChoice, setChoice)}
                </div>
            </nav>
            <div className="flex justify-between mt-[17px] items-center">
                <p className="font-[700] text-[26px] text-center pl-[25px]">{price[userChoice.size] || 'от ' + price[26]} ₽</p>
                <button
                    disabled={userChoice.size === '' || userChoice.dough === ''}
                    onClick={addOrIncreaseHandler}
                    className="w-[132px] h-[40px] disabled:bg-[#2C2C2C]/[0.2] bg-[#FE5F1E] rounded-[30px] text-[#FFFFFF] flex items-center justify-center">
                    <img src={plus} className="pr-[7px]"/>
                    <p> Добавить</p>
                </button>
            </div>
        </>
    );
};
export default Buttons;