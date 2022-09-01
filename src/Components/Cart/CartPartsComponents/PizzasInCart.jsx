import {actions} from '../../../reducers/cart_reducer';

const PizzasInCart = ({inCart, dispatchInCart}) =>
    <div className="min-h-[222px]">
        {
            inCart.map(({name, price, size, dough, picture, count}) => {
                return (
                    <div className="grid grid-cols-[95px,350px,195px,151px,32px] items-center py-[30px]" key={name}>
                        <img src={picture} className="w-[80px]"/>
                        <div>
                            <p className="font-[700] text-[22px] leading-[27px]">{name}</p>
                            <p className="font-[400] text-[18px] text-[#8D8D8D] leading-[22px">{`${dough} , ${size}`}</p>
                        </div>
                        <div>
                            <button className="border-[2px] border-[#FE5F1E] text-[#FE5F1E] w-[32px] rounded-full"
                                    onClick={() => dispatchInCart({type: actions.DECREASE_COUNT, name, size, dough})}>-
                            </button>

                            <span className="mx-[12px] font-[700] text-[22px] leading-[27px]">{count}</span>

                            <button className="border-[2px] border-[#FE5F1E] text-[#FE5F1E] w-[32px] rounded-full"
                                    onClick={() => dispatchInCart({type: actions.INCREASE_COUNT, name, size, dough})}>+
                            </button>
                        </div>
                        <p className="font-[700] text-[22px] leading-[27px]">{price * count} ₽</p>
                        <button className="border-[2px] border-black  text-black rounded-full "
                                onClick={() => dispatchInCart({type: actions.DELETE_ITEM, name, size, dough})}>&times;</button>
                    </div>);
            })
        }
    </div>;
export default PizzasInCart;