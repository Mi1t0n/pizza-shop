import EmptyCart from './EmptyCart/EmptyCart';
import TopBtns from './CartPartsComponents/TopBtns';
import PizzasInCart from './CartPartsComponents/PizzasInCart';
import BottomBtns from './CartPartsComponents/BottomBtns';
import OrderNavBtns from './CartPartsComponents/OrderNavBtns';

const Cart = ({inCart, dispatchInCart, countAllItems, allPrice}) => (
    countAllItems ?
        <div className=" ml-[296px] mt-[140px] mb-[147px] mr-[218px] h-fit">
            <TopBtns dispatchInCart={dispatchInCart}/>
            <PizzasInCart inCart={inCart} dispatchInCart={dispatchInCart}/>
            <BottomBtns countAllItems={countAllItems} allPrice={allPrice}/>
            <OrderNavBtns/>
        </div>
        :
        <EmptyCart/>

);
export default Cart;